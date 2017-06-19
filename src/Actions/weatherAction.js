import axios from 'axios';
import {FETCH_WEATHER, CITY_DELETED, KELVIN_TOGGLE} from './types';
  export function setWeather(data) {
    return {
      type: FETCH_WEATHER,
      data
    }
  }
export default function  fetchWeather(city) {
return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=cf0b555fb4c46b8a845bc93e9af30122`, {mode: 'cors'})
     .then(response => { dispatch(setWeather(response.data))
         
         
   })
}}

export function weatherDegree() {
  console.log('123')
 return {
    type: KELVIN_TOGGLE,
    weatherDegree
  }
}