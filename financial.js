const axios = require("axios");

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


