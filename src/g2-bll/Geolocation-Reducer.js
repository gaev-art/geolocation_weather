import {getAddressApi} from '../g3-dal/Geolocation-api';

const SET_COORDINATES = 'SET_COORDINATES';
const GET_USER_ADDRESS = 'GET_USER_ADDRESS';
const HISTORY_USER_ADDRESS = 'HISTORY_USER_ADDRESS';


const initialState = {
    latitude: '',
    longitude: '',
    userAddress: '',
    historyUserAddress: []
};


export const GeolocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COORDINATES: {
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude
            }
        }
        case GET_USER_ADDRESS: {
            return {
                ...state,
                userAddress: action.userAddress
            }
        }
        case HISTORY_USER_ADDRESS: {
            return {
                ...state,
                historyUserAddress: [...state.historyUserAddress, ...action.historyUserAddress]
            }
        }
        default:
            return state
    }

}

export const action = {
    setCoordinatesSuccess: (latitude, longitude) => ({type: SET_COORDINATES, latitude, longitude}),
    getUserAddressSuccess: (userAddress) => ({type: GET_USER_ADDRESS, userAddress}),
    historyUserAddressSuccess: (historyUserAddress) => ({type: HISTORY_USER_ADDRESS, historyUserAddress})
};

export const getAddress = (longitude, latitude) => async (dispatch, getState) => {
    let userAddressParse = localStorage.getItem('user address');
    if (userAddressParse) {
        dispatch(action.historyUserAddressSuccess(JSON.parse(userAddressParse)))
    }
    try {
        let data = await getAddressApi.getUserAddress(latitude, longitude);
        const userAddressState = getState().geolocation.historyUserAddress;
        localStorage.setItem('user address', JSON.stringify([data.results[0].formatted_address, ...userAddressState]));
        dispatch(action.getUserAddressSuccess(data.results[0].formatted_address));
    } catch (e) {
        console.table(e.message)
    }
};