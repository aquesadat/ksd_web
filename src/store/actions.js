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

export const loadCxData = async ({ commit }, cxInfo ) => {

    const loadCxDataRq = {       
        "cxCurr": cxInfo.cxCurr.toUpperCase(),
        "exCurr": cxInfo.exCurr,
        "interval":"M15",
        "extended": false
    }

    const {data} = await ksdApi.post('/data', loadCxDataRq)

    const cxData = {
        cxCode: cxInfo.cxCurr,
        pastData: []
    }

    if(!data || !data.items){
        commit('setCxData', cxData)
        return
    }

    const dataLoaded = []
    for(let i=0; i< data.items.length; i++){
        dataLoaded.push({
            ...data.items[i]
        })
    }
    cxData.pastData = dataLoaded
    commit('setCxData', cxData)

    return dataLoaded

}