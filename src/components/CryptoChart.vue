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
    ...mapGetters(['getCurrency', 'getCxDataByCode']),
    getLabels(){
      const labels = this.getCxDataByCode(this.cxCode).map(e => e.dateTime)
      return labels
    }
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 18, 20, NaN, NaN],
            cubicInterpolationMode: 'monotone'
          },
          {
            backgroundColor: 'rgb(54, 162, 235)',
            data: [NaN, NaN, 20, 25, 12],
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
    ...mapActions(['loadCxData'])
  },
  async mounted () {
    this.loaded = false
    const cxInfo = {
      cxCurr: this.cxCode,
      exCurr: this.getCurrency()
    }

    try{
    const dataLoaded = await this.loadCxData(cxInfo)
    this.chartData.labels = dataLoaded.map(e => e.dateTime)

    this.loaded = true
    }catch(e){
      console.error(e);
    }
  }
}
</script>