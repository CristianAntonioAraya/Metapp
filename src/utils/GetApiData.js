import axios from "axios";

const key_api = '2e35bdece4744d82aad150107221403';
const URL_Api = 'http://api.weatherapi.com/v1'

export const getApiDataForecast = ( city ) => {
    if(city === null || city === ''){ return }
    return (
        axios.get(`${URL_Api}/forecast.json?key=${key_api}&days=10&q=${city}`)
        .then( ({data}) => {
            return data
        })
        .catch( error => {
            return 'Error'
        })
    )
}