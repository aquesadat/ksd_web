<template>
  <Navbar />
  <!-- <h1>Id: {{id}}</h1> -->

  <div class="text-center" style="padding-right: 5%;margin-right: 0px;padding-left: 5%;padding-top: 15px;">
    <div class="text-start" style="padding-left: 0px;">
        <h1 style="font-size: 35.5px;">BITCOIN (BTC)</h1>
        <h4>Evolución y predicción de precio (EUR)</h4>
    </div>
    <div style="padding-bottom: 5%;">
        <div class="row">
            <div class="col-md-6" style="width: 60%;">
                <div><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Revenue&quot;,&quot;backgroundColor&quot;:&quot;#4e73df&quot;,&quot;borderColor&quot;:&quot;#4e73df&quot;,&quot;data&quot;:[&quot;4500&quot;,&quot;5300&quot;,&quot;6250&quot;,&quot;7800&quot;,&quot;9800&quot;,&quot;15000&quot;],&quot;fill&quot;:true}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:true,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;position&quot;:&quot;top&quot;,&quot;reverse&quot;:false},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;bold&quot;,&quot;display&quot;:true,&quot;text&quot;:&quot;BTC/EUR&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;3&quot;],&quot;zeroLineBorderDash&quot;:[&quot;3&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:0}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;3&quot;],&quot;zeroLineBorderDash&quot;:[&quot;3&quot;],&quot;drawOnChartArea&quot;:true},&quot;ticks&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:0}}]}}}"></canvas></div>
            </div>
            <div class="col-md-6 col-lg-6" style="width: 40%;">
                <div></div>
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
<div class="text-center" style="padding-right: 0px;margin-right: 0px;margin-bottom: 0px;padding-bottom: 10px;background: #202739;padding-top: 6px;">
    <div class="text-start" style="width: 80%;margin-right: auto;margin-left: auto;">
        <p class="text-start" style="margin: 0px auto;margin-bottom: 0px;color: rgb(255,255,255);background: transparent;font-size: 13px;padding-top: 14px;padding-bottom: 30px;">Descargo de responsabilidad: Coinpredictor.io no es responsable de sus decisiones financieras y de inversión, simplemente presentamos hechos y datos que se utilizarán solo con fines informativos. La naturaleza volátil de las criptomonedas, los comportamientos comerciales de los actores del mercado y la influencia de los medios de comunicación pueden afectar los datos y la información proporcionada; por lo tanto, Coinpredictor.io no es responsable de ninguna pérdida financiera que pueda derivarse de la elección de inversión sobre la base de la información proporcionada aquí, que en sí misma es dinámica y es propensa a cambiar con el tiempo.<br><br></p>
    </div>
</div>

  <Footer />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props:{
    id:{
      type: String,
      required: true
    }
  },
  components: {
      Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
      Footer: defineAsyncComponent(() => import('../components/FooterComp.vue'))
  }
}
</script>


<style>

</style>