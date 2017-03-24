/**
 * Created by bigdrop on 23.03.17.
 */
// require("babel-polyfill");

var assert = require('assert');
var expect = require('expect.js');

var applyMiddleware = require('redux').applyMiddleware;
var createStore = require('redux').createStore;
var thunk = require('redux-thunk').default;


var initialState = {
    cityList: [
        {city: "London", id: "2643743"},
        {city: "Paris", id: "2988507"}
    ],
    cityWeather: {},
    currentCity: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CITY":
            const newCity = {
                city: action.addedCityWeather.name,
                id: action.addedCityWeather.id
            };

            return {
                cityList: state.cityList.concat(newCity),
                cityWeather: action.addedCityWeather,
                currentCity: action.addedCityWeather.name
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
                    currentCity: state.currentCity,
                    cityWeather: state.cityWeather,
                    cityList: newCityList,
                };
            }
        default:
            return state;
    }
}

describe('Weather App', function() {
    describe('Add city', function() {
        it('array of cities should contain added city and currentCity should be equal added city', ()=>{
            var store = createStore( reducer, applyMiddleware(thunk) );

            store.dispatch({
                type: "ADD_CITY",
                addedCityWeather: {
                    name: 'Kiev',
                    id: 703448
                }
            });

            expect( store.getState().cityList.some( item => item.city === "Kiev" ) ).to.be.ok();
        });
    });
    describe('Delete city', function(){
        it('array of cities shouldn\'t contain deleted city and if deleted city was active - current weather should be equal {}'), ()=> {
            var store = createStore( reducer, applyMiddleware(thunk) );

            store.dispatch({
                type: "DELETE_CITY",
                deletedCity: "London"
            });

            expect( store.getState().cityList.findIndex(item => item.city === "London") ).to.be(-1);
        }
    });


});