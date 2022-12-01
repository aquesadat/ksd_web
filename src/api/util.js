export const currSymbol = (currencyCode) => {
    const curr = ""
    switch (currencyCode){
        case "EUR": 
            return "€"
        case "USD":
            return "$"
    }
    return curr
}

export const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatPrice = (val, currCode) => {
    return val.toLocaleString('en-US', {maximumFractionDigits:2})+currSymbol(currCode)
}

