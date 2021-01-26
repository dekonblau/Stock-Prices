const FinancialAPI = require('./financial')

const asyncApiCall = async () => {
    const brookdaleResponse = await FinancialAPI.getBrookdale()

    // console.log(response.data)
    var data = brookdaleResponse.data;
    var symbol = data.symbol;
    var historicalArray = data.historical;
    var numberOfElements = historicalArray.length;

    var highest = -1;
    var lowest = 10000000;

    historicalArray.forEach(element => {
        isHighest(element.high);
        isLowest(element.low);
    });


    function isHighest(price) {
        if (price > highest) 
            highest = price
    }

    function isLowest(price) {
        if (price < lowest) 
            lowest = price
    }

        console.log('symbol: ', symbol);
        console.log('highest: ', highest);
        console.log('lowest', lowest);

}

asyncApiCall()
