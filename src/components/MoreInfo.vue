<template>
    <div class="container-fluid pb-4 pt-2">
        <div class="row">
            
            <div class="col-sm-4 pb-2">
                <h5 class="pb-1">Última lectura </h5>
                <p class="border-bottom h6">
                    High:
                    <small class="text-muted">{{high}}{{currSymbol}}</small>
                </p>
                <p class="border-bottom h6">
                        Low:
                        <small class="text-muted">{{low}}{{currSymbol}}</small>
                </p>
                <p class="border-bottom h6">
                        Open:
                        <small class="text-muted">{{open}}{{currSymbol}}</small>
                </p>
                <p class="border-bottom h6">
                        Close:
                        <small class="text-muted">{{close}}{{currSymbol}}</small>
                </p>
            </div>				
            
            <div class="col-sm-4 pb-2" >
                <h5 class="pb-1">Evolución de precio </h5>
                <p class="border-bottom h6">
                    24h:
                    <small class="text-muted">{{evo24h}}%</small>
                </p>
                <p class="border-bottom h6">
                        7 días:
                        <small class="text-muted">{{evo7d}}%</small>
                </p>
                <p class="border-bottom h6">
                        14 días:
                        <small class="text-muted">{{evo14d}}%</small>
                </p>
                <p class="border-bottom h6">
                        30 días:
                        <small class="text-muted">{{evo30d}}%</small>
                </p>
            </div>
            
            <div class="col-sm-4 pb-2" >
                <h5 class="pb-1">Datos mercado </h5>
                <p class="border-bottom h6">
                    Market cap:
                    <small class="text-muted">{{mktcap}}{{currSymbol}}</small>
                </p>
                <p class="border-bottom h6">
                    Volume:
                    <small class="text-muted">{{volume}}{{currSymbol}}</small>
                </p>

            </div>
        </div>
    </div>
    <div class="row">
        <p style="font-size: 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    props: {
        cxCode:{
        type: String,
        required: true
        }
    },
    computed:{
        ...mapGetters(['getCurrency']),
        currSymbol(){
            const curr = ""
            switch (this.getCurrency()){
                case "EUR": 
                    return "€"
                case "USD":
                    return "$"
            }
            return curr
        },
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
        }
    },
    data() {
        return {
            high: '', 
            low: '',
            open: '',
            close: '',
            evo24h: '',
            evo7d: '',
            evo14d: '',
            evo30d: '',
            mktcap: '',
            volume: ''
        }
    },
    methods:{
        ...mapActions(['loadMoreData']),
    },
    async mounted(){
        const cxInfo = {
            cxCurr: this.cgCxCode,
            exCurr: this.getCurrency().toLowerCase(),
        }
        const moreInfo = this.loadMoreData(cxInfo)

        if(moreInfo){
            //Ocultar hasta que los datos estén seteados, si es que hay.
        }
    }
}
</script>

<style>

</style>