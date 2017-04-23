/**
 * Created by bigdrop on 13.03.17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabTitle from './TabTitle';
import TabContent from './tab-content/TabContent';

import {checkEmptyObj} from '../functions';
import {getWeatherOnInit} from '../storage/onInitAction';

class Tabs extends Component{

    _showWeather(weather){
        if( checkEmptyObj(weather) ){
            return ( <TabContent/> )
        }
    }

    componentDidMount(){
        getWeatherOnInit();
    }

    render(){
        const {cityList, cityWeather}= this.props;
        return (
            <div className='tab'>
                <ul className="tab-title">
                    {
                        cityList.map( (item, index) => {
                            return (
                                <TabTitle
                                    key={ item.id }
                                    cityName={ item.city }
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

function mapStateToProps(state) {
    const {cityList, cityWeather} = state;

    return {
        cityList: cityList,
        cityWeather: cityWeather
    }
}

export default connect(
    mapStateToProps,
    null
)(Tabs);

