
export const getAllEntries = (state) => () => {
    return state.entries
}


export const getCurrency = (state) => () => {
    return state.currency
}

export const getCxDataByCode = (state) => (id= '') => {
    return state.cxData.get(id)
}