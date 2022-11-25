<template>
  <Navbar />

  <div class="text-center" style="padding-right: 5%;margin-right: 0px;padding-left: 5%;padding-top: 15px;">
    <div class="text-start" style="padding-left: 0px;">
        <h1 style="font-size: 35.5px;">{{getCxName.toUpperCase()}} ({{id.toUpperCase()}})</h1>
        <h4>Evolución y predicción de precio ({{getCurrency()}})</h4>
    </div>
    <div style="padding-bottom: 5%; padding-top: 2%">
        <div class="row">
            <div class="col-md-6" style="width: 60%;">
              <CryptoChart :cxCode="id"/>
            </div>
            <div class="col-md-6 col-lg-6" style="width: 40%;background: transparent;border-left-width: 1px;border-left-style: inset;">
              <div>
                  <h4 class="text-start" style="padding-bottom: 3%;">Simular inversión</h4>
                  <div class="row">
                      <div class="col" style="width: 50%;">
                          <div class="text-start" style="width: auto;">
                            <SimulationForm />
                          </div>
                      </div>
                      <div class="col" style="width: 50%;">
                          <div></div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    <div class="text-start">
        <h5>Última lectura</h5>
        <div style="font-size: 15px;">
            <div class="row">
                <div class="col-md-12"><span><strong>Fecha/hora: </strong>17/11/2022 16:18 (CET)&nbsp;</span></div>
            </div>
            <div class="row">
                <div class="col-md-4" style="width: auto;"><span><strong>Máximo:</strong> 20,458.25€</span></div>
                <div class="col-md-4" style="width: auto;"><span><strong>Mínimo:</strong> 20,356.89€</span></div>
                <div class="col-md-4" style="width: auto;"><span><strong>Apertura:</strong> 20,489.36€</span></div>
                <div class="col"><span><strong>Cierre: </strong>21,589.32€</span></div>
            </div>
        </div>
        <div style="padding-top: 20px;">
            <p style="font-size: 15px;"><span style="color: rgb(0, 0, 0);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span><br><br></p>
        </div>
    </div>
</div>

  <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters} from 'vuex'

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
      SimulationForm: defineAsyncComponent(() => import('../components/SimulationForm.vue'))
  },
  computed:{
        ...mapGetters(['getCurrency']),
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