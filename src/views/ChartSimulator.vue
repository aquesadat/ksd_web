<template>
  <Navbar />

  <div class="text-center" style="padding-right: 5%;margin-right: 0px;padding-left: 5%;padding-top: 15px;">
    <div class="text-start" style="padding-left: 0px;">
        <h1 style="font-size: 35.5px;">
                <img v-bind:src="require(`../assets/img/cxcurrs/small/${imgName}.webp`)" style="width: 35px;height: 35px;;margin-bottom: 9px;">
                {{getCxName.toUpperCase()}} ({{id.toUpperCase()}})
        </h1>
        <h4>Evolución y predicción de precio ({{getCurrency()}})</h4>
    </div>
    <div class="container-fluid" style="padding-bottom: 5%; padding-top: 2%">
        <div class="row">
            <div class="col-md-7" style="border-right-width:2px;border-right-style: groove;">
              <CryptoChart :cxCode="id"/>
            </div>
            <div class="col-md-5" >
              <div style="padding-left: 5%;">
                  <h4 class="text-start" style="padding-bottom: 3%;">Simular inversión</h4>
                  <div class="row">                                           
                      <SimulationForm :cxCode="id" />                      
                  </div>
              </div>
            </div>
        </div>
    </div>
    <div class="text-start">
        <MoreInfo :cxCode="id" />
    </div>
</div>

  <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters} from 'vuex'
import {cgCode} from "@/api/util"

export default {
  props:{
    id:{
      type: String,
      required: true
    }
  },
  components: {
      Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
      Footer: defineAsyncComponent(() => import('../components/FooterComp.vue')),
      CryptoChart: defineAsyncComponent(() => import('../components/CryptoChart.vue')),
      SimulationForm: defineAsyncComponent(() => import('../components/SimulationForm.vue')),
      MoreInfo: defineAsyncComponent(() => import('../components/MoreInfo.vue')) 
  },
  computed:{
        ...mapGetters(['getCurrency']),
        imgName(){
            return cgCode(this.id.toLowerCase());
        },
        getCxName(){
          const name = ""
            switch (this.id.toUpperCase()){
              case "ADA": 
                      return "Cardano"
              case "BNB": 
                      return "Binance Coin"
              case "BTC": 
                      return "Bitcoin"
              case "DOGE": 
                      return "Dogecoin"
              case "DOT": 
                      return "Polkadot"
              case "ETH": 
                      return "Ethereum"
              case "LTC": 
                      return "Litecoin"
              case "SOL": 
                      return "Solana"
              case "UNI": 
                      return "Uniswap"
              case "XRP": 
                      return "Ripple"
            }
            return name
        }

  }
}
</script>


<style>

</style>