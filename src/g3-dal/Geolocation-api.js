import axios from 'axios';

const KEY = process.env.REACT_APP_KEY_FOR_GOOGLE_MAP


export const getAddressApi = {
    getUserAddress(longitude, latitude) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?1.x&latlng=${latitude},${longitude}&key=${KEY}`)
            .then(response => response.data)
    }
};
