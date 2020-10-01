import axios from 'axios';

const KEY = process.env.REACT_APP_KEY_FOR_WEATHER

export const getWeatherApi = {
    getWeather(lat, lon) {
        return axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apikey=${KEY}&lang=ru&units=metric`)
            .then(response => response.data)
            .catch(e => console.log(e.message))
    }
};

