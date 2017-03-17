/**
 * Created by bigdrop on 10.03.17.
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';

class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const cityName = this.input.value;

        this.props.onCityAdd(cityName);

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

export default connect(
    null,
    dispatch => ({
        onCityAdd: city =>
            dispatch({
                type: "ADD_CITY",
                city: city
            })
    })
)(Form);