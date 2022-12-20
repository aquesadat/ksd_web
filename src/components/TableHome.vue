<template>
    <div class="text-start" style="background: #ffffff;width: 85%;margin: 0px auto;">
        
        <div v-if="loaded" class="table-responsive" style="margin: 0px auto;padding-left: 1%;">
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

                    <tr v-for="suggestion in allSuggestions" :key="suggestion.id">
                        <td>#{{suggestion.rank}}</td>
                        

                        <td>
                             <a href="#" class="unlink" @click="$router.push({name:'chart', params:{id:suggestion.cxCurr.toLowerCase()}})">
                                <img v-bind:src="require(`../assets/img/cxcurrs/thumb/${imgName(suggestion.cxCurr)}.webp`)" style="margin-right: 6px;">                             
                                {{suggestion.cxCurrDesc}} ({{suggestion.cxCurr}})                                
                             </a>
                        </td>

                        <td v-if="isDownTrend(suggestion.expectedRaise)" class="down-trend">
                            <img src="@/assets/img/red_arrow_down_final.png">
                            &nbsp;
                            {{suggestion.expectedRaise}}
                        </td>
                        <td v-else class="up-trend">
                            <img src="@/assets/img/green_arrow_up_final.png">
                            &nbsp;
                            {{suggestion.expectedRaise}}
                        </td>


                        <td>{{parsePrice(suggestion.currVal)}}{{currSymbol}}</td>
                        <td>{{parsePrice(suggestion.expectedVal)}}{{currSymbol}}</td>
                        <td>{{suggestion.success}}</td>
                        <td>
                            <a href="#" @click="$router.push({name:'chart', params:{id:suggestion.cxCurr.toLowerCase()}})">
                                <img class="img-fluid" src="@/assets/img/area-chart-gfbfc0cb1e_640.png" style="width: 70px;">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else class="d-flex justify-content-center" style="margin-top: 15px;">            
                <strong>Cargando datos ...</strong>           
            <div class="spinner-border ml-auto" style="margin-left: 40px;" role="status" aria-hidden="true"></div>
        </div>

    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import {cgCode} from "@/api/util"
export default {
    data(){
        return{
            loaded: false,
            allSuggestions: []
        }
    },
    computed:{
        ...mapGetters(['getAllSuggestions','getCurrency', 'getSuggestionsLastCall']),
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
        ...mapActions(['loadSuggestions']),
        isDownTrend(expRaise){
            return expRaise.startsWith('-')
        },
        parsePrice(price){
            return price.toLocaleString('en-US', {maximumFractionDigits:2});
        },
        imgName(cxCode){
            return cgCode(cxCode.toLowerCase());
        }
    },
    async created(){
        this.loaded = false
        const lastCall = this.getSuggestionsLastCall()
        let suggestions = []
        if(!lastCall){
            suggestions = await this.loadSuggestions()
        }else{
            const diff = (new Date() - lastCall)/(1000*60)  //in minutes
            if(diff >= 4){
                suggestions = await this.loadSuggestions()
            }else{
                suggestions = this.getAllSuggestions()
                if(!suggestions){
                    suggestions = await this.loadSuggestions()
                }
            }
        }
        this.allSuggestions = suggestions

        this.loaded = true
    }


}
</script>

<style scoped>



.up-trend{
    color: #458b4a
}

.up-trend > img{
    width: 35px;
    height: 27px;
    margin-right: 5px;
}

.down-trend{
    color: #af2929
}

.down-trend > img{
    width: 35px;
    height: 27px;
    padding-right: 0px;
}

a.unlink {
  color: inherit;
  text-decoration: inherit;
}
a.unlink:hover {
  color: inherit;
  text-decoration: inherit;
}

</style>