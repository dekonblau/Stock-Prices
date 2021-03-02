const axios = require("axios");
const BASE_URL = 'https://financialmodelingprep.com/api/v3/'
const FROM_DATE = '2020-12-01'
const TO_DATE = '2021-01-26'


module.exports = {
    
    getStockHistory: (url) => axios({

        method:"GET",
        url : url,
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        }
    }),

        getCurrentStockPrice: (url) => axios({

            method:"GET",
            url : url,
            headers: {
                "content-type":"application/x-www-form-urlencoded"
            }

    }),




}


