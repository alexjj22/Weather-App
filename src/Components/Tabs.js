/**
 * Created by bigdrop on 13.03.17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabTitle from './TabTitle';
import TabContent from './tab-content/TabContent';

class Tabs extends Component{

    _showWeather(weather){
        if( JSON.stringify(weather) !== "{}"){
            return ( <TabContent/> )
        }
    }

    render(){
        const weather = this.props.cityWeather;
        return (
            <div className='tab'>
                <ul className="tab-title">
                    {
                        this.props.cityList.map( (item, index) => {
                            return (
                                <TabTitle
                                    key={ item.id }
                                    cityName={ item.city }

                                />
                            )
                        })
                    }
                </ul>

                { this._showWeather( weather ) }

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

