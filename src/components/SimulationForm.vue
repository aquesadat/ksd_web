<template>
  <form class="text-start d-grid gap-1" style="width: auto;">
    <div class="form-group p-1">
      <div class="input-group">
        <input v-model="amount" :step="0.01" :min="0.01" :max="1000000" placeholder="Importe inversión*" type="number" required="required" class="form-control">
        <div class="input-group-append">
          <div class="input-group-text">€</div>
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
    }
  },
  data() {
    return {
        amount: null,
        interval: '',
        pfee: null,
        sfee: null
    }
  },
  methods: {
    async onSimulate(){

      const dataRq = {
        "cxCurr":this.cxCode.toUpperCase(),
        "exCurr":this.getCurrency().toUpperCase(),
        "amount": this.amount,
        "interval": "M15",
        "saleFee": this.sfee,
        "purchaseFee": this.pfee
      }
      const {data} = await ksdApi.post('/simulate', dataRq)

      if(!data || !data.items){
        //Show error
      }else{
        const elem = data.items[this.getPosByInterval]
        console.log(elem);

      }
    }
  }

}
</script>

<style>

</style>