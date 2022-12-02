<template>
  <Navbar />

    <div class="text-center-intro">        
        <h1 class="fw-semibold text-center">Predicción Intradía </h1>
        <p class="text-description">El precio de las principales criptomonedas experimenta fuertes variaciones en un mismo día, generando numerosas oportunidades de inversión. El trading intradía se beneficia de esta situación invirtiendo a corto plazo. La clave para que estas inversiones resulten exitosas está en saber anticiparse.<br></p>        
    </div>

    <div class="table-home">
        <div class="text-center">
        <TableHome />

            <div class="inn-main">
                <div class="inn-sub">
                    <h2>¿Qué debo saber antes de invertir?</h2>
                    <p class="text-start">Invertir en criptomonedas conlleva un riesgo y es importante tratar de minimizar este informándose previamente antes de realizar cualquier operación. Si bien KSP Prediction proporciona información que puede resultar útil a la hora de tomar decisiones, hay que tener en cuenta lo siguiente:</p>
                    <ul class="text-start">
                        <li>KSD Prediction no garantiza ningún resultado. La información sobre predicciones que proporciona esta web se puede o no cumplirse.</li>
                        <li>Las predicciones se basan únicamente en el análisis de datos anteriores. No se tienen en cuenta variables provenientes de fuentes externas como medios de comunicación, redes sociales, etc.</li>
                        <li>KSP Prediction no debe usarse como única fuente de información antes de operar con criptomonedas.</li>
                    </ul>
                    <p class="text-start">La información de esta web es exactamente eso, información. Ninguna parte de este sitio web debe interpretarse como asesoramiento financiero. Por tanto, siempre se debe buscar el asesoramiento de un profesional antes de realizar cualquier inversión. También hay que tener en cuenta que la criptomoneda es una inversión arriesgada, no apta para la mayoría de los perfiles de riesgo personales.</p>
                    <p class="text-start">Cabe la posibilidad de perder toda lo invertido, de modo que nunca se debe arriesgar más de lo que se está dispuesto a perder.</p>
                </div>
            </div>
        </div>
    </div>
  

  <Footer />
  
</template>

<script>

import { defineAsyncComponent } from 'vue'
//import { mapActions } from 'vuex'

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        Footer: defineAsyncComponent(() => import('../components/FooterComp.vue')),
        TableHome: defineAsyncComponent(() => import('../components/TableHome.vue'))
    }
}
</script>

<style scoped>

.inn-sub > h2 {
    padding-top: 25px;
}

.table-home {
    margin: 0px;
    margin-top: 0px;
    margin-right: 0px;
    padding-right: 0px;
    padding-top: 4px;
    background: rgba(228,234,255,0.6);
    padding-bottom: 18px;
}

.inn-main {
    color: #16191b;
    width: 75%;
    margin: 0px auto;
    margin-top: 12px;
}

.inn-sub {
    width: 85%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 6px;
    padding-bottom: 10px;
}

.inn-sub > p {
    color: var(--bs-black);
    margin-bottom: 0px;
    padding-top: 11px;
    padding-bottom: 0px;
    font-size: 15px;
}

.inn-sub > ul {
    padding-top: 6px;
    width: 85%;
    padding-left: 8%;
    font-size: 15px;
}





.text-center-intro {
    height: 400px;
    background: url("@/assets/img/bar_chart_stock_3.jpg");
    background-size: cover;
    padding-top: 6%;
}

.fw-semibold.text-center {
    color: rgb(255,255,255);
    margin-top: 0px;
    position: relative;
    display: block;
    font-size: 33.9px;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
}

.text-description {
    color: rgb(255,255,255);
    text-align: center;
    margin-top: 0px;
    padding-top: 12px;
    margin-right: auto;
    padding-right: 0px;
    padding-left: 0px;
    margin-bottom: 16px;
    width: 60%;
    margin-left: auto;
}

</style>