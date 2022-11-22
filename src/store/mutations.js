

export const setEntries = (state, entries) => {
    state.entries = [...entries]
    state.isLoading = false
}

export const setCurrency = (state, currency) => {
    state.currency = currency
}

export const setCxData = ( state, cxData ) => {
    state.cxData.set(cxData.cxCode, cxData.pastData)
}