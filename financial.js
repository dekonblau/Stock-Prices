const axios = require("axios");
const BASE_URL = 'https://financialmodelingprep.com/api/v3/'

module.exports = {
    getBrookdale: () => axios({
        method:"GET",
        url : BASE_URL + 'historical-price-full/BKD?from=2019-01-01&to=2021-01-26&apikey=bb7edc1db634f403e9e1d4261a537e79',
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        }
    }),

    getCostco: () => axios({
        method:"GET",
        url : BASE_URL + 'historical-price-full/BKD?from=2019-01-01&to=2021-01-26&apikey=bb7edc1db634f403e9e1d4261a537e79',
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        }
    }),

    getMicrosoft: () => axios({
        method:"GET",
        url : BASE_URL + 'historical-price-full/BKD?from=2019-01-01&to=2021-01-26&apikey=bb7edc1db634f403e9e1d4261a537e79',
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        }
    })
}
