import React from 'react';
import style from './History.module.css'
import {useSelector} from 'react-redux';

export default function History() {

    const weatherHistory = useSelector(state => state.weather.weatherLS);
    const mainHistory = useSelector(state => state.weather.mainLS);
    const userAddressHistory = useSelector(state => state.geolocation.historyUserAddress);
    const dateInfo = useSelector(state => state.weather.dateTimeLS);


    return <div className={style.container}>
        <div className={style.item}>
            {dateInfo.map((el, index) => {
                return (
                    <p key={index}>
                        {el.day}.{el.month}.{el.year}г. {el.hours}:{el.minutes}
                    </p>
                )
            })}
        </div>
        <div className={style.item}>
            {mainHistory.map((el, index) => {
                return (
                    <p key={index}>
                        {el}C{'\u00b0'}
                    </p>
                )
            })}
        </div>
        <div className={style.item}>
            {weatherHistory.map((el, index) => {
                return <p key={index}>
                    {/*<img style={{width: '20px', verticalAlign: 'middle'}}*/}
                    {/*     src={`http://openweathermap.org/img/w/${el.icon}.png`} alt=''/>*/}
                    {el.description}</p>
            })}
        </div>
        <div className={style.item}>
            {userAddressHistory.map((el, index) => {
                return <p key={index}>{el}</p>
            })}
        </div>
    </div>
}

