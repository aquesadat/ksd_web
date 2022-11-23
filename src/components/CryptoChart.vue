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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            cubicInterpolationMode: 'monotone'
          },
          {
            backgroundColor: 'rgb(54, 162, 235)',
            data: [],
            borderColor: 'rgb(54, 162, 235)',
            cubicInterpolationMode: 'monotone'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false
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

    const sizeRead = 12
    const sizePredict = 12

    try{
      //Data read
      const dataRead = await this.loadReadCxData(cxInfo)
      let labels = dataRead.map(e => e.dateTime).slice(-sizeRead)
      const emptyForPredict = Array(sizePredict).fill(NaN)
      let priceRead = dataRead.map(e => e.avg).slice(-sizeRead)
      priceRead.push(...emptyForPredict)
      this.chartData.datasets[0].data = priceRead
      
      //Data predicted
      const dataPredict = await this.loadPredictCxData(cxInfo)
      labels.push(...dataPredict.map(e => e.dateTime).slice(0,sizePredict))
      const emptyForRead = Array(sizeRead).fill(NaN)
      let pricePredict = dataPredict.map(e => e.expectedVal).slice(0,sizePredict)
      pricePredict.unshift(...emptyForRead)
      this.chartData.datasets[1].data = pricePredict

      this.chartData.labels = labels

      this.loaded = true
    }catch(e){
      console.error(e);
    }
  }
}
</script>