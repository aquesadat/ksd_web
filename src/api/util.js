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

export const cgCode = (cxCode) => {
    const curr = ""
    switch (cxCode){
        case "ada":
            return "cardano"
        case "btc":
            return "bitcoin"
        case "dot":
            return "polkadot"
        case "ltc":
            return "litecoin"
        case "uni":
            return "uniswap"
        case "bnb":
            return "binancecoin"
        case "doge":
            return "dogecoin"
        case "eth":
            return "ethereum"
        case "sol":
            return "solana"
        case "xrp":
            return "ripple"
    }
    return curr
}

