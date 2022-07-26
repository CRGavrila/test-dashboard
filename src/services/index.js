import axios from 'axios';

const getWeather = (start, end) => axios.get(`/api?latitude=52.52&longitude=13.41&hourly=temperature_2m,cloudcover&start_date=${start}&end_date=${end}`)
  .then(function (response) {
    return {
      error: false,
      data: response.data
    }
  })
  .catch(function (error) {
    return {
      error: false,
      data: null
    }
  })


export {
  getWeather
}
