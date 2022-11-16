import axios from 'axios'

const ksdApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/intraday'
})

export default ksdApi