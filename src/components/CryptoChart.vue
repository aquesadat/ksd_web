<template>
  <Line v-if="loaded" 
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import {mapActions, mapGetters} from 'vuex'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'CryptoChart',
  components: {
    Line
  },
  props: {
    cxCode:{
      type: String,
      required: true
    },
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  computed:{
    ...mapGetters(['getCurrency'])
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: '#4b5c87',
            borderColor: '#4b5c87',
            borderWidth: 2,
            data: [],
            cubicInterpolationMode: 'monotone',
            pointStyle: 'circle',
            pointRadius: 2
          },
          {
            backgroundColor: '#6e86c5',
            data: [],
            borderColor: '#6e86c5',
            borderWidth: 2,
            borderDash: [10, 3],
            cubicInterpolationMode: 'monotone',
            pointStyle: 'circle',
            pointRadius: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false,
            }
        },
        scales: {
          y: {
            type: 'linear',
            grace: '5%'
          }
        }
      },

    }
  },
  methods:{
    ...mapActions(['loadReadCxData', 'loadPredictCxData'])
  },
  async mounted () {
    this.loaded = false
    const cxInfo = {
      cxCurr: this.cxCode,
      exCurr: this.getCurrency(),
      interval: 'M60'
    }

    const sizeRead = 8
    const sizePredict = 8

    try{
      //Data read
      const dataRead = await this.loadReadCxData(cxInfo)
      let labels = dataRead.map(e => e.dateTime).slice(-sizeRead)
      const emptyForPredict = Array(sizePredict).fill(NaN)
      let priceRead = dataRead.map(e => e.avg).slice(-sizeRead)
      const joinPrice = priceRead.slice(-1)
      priceRead.push(...emptyForPredict)
      this.chartData.datasets[0].data = priceRead
      
      //Data predicted
      const dataPredict = await this.loadPredictCxData(cxInfo)
      labels.push(...dataPredict.map(e => e.dateTime).slice(0,sizePredict))
      const emptyForRead = Array(sizeRead-1).fill(NaN)
      let pricePredict = dataPredict.map(e => e.expectedVal).slice(0,sizePredict)
      pricePredict.unshift(...joinPrice)
      pricePredict.unshift(...emptyForRead)
      this.chartData.datasets[1].data = pricePredict


      for(let i=0; i<labels.length; i++){
        labels[i] = labels[i].substring(0,labels[i].length-3)
        if(i != 0 && i!= labels.length-1){
          labels[i] = labels[i].split(" ")[1]
        }else{
          labels[i] = labels[i].split(" ")
          labels[i][0] = labels[i][0].replace("/20","/");
        }
        
      }

      this.chartData.labels = labels

      this.loaded = true
    }catch(e){
      console.error(e);
    }
  }
}
</script>