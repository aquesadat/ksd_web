<template>
    <div class="text-start" style="background: #ffffff;width: 85%;margin: 0px auto;">
        
        <div v-if="isLoading" class="d-flex justify-content-center" style="margin-top: 15px;">            
                <strong>Cargando datos ...</strong>           
            <div class="spinner-border ml-auto" style="margin-left: 40px;" role="status" aria-hidden="true"></div>
        </div>
        
        <div v-else class="table-responsive" style="margin: 0px auto;padding-left: 1%;">
            <table class="table">
                <colgroup>
                    <col span="1" style="width: 8%">
                    <col span="2" style="width: auto">
                    <col span="3" style="width: auto">
                    <col span="4" style="width: auto">
                    <col span="5" style="width: auto">
                    <col span="6" style="width: auto">
                    <col span="7" style="width: auto">
                </colgroup>
                <thead class="text-start">
                    <tr>
                        <th>Rank</th>
                        <th>Criptomoneda</th>
                        <th>Tendencia (24h)</th>
                        <th>Precio Actual</th>                       
                        <th>Esperado (24h)</th>
                        <th>Probabilidad</th>
                        <th style="width: 83.2px;">+Info</th>
                    </tr>
                </thead>
                <tbody class="text-start">

                    <tr v-for="entry in allEntries" :key="entry.id">
                        <td>#{{entry.rank}}</td>
                        <td>{{entry.cxCurrDesc}} ({{entry.cxCurr}})</td>
                        <td v-if="isDownTrend(entry.expectedRaise)" class="down-trend">
                            <img src="@/assets/img/red_arrow_down_final.png">
                            &nbsp;
                            {{entry.expectedRaise}}
                        </td>
                        <td v-else class="up-trend">
                            <img src="@/assets/img/green_arrow_up_final.png">
                            &nbsp;
                            {{entry.expectedRaise}}
                        </td>
                        <td>{{parsePrice(entry.currVal)}}{{currSymbol}}</td>
                        <td>{{parsePrice(entry.expectedVal)}}{{currSymbol}}</td>
                        <td>{{entry.success}}</td>
                        <td>
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/area-chart-gfbfc0cb1e_640.png" style="width: 70px;">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'

export default {
   
    computed:{
        ...mapGetters(['getAllEntries','getCurrency']),
        ...mapState(['isLoading']),
        allEntries(){
            return this.getAllEntries()
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
    methods:{
        ...mapActions(['loadEntries']),
        isDownTrend(expRaise){
            return expRaise.startsWith('-')
        },
        parsePrice(price){
            return price.toLocaleString('en-US', {maximumFractionDigits:2});
        },
        
    },
    created(){
        this.loadEntries()
    }


}
</script>

<style scoped>



.up-trend{
    color: #458b4a
}

.up-trend > img{
    width: 44px;
    height: 31px;
    margin-right: 5px;
}

.down-trend{
    color: #af2929
}

.down-trend > img{
    width: 44px;
    height: 31px;
    padding-right: 0px;
}

</style>