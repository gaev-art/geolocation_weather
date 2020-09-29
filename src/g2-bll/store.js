import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {GeolocationReducer} from './Geolocation-Reducer';
import {WeatherReducer} from './weather-Reducer';


const rootReducer = combineReducers({
    geolocation: GeolocationReducer,
    weather:WeatherReducer
});


export let store = createStore(rootReducer, applyMiddleware(thunk));
