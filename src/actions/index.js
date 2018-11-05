import axios from 'axios';

const API_KEY = 'dafc727ed94aafa6c819848b3828d489';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log('REQUEST: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}