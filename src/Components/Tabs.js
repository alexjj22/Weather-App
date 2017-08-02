/**
 * Created by bigdrop on 13.03.17.
 */

import React from 'react';

import TabTitle from './TabTitle';
import TabContent from './tab-content/TabContent';
import {checkEmptyObj} from '../functions/functions';

export default function Tabs(props) {

    const {settings, onGetApi, onDeleteCity} = props;
    const {cityList, forecast, currentCity}= settings;

    function showWeather(forecast) {
        if (checkEmptyObj(forecast)) {
            return (
                <TabContent
                    forecast={forecast}/>
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


