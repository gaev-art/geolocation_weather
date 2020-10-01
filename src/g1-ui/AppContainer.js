import React, {useEffect} from 'react';
import App from './App';
import {useDispatch, useSelector} from 'react-redux';
import {action, getAddress} from '../g2-bll/Geolocation-Reducer';
import {getWeather} from '../g2-bll/weather-Reducer';

export default function AppContainer() {
    const dispatch = useDispatch();

    const lat = useSelector((state) => state.geolocation.latitude);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    const getCoordinates = (position) => {
        const {latitude, longitude} = position.coords;
        const latitudeInRedux = latitude.toFixed(3)
        const longitudeInRedux = longitude.toFixed(3)
        dispatch(action.setCoordinatesSuccess(latitudeInRedux, longitudeInRedux));
        if (lat !== latitudeInRedux) {
            dispatch(getAddress(latitude, longitude))
            dispatch(getWeather(latitude, longitude));
        }
    };

    const handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log('User denied the request for Geolocation.');
                break;
            case error.POSITION_UNAVAILABLE:
                console.log('Location information is unavailable.');
                break;
            case error.TIMEOUT:
                console.log('The request to get user location timed out.');
                break;

            default:
                console.log('An unknown error occurred.');
        }
    };


    return <App/>
}
