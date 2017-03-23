/**
 * Created by bigdrop on 10.03.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {request} from '../functions';

class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const cityName = this.input.value;

        function toUpperCase(str) {
            str = str.toLowerCase().split(' ');
            for(let i = 0; i < str.length; i++){
                str[i] = str[i].split('');
                str[i][0] = str[i][0].toUpperCase();
                str[i] = str[i].join('');
            }
            return str.join(' ');
        }

        const correctCityName = toUpperCase(cityName);

        this.props.onCityAdd(correctCityName);

        this.input.value = "";

    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type="text"
                    placeholder="Enter your city"
                    ref={ (input)=> this.input = input}
                />
            </form>
        )
    }
}

function mapStateToProps(state) {
    const {cityList,currentCity} = state;
    return {
        currentCity: currentCity,
        cityList: cityList
    }

}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const {cityList} = stateProps;
    const {dispatch} = dispatchProps;

    function handleCityAdd(city){
        request(city, (response)=> {
            const added = cityList.some( el => el.city === city);

            if(!added){
                if(city === response.name) {
                    dispatch({
                        type: "ADD_CITY",
                        addedCityWeather: response
                    })
                } else {
                    alert('Your city is not found!');
                }
            } else {
                dispatch({
                    type: "GET_WEATHER",
                    weather: response
                })
            }
        });

    }

    const props = {
        onCityAdd: handleCityAdd
    };

    return props;
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(Form);

// dispatch => ({
//     onCityAdd: city =>
//         dispatch({
//             type: "ADD_CITY",
//             city: city
//         })
// })