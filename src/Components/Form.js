/**
 * Created by bigdrop on 10.03.17.
 */
import React, { Component } from 'react';


export default class Form extends Component{
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