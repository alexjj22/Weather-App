/**
 * Created by bigdrop on 13.03.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { request } from '../functions';

class TabTitle extends Component{
    render(){
        const cityName = this.props.cityName;
        const currentCity = this.props.currentCity;

        return (
            <li
                className={ currentCity === cityName ? 'active-title' : '' }
            >
                <a
                    href="#"
                    onClick={()=> this.props.onGetForecast(cityName)}
                >{ cityName }</a>
                <span
                    className="remove"

                />
            </li>
        )
    }
}

function mapStateToProps(state) {
    const { currentCity } = state;
    return {
        currentCity: currentCity
    }

}

// function mergeProps(stateProps, dispatchProps, ownProps) {
//
//     const { currentCity } = stateProps;
//     const { onGetForecast } = dispatchProps;
//     const { cityName } = ownProps;
//
//     if(currentCity === cityName){
//         return Object.assign(
//             {},
//             currentCity,
//             cityName
//         );
//     } else {
//         return Object.assign(
//             {},
//             currentCity,
//             cityName,
//             onGetForecast
//         );
//     }
// }

export default connect(
    mapStateToProps,
    dispatch => ({
        onGetForecast: city => {
            request( city, (response) => {
                dispatch({
                    type: "GET_WEATHER",
                    weather: response
                })
            })
        }
    })
)(TabTitle);