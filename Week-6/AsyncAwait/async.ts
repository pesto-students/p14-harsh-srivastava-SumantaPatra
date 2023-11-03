// const jsonData = {
//     "success": true,
//     "timestamp": 1519296206,
//     "base": "EUR",
//     "date": "2021-03-17",
//     "rates": {
//         "AUD": 1.566015,
//         "CAD": 1.560132,
//         "CHF": 1.154727,
//         "CNY": 7.827874,
//         "GBP": 0.882047,
//         "JPY": 132.360679,
//         "USD": 1.23396,
//     }
//  }

// Requirements

// Your function should use async/await to handle the asynchronous nature of fetching data from the API.
// Your function should make a request to the exchange rates API using the fetch API or a library like axios.
// Your function should handle errors appropriately and return meaningful error messages.
// Your function should round the exchange rate to 4 decimal places.
// Your function should return null if the specified currencyCode is not found in the API response.


async function getExchangeRate(currencyCode:string){
    try {
        const res = await fetch("http://api.exchangerate.host/latest?access_key=165d125375b1eae7f84db99ea1e98304");
        const jsonData = await res.json()
        const rate = jsonData?.rates?.[currencyCode]?.toFixed(4)
        return !rate ? null : rate;
    } catch (error) {
        throw error
    }
}

getExchangeRate('USD').then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
getExchangeRate('XYZ').then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})