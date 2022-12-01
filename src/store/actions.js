import ksdApi from "@/api/ksdApi";
import axios from 'axios'

export const loadEntries = async ({commit}) => {

    const curr = 'EUR'

    const suggestRq = {
        "exCurr":curr
    }
    const {data} = await ksdApi.post('/suggest', suggestRq)

    if(!data || !data.items){
        commit('setEntries', [])
        return
    }

    const entries = []
    for(let i=0; i< data.items.length; i++){
        entries.push({
            ...data.items[i]
        })
    }

    commit('setEntries', entries)
    commit('setCurrency', curr)

}

export const loadReadCxData = async ({ commit }, cxInfo ) => {

    const loadCxDataRq = {       
        "cxCurr": cxInfo.cxCurr.toUpperCase(),
        "exCurr": cxInfo.exCurr,
        "interval": cxInfo.interval,
        "extended": false
    }

    const {data} = await ksdApi.post('/data', loadCxDataRq)

    const cxData = {
        cxCode: cxInfo.cxCurr,
        readData: []
    }

    if(!data || !data.items){
        commit('setReadData', cxData)
        return
    }

    const dataLoaded = []
    for(let i=0; i< data.items.length; i++){
        dataLoaded.push({
            ...data.items[i]
        })
    }
    cxData.readData = dataLoaded
    commit('setReadData', cxData)

    return dataLoaded

}

export const loadPredictCxData = async ({ commit }, cxInfo ) => {

    const loadCxDataRq = {       
        "cxCurr": cxInfo.cxCurr.toUpperCase(),
        "exCurr": cxInfo.exCurr,
        "interval": cxInfo.interval,
    }

    const {data} = await ksdApi.post('/prediction', loadCxDataRq)

    const cxData = {
        cxCode: cxInfo.cxCurr,
        predictData: []
    }

    if(!data || !data.items){
        commit('setPredictData', cxData)
        return
    }

    const dataLoaded = []
    for(let i=0; i< data.items.length; i++){
        dataLoaded.push({
            ...data.items[i]
        })
    }
    cxData.predictData = dataLoaded
    commit('setPredictData', cxData)

    return dataLoaded

}

export const loadMoreData = async({ commit }, cxInfo) => {

    let {data: lastData}  = await axios.get(`https://api.coingecko.com/api/v3/coins/${cxInfo.cxCurr}/ohlc?vs_currency=${cxInfo.exCurr}&days=1`)
    lastData = lastData[lastData.length-1]
    
    const {data: marketData} = await axios.get(`https://api.coingecko.com/api/v3/coins/${cxInfo.cxCurr}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    
    
    const cxData = {
        cxCode: cxInfo.cxCurr,
        moreInfo:{
            lastData: {
                high: null,
                low: null,
                open: null,
                close: null
            },
            mktData:{
                mktcap: null,
                volume: null
            },
            evoData:{
                evo24h: null,
                evo7d: null,
                evo14d: null,
                evo30d: null
            }
        }
    }
    
     if(lastData){
        cxData.moreInfo.lastData.open = lastData[0]
        cxData.moreInfo.lastData.high = lastData[1]
        cxData.moreInfo.lastData.low = lastData[2]
        cxData.moreInfo.lastData.close = lastData[3]
     }

     if(marketData){
        if(marketData.market_data){
            cxData.moreInfo.mktData.mktcap = marketData.market_data.market_cap[cxInfo.exCurr]
            cxData.moreInfo.mktData.volume = marketData.market_data.total_volume[cxInfo.exCurr]
            cxData.moreInfo.evoData.evo24h = marketData.market_data.price_change_percentage_24h
            cxData.moreInfo.evoData.evo7d = marketData.market_data.price_change_percentage_7d
            cxData.moreInfo.evoData.evo14d = marketData.market_data.price_change_percentage_14d
            cxData.moreInfo.evoData.evo30d = marketData.market_data.price_change_percentage_30d
        }
     }

     commit('setMoreData', cxData)
     return cxData

}