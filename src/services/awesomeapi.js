import axios from "axios";

const lestDays = function (coin, days){

    return axios.get(`https://economia.awesomeapi.com.br/json/daily/${coin}/${days}`)
        .then((response) => {
            return response.data
        })
}

const lest = function (coins){

    return axios.get(`https://economia.awesomeapi.com.br/last/${coins}`)
        .then((response) => {
            return response.data
        })

}

export default {lestDays, lest}