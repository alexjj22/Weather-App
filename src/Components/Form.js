import React, { Component } from 'react';
import {toUpperCase} from '../functions/functions';
import { observable, decorate, action } from "mobx";
import {observer, inject} from 'mobx-react'


class Form extends Component{
    constructor(props){
        super(props);
        this.cityName = '';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCityName = this.updateCityName.bind(this);
    }

    updateCityName(e){
      this.cityName = e.target.value
    }

    handleSubmit(e){
        e.preventDefault();
        const {
          weatherStore: { onGetApi }
        } = this.props;

        const correctCityName = toUpperCase(this.cityName);

        onGetApi(correctCityName);

        this.cityName = "";
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type="text"
                    placeholder="Enter your city"
                    value={ this.cityName }
                    onChange={ e => this.updateCityName(e) }
                />
            </form>
        )
    }
}

export default inject("weatherStore")(
  observer(
    decorate(Form, {
      cityName: observable,
      updateCityName: action,
      handleSubmit: action
    })
  )
)