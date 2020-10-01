import React from 'react';
import {useSelector} from 'react-redux';

export default function Weather() {

    const weather = useSelector(state => state.weather.weather);
    const main = useSelector(state => state.weather.main);


    return <div>
        {weather.map((el, index) => {
            return <p key={index}>{main.temp}C{'\u00b0'},
                <img style={{width: '30px', verticalAlign: 'middle'}}
                     src={`http://openweathermap.org/img/w/${el.icon}.png`} alt=''/>
                {el.description}</p>
        })}
    </div>
}

