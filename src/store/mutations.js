

export const setEntries = (state, entries) => {
    state.entries = [...entries]
    state.isLoading = false
}

export const setCurrency = (state, currency) => {
    state.currency = currency
}