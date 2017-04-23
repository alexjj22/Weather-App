/**
 * Created by bigdrop on 10.03.17.
 */

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function setDefaultStorage() {
    const initialState = {
        cityList: [
            {city: "London", id: "2643743"},
            {city: "Paris", id: "2988507"}
        ],
        cityWeather: {},
        currentCity: ''
    };

    if (!localStorage.getItem('weatherStorage')) {
        localStorage.setItem('weatherStorage', JSON.stringify(initialState));
        return initialState;
    } else {
        const storage = JSON.parse(localStorage.getItem('weatherStorage'));
        return {
            ...storage,
            cityWeather: {}
        }
    }
}

function reducer(state = setDefaultStorage(), action) {
    switch (action.type) {
        case "ADD_CITY":
            const newCity = {
                city: action.addedCityWeather.name,
                id: action.addedCityWeather.id
            };

            return {
                cityList: [...state.cityList, newCity],
                cityWeather: action.addedCityWeather,
                currentCity: action.addedCityWeather.name
            };
        case "GET_WEATHER":
            return {
                ...state,
                cityWeather: action.weather,
                currentCity: action.weather.name
            };
        case "DELETE_CITY":
            const deletedCity = action.deletedCity;
            const newCityList = state.cityList.filter(item => item.city !== deletedCity);

            if (state.currentCity === deletedCity) {
                return {
                    currentCity: '',
                    cityList: newCityList,
                    cityWeather: {}
                };
            } else {
                return {
                    ...state,
                    cityList: newCityList
                };
            }
        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

function updateLocalStorage() {
    localStorage.setItem('weatherStorage', JSON.stringify(store.getState()))
}

store.subscribe(() =>{
    updateLocalStorage()
});



export default store;