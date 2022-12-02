
export const setSuggestData = (state, suggestData) => {
    state.suggestions.data = [...suggestData]
}

export const setSuggestLastCall = (state, lastCall) => {
    state.suggestions.lastCall = lastCall
}

export const setCurrency = (state, currency) => {
    state.currency = currency
}

export const setReadData = ( state, cxData ) => {
    state.readCxData.set(cxData.cxCode, cxData.readData)
}

export const setPredictData = ( state, cxData ) => {
    state.predictCxData.set(cxData.cxCode, cxData.predictData)
}

export const setMoreData = ( state, cxData ) => {
    state.moreInfo.set(cxData.cxCode, cxData.moreInfo)
}