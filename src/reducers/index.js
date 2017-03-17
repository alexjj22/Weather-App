/**
 * Created by bigdrop on 10.03.17.
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let cityList = [
    {city: "London", id: "0000000"},
    {city: "Paris", id: "0000001"}
];

const initialState = {
    cityList: cityList,
    cityWeather: {},
    currentCity: ''
};



function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_CITY":

            return {
                ...state,

            };
        break;

        case "GET_WEATHER":
            // if( action.cityName !== state.currentCity){

                return {
                    ...state,
                    cityWeather: action.weather,
                    currentCity: action.weather.name
                };
            // }
            break;
        default:
            return state;
    }
}

const store = createStore( reducer, composeWithDevTools( applyMiddleware(thunk)) );

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;