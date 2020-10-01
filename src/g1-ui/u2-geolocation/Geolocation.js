import React from 'react';
import {useSelector} from 'react-redux';

export default function Geolocation() {


    const latitude = useSelector((state) => state.geolocation.latitude);
    const longitude = useSelector((state) => state.geolocation.longitude);
    const userAddress = useSelector((state) => state.geolocation.userAddress);


    return <div>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Address: {userAddress} </p>
    </div>
}


