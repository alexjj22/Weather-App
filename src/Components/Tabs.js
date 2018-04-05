import React from 'react';
import TabTitle from './TabTitle';
import TabContent from './tab-content/TabContent';
import {checkEmptyObj} from '../functions/functions';
import {observer, inject} from 'mobx-react'

function Tabs(props){

    const {
        onGetApi,
        cityList,
        currentCity,
        forecast,
        onDeleteCity,
    } = props.weatherStore;

    function showWeather(forecast) {
        if (checkEmptyObj(forecast)) {
            return (
                <TabContent forecast={forecast}/>
            )
        }
    }

    return (
        <div className='tab'>
            <ul className="tab-title">
                {
                    cityList.map( item => {
                        return (
                            <TabTitle
                                key={ item.id }
                                cityName={ item.city }
                                currentCity={ currentCity }
                                onGetApi={ onGetApi }
                                onDeleteCity={ onDeleteCity }
                            />
                        )
                    })
                }
            </ul>

            { showWeather(forecast) }

        </div>
    )
}

export default inject("weatherStore")( observer( weatherStore => Tabs(weatherStore)) )
