
export const getAllEntries = (state) => () => {
    return state.entries
}

export const getCurrency = (state) => () => {
    return state.currency
}

export const getReadCxDataByCode = (state) => (id= '') => {
    return state.readCxData.get(id)
}

export const getPredictCxDataByCode = (state) => (id= '') => {
    return state.predictCxData.get(id)
}

export const getMoreInfoByCode = (state) => (id= '') => {
    return state.moreInfo.get(id)
}

export const getDescription = (state) => (id= '') => {
    return state.descriptions[id]
}