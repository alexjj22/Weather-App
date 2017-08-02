/**
 * Created by bigdrop on 10.03.17.
 */
import React, { Component } from 'react';
import {toUpperCase} from '../functions/functions'

export default class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        let cityName = this.input.value;
        let correctCityName = toUpperCase(cityName);

        this.props.onGetApi(correctCityName);

        this.input.value = "";
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type="text"
                    placeholder="Enter your city"
                    ref={ input=> this.input = input }
                />
            </form>
        )
    }
}