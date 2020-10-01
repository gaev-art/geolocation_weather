import {getWeatherApi} from '../g3-dal/Weather-api';


const GET_WEATHER = 'GET_WEATHER'
const SET_WEATHER_IN_LS = 'SET_WEATHER_IN_LS'
const SET_MAIN_IN_LS = 'SET_MAIN_IN_LS'
const SET_DATE_TIME_IN_LS = 'SET_DATE_TIME_IN_LS'


const initialState = {
    weather: [],
    main: {},
    weatherLS: [],
    mainLS: [],
    dateTimeLS: []
};

export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER: {
            return {
                ...state,
                weather: action.weather,
                main: action.main
            }
        }
        case SET_WEATHER_IN_LS: {
            return {
                ...state,
                weatherLS: [...action.weatherLS, ...state.weatherLS]
            }
        }
        case SET_MAIN_IN_LS: {
            return {
                ...state,
                mainLS: [...action.mainLS, ...state.mainLS]
            }
        }
        case SET_DATE_TIME_IN_LS: {
            return {
                ...state,
                dateTimeLS: [...action.dateTimeLS, ...state.dateTimeLS]
            }
        }
        default:
            return state
    }
}

export const action = {
    getWeatherSuccess: (weather, main) => ({type: GET_WEATHER, weather, main}),
    weatherLSSuccess: (weatherLS) => ({type: SET_WEATHER_IN_LS, weatherLS}),
    mainLSSuccess: (mainLS) => ({type: SET_MAIN_IN_LS, mainLS}),
    dateTimeLSSuccess: (dateTimeLS) => ({type: SET_DATE_TIME_IN_LS, dateTimeLS})
};

export const getWeather = (lat, lon) => async (dispatch, getState) => {
    let date = new Date();
    let datesInfo = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        id: date.getSeconds()
    };
    console.log(datesInfo)
    let dateParse = localStorage.getItem('date data')
    if (dateParse) {
        dispatch(action.dateTimeLSSuccess(JSON.parse(dateParse)))
    }
    let weatherDataParse = localStorage.getItem('weather data');
    if (weatherDataParse) {
        dispatch(action.weatherLSSuccess(JSON.parse(weatherDataParse)));
    }
    let mainDataParse = localStorage.getItem('main data');
    if (mainDataParse) {
        dispatch(action.mainLSSuccess(JSON.parse(mainDataParse)));
    }
    try {
        let data = await getWeatherApi.getWeather(lat, lon);
        const weatherState = getState().weather.weatherLS;
        const mainState = getState().weather.mainLS;
        const dateState = getState().weather.dateTimeLS
        localStorage.setItem('weather data', JSON.stringify([data.weather[0], ...weatherState]));
        localStorage.setItem('main data', JSON.stringify([data.main.temp, ...mainState]));
        localStorage.setItem('date data', JSON.stringify([datesInfo, ...dateState]))
        dispatch(action.getWeatherSuccess(data.weather, data.main));
    } catch (e) {
        console.table(e.message)
    }
};
