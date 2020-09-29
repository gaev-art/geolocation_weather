import React from 'react';
import style from './App.module.css';
import Header from './u1-header/Header';
import Geolocation from './u2-geolocation/Geolocation';
import Weather from './u3-weather/Weather';
import { Route, Switch} from 'react-router-dom';

const ReactGeolocation = () => {
    return <>
        <Geolocation/>
        <Weather/>
    </>
}

function App() {
    return <div className={style.appWrapper}>
        <Header/>

        <div className={style.appWrapperContent}>
            <Switch>
                <Route exact path='/' render={() => <ReactGeolocation/>}/>
                <Route path='/history' render={() => <div>history</div>}/>
            </Switch>

        </div>
    </div>
}

export default App;
