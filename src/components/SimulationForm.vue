<template>
  <div class="col" style="width: 50%;"> 
    <form class="text-start d-grid gap-1" style="width: auto;">
      <div class="form-group p-1">
        <div class="input-group">
          <input v-model="amount" :step="0.01" :min="0.01" :max="1000000" placeholder="Importe inversión*" type="number" required="required" class="form-control">
          <div class="input-group-append">
            <div class="input-group-text">{{currSymbol}}</div>
          </div>
        </div>
      </div>
      <div class="form-group p-1">
        <div>
          <select v-model="interval"  required="required" class="form-control" aria-describedby="timeHelpBlock">
            <option value="" selected="selected">Tiempo simulación*</option>
            <option value="15m">15 minutos</option>
            <option value="30m">30 minutos</option>
            <option value="45m">45 minutos</option>
            <option value="1h">1 hora</option>
            <option value="6h">6 horas</option>
            <option value="12h">12 horas</option>
            <option value="24h">24 horas</option>
          </select>
        </div>
      </div>
      <div class="form-group p-1">
        <div class="input-group">
          <input v-model="pfee"  :step="0.1" :min="0" :max="100" placeholder="Comisión compra" type="number" aria-describedby="p_feeHelpBlock" class="form-control">
          <div class="input-group-append">
            <div class="input-group-text">%</div>
          </div>
        </div>
      </div>
      <div class="form-group p-1 pb-4">
        <div class="input-group">
          <input v-model="sfee" :step="0.1" :min="0" :max="100" placeholder="Comisión venta" type="number" aria-describedby="s_freeHelpBlock" class="form-control">
          <div class="input-group-append">
            <div class="input-group-text">%</div>
          </div>
        </div>
      </div>
      <div class="form-group p-1 pt-3">
        <a href="#" @click="onSimulate" class="btn btn-primary">Simular</a>
      </div>
    </form>
  </div>
  <div class="col" style="width: 50%;">
  <div v-if="loaded" class="card bg-light mb-3 text-start" style="width: auto;">
    <div class="card-header"><b>Resultado</b></div>
    <div v-if="resultOK" class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><h6>Valor:</h6> <em>{{predictedValue}}{{currSymbol}}</em></li>
        <li class="list-group-item"><h6>Beneficio:</h6> <em>{{profit}}{{currSymbol}}</em></li>
        <li class="list-group-item"><h6>Probabilidad:</h6> <em>{{success}}</em></li>
      </ul>
    </div>
    <div v-else class="card-body">
      <p class="card-text text-danger">Error al realizar la simulación. Revise los datos de entrada.</p>
    </div>
  </div>                         
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import ksdApi from "@/api/ksdApi";

export default {
  props: {
    cxCode:{
      type: String,
      required: true
    }
  },
  computed:{
    ...mapGetters(['getCurrency']),
    getPosByInterval(){
        switch(this.interval){
          case "15m": return 0;
          case "30m": return 1;
          case "45m": return 2;
          case "1h": return 3;
          case "6h": return 24;
          case "12h": return 48;
          case "24h": return 95;
          default: return null;
        }
    },
    currSymbol(){
      const curr = ""
      switch (this.getCurrency()){
          case "EUR": 
              return "€"
          case "USD":
              return "$"
      }
      return curr
    }
  },
  data() {
    return {
        loaded: false,
        resultOK: false,
        amount: null,
        interval: '',
        pfee: null,
        sfee: null,
        predictedValue: null,
        profit: null,
        success: null
    }
  },
  methods: {
    async onSimulate(){
      this.loaded = false
      const dataRq = {
        "cxCurr":this.cxCode.toUpperCase(),
        "exCurr":this.getCurrency().toUpperCase(),
        "amount": this.amount,
        "interval": "M15",
        "saleFee": this.sfee,
        "purchaseFee": this.pfee
      }

      try{
        const {data} = await ksdApi.post('/simulate', dataRq)
        if(!data || !data.items){
          this.resultOK = false
        }else{
          this.resultOK = true
          const elem = data.items[this.getPosByInterval]
          this.predictedValue = elem.expectedVal
          this.profit = elem.profit
          this.success = elem.success
        }
      }catch(e){
        this.resultOK = false
      }


      this.loaded = true
    }
  }

}
</script>

<style>

</style>