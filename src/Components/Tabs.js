/**
 * Created by bigdrop on 13.03.17.
 */

import React, { Component } from 'react';

import TabTitle from './TabTitle';
import TabContent from './tab-content/TabContent';
import {checkEmptyObj} from '../functions';

export default class Tabs extends Component{

    _showWeather(weather){
        if( checkEmptyObj(weather) ){
            return ( <TabContent/> )
        }
    }

    componentDidMount(){
        const {onGetForecast, currentCity} = this.props;

        if(currentCity !== '') onGetForecast(currentCity);
    }


    render(){

        const {cityList, cityWeather, currentCity, onGetForecast, onDeleteCity}= this.props;
        return (
            <div className='tab'>
                <ul className="tab-title">
                    {
                        cityList.map( (item, index) => {
                            return (
                                <TabTitle
                                    key={ item.id }
                                    cityName={ item.city }
                                    currentCity={ currentCity }
                                    onGetForecast={ onGetForecast }
                                    onDeleteCity={ onDeleteCity }
                                />
                            )
                        })
                    }
                </ul>

                { this._showWeather( cityWeather ) }

            </div>
        )
    }
}


