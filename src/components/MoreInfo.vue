<template>
    <div v-if="loaded" class="container-fluid pb-4 pt-2">
        <div class="row">
            
            <div class="col-sm-4 pb-2">
                <h5 class="pb-1">Última lectura </h5>
                <p class="border-bottom h6">
                    Máximo:&nbsp;
                    <small class="text-muted">{{high}}</small>
                </p>
                <p class="border-bottom h6">
                    Mínimo:&nbsp;
                    <small class="text-muted">{{low}}</small>
                </p>
                <p class="border-bottom h6">
                    Apertura:&nbsp;
                    <small class="text-muted">{{open}}</small>
                </p>
                <p class="border-bottom h6">
                    Cierre:&nbsp;
                    <small class="text-muted">{{close}}</small>
                </p>
            </div>				
            
            <div class="col-sm-4 pb-2" >
                <h5 class="pb-1">Histórico </h5>
                <p class="border-bottom h6">
                    Evolución 24h:&nbsp;
                    <small class="text-muted">{{evo24h}}%</small>
                </p>
                <p class="border-bottom h6">
                    Evolución 7 días:&nbsp;
                        <small class="text-muted">{{evo7d}}%</small>
                </p>
                <p class="border-bottom h6">
                    Evolución 14 días:&nbsp;
                        <small class="text-muted">{{evo14d}}%</small>
                </p>
                <p class="border-bottom h6">
                    Evolución 30 días:&nbsp;
                        <small class="text-muted">{{evo30d}}%</small>
                </p>
            </div>
            
            <div class="col-sm-4 pb-2" >
                <h5 class="pb-1">Datos mercado </h5>
                <p class="border-bottom h6">
                    Capitalización mercado:&nbsp;
                    <small class="text-muted">{{mktcap}}</small>
                </p>
                <p class="border-bottom h6">
                    Volumen:&nbsp;
                    <small class="text-muted">{{volume}}</small>
                </p>

            </div>
        </div>
    </div>
    <div class="row">
        <p style="font-size: 15px;">{{coinDescription}}</p>
    </div>
</template>

<script>
import {formatPrice} from "@/api/util"
import {mapActions, mapGetters} from 'vuex'
export default {
    props: {
        cxCode:{
        type: String,
        required: true
        }
    },
    computed:{
        ...mapGetters(['getCurrency', 'getDescription']),
        cgCxCode(){
            const curr = ""
            switch (this.cxCode){
                case "ada":
                    return "cardano"
                case "btc":
                    return "bitcoin"
                case "dot":
                    return "polkadot"
                case "ltc":
                    return "litecoin"
                case "uni":
                    return "uniswap"
                case "bnb":
                    return "binancecoin"
                case "doge":
                    return "dogecoin"
                case "eth":
                    return "ethereum"
                case "sol":
                    return "solana"
                case "xrp":
                    return "ripple"
            }
            return curr
        },
        coinDescription(){
            return this.getDescription(this.cxCode)
        }
    },
    data() {
        return {
            loaded : false,
            high: '', 
            low: '',
            open: '',
            close: '',
            evo24h: '',
            evo7d: '',
            evo14d: '',
            evo30d: '',
            mktcap: '',
            volume: '',
            cxCoinDescription: ''
        }
    },
    methods:{
        ...mapActions(['loadMoreData'])
    },
    async mounted(){
        this.loaded = false
        const cxInfo = {
            cxCurr: this.cgCxCode,
            exCurr: this.getCurrency().toLowerCase(),
        }
        const moreInfo = await this.loadMoreData(cxInfo)


        if(moreInfo){
            if(moreInfo.lastData){
                this.high = formatPrice(moreInfo.lastData.high, this.getCurrency()); 
                this.low = formatPrice(moreInfo.lastData.low, this.getCurrency());
                this.open = formatPrice(moreInfo.lastData.open, this.getCurrency());
                this.close = formatPrice(moreInfo.lastData.close, this.getCurrency());
                this.loaded = true
            }

            if(moreInfo.mktData){
                this.mktcap =  formatPrice(moreInfo.mktData.mktcap, this.getCurrency());
                this.volume =  formatPrice(moreInfo.mktData.volume, this.getCurrency());
                this.loaded = true
            }

            if(moreInfo.evoData){
                this.evo24h = moreInfo.evoData.evo24h;
                this.evo7d = moreInfo.evoData.evo7d;
                this.evo14d = moreInfo.evoData.evo14d;
                this.evo30d = moreInfo.evoData.evo30d;
                this.loaded = true
            }      
        }
    }
}
</script>

<style>

</style>