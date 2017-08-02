import React, { Component } from 'react';

import Header from './Header';
import Form from './../Components/Form';
import Tabs from './Tabs';
import Loader from './Loader';
import Error from './Error';

export default class App extends Component {
    componentDidMount() {
        const { weather, onGetApi} = this.props;
        weather.currentCity.length && onGetApi(weather.currentCity);
    }

    render() {
        const {fetch, weather, onGetApi, onDeleteCity} = this.props;
        const {fetched, fetching, error} = fetch;

        if (fetching && !fetched) {
            return (
                <Loader/>
            )
        }

        if (error) {
            return (
                <Error/>
            )
        }

        return (
            <div>
                <Header/>
                <Form
                    onGetApi={onGetApi}
                />
                <Tabs
                    settings={weather}
                    onGetApi={onGetApi}
                    onDeleteCity={onDeleteCity}
                />
            </div>
        )
    }
}