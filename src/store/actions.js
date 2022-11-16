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