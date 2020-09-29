import axios from 'axios';

const key  = process.env.KEY_FOR_GOOGLE_MAP


export const getAddressApi = {
    getUserAddress(longitude, latitude) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?1.x&latlng=${latitude},${longitude}&key=${key}`)
            .then(response => response.data)
    }
};
