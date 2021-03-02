const FinancialAPI = require('./financial')

const BASE_URL = 'https://financialmodelingprep.com/api/v3/'
const FROM_DATE = '2019-01-01'
const TO_DATE = '2021-01-26'
const API_KEY = 'bb7edc1db634f403e9e1d4261a537e79'

// declare array-of-arrays for stock results
// declare array for totals

module.exports = {
    getStocks: () => ({

    })
}

const asyncApiCall = async () => {
    var stocks = ['BKD', 'COST', 'NVDA']
    var shares = [50, 100, 150]

    var stockData = [];

    for (i = 0; i < stocks.length; i++) {        
        var highest = -1;
        var lowest = 10000000;
        var symbol = stocks[i];
        var shareCount = shares[i];

        var url = buildHistorical(symbol)
        var finResult = await FinancialAPI.getStockHistory(url)
        var historicalData = finResult.data.historical
        var historyCount = historicalData.length

        for (j = 0; j< historyCount; j++) {
            var data = historicalData[j];
            isHighest(data.high)
            isLowest(data.low)
        }

        url = buildCurrentUrl(symbol)
        var currentData = await FinancialAPI.getCurrentStockPrice(url)
        var currentPrice = currentData.data[0].price

        console.log(`${symbol},${shareCount},${highest},${lowest},${currentPrice}`);

        stockData.push({symbol, shareCount, highest, lowest, currentPrice})

        highest = -1
        lowest = 1000000

    }

    console.log(stockData)

    var total = 0
    for (i = 0; i < stockData.length; i++) {
        console.log(`${stockData[i].symbol} ${stockData[i].currentPrice} ${shares[i]}`)
        var currentStockValue = stockData[i].currentPrice * shares[i]
        console.log(`${stockData[i].symbol} ${currentStockValue}`)
        total = total + currentStockValue
    }

    console.log("Total Portfolio value: ", total)


    function isHighest(price) {
        if (price > highest) 
            highest = price
    }

    function isLowest(price) {
        if (price < lowest) 
            lowest = price
    }

    function buildHistorical(symbol) {
        return `${BASE_URL}historical-price-full/${symbol}?from=${FROM_DATE}&to=${TO_DATE}&apikey=${API_KEY}`;
    }

    function buildCurrentUrl(Symbol) {
        return `${BASE_URL}/quote-short/${symbol}?apikey=${API_KEY}`
    }



}

asyncApiCall()




