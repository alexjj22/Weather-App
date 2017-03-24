/**
 * Created by bigdrop on 13.03.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {request} from '../functions';

class TabTitle extends Component {
    render() {
        const cityName = this.props.cityName;
        const currentCity = this.props.currentCity;
        // this.props.save()
        return (
            <li
                className={ currentCity === cityName ? 'active-title' : '' }
            >
                <a
                    href="#"
                    onClick={ ()=> this.props.onGetForecast()}
                >{ cityName }</a>
                <span
                    className="remove"
                    onClick={ ()=> this.props.onDeleteCity() }
                />
            </li>
        )
    }
}

function mapStateToProps(state) {
    const {currentCity} = state;
    return {
        currentCity: currentCity
    }

}


function mergeProps(stateProps, dispatchProps, ownProps) {
    const {currentCity} = stateProps;
    const {cityName} = ownProps;
    const {dispatch} = dispatchProps;

    function sendRequest() {
        if (currentCity !== cityName) {
            request(cityName, (response) => {
                dispatch({
                    type: "GET_WEATHER",
                    weather: response
                })
            })
        }
    }

    function handleDeleteCity(){
        dispatch({
            type: "DELETE_CITY",
            deletedCity: cityName
        })
    }

    const props = {
        currentCity: currentCity,
        cityName: cityName,
        onGetForecast: sendRequest,
        onDeleteCity: handleDeleteCity,
    };

    return props;
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(TabTitle);