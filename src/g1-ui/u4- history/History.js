import React from 'react';
import style from './History.module.css'

export default function History() {
    return <div className={style.container}>
        <div className={style.item}>
            <p>дата и время</p>
        </div>
        <div className={style.item}>
            <p>температура</p>
        </div>
        <div className={style.item}>
            <p>погода</p>
        </div>
        <div className={style.item}>
            <p>адрес</p>
        </div>
    </div>
}

