import ksdApi from "@/api/ksdApi";

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