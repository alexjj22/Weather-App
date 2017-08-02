/**
 * Created by Александр on 23.07.2017.
 */

import {setDefaultStorage} from '../functions/storageFunctions';

export default function reducer(state = setDefaultStorage(), action) {
    switch (action.type) {
        case "ADD_CITY":
            const newCity = {
                city: action.weatherData.name,
                id: action.weatherData.id
            };

            return {
                cityList: [...state.cityList, newCity],
                forecast: action.weatherData,
                currentCity: action.weatherData.name
            };
        case "SET_WEATHER":
            const { weatherData } = action;

            return {
                ...state,
                forecast: weatherData,
                currentCity: weatherData.name
            };
        case "DELETE_CITY":
            const {newCityList, newCurrentCity, newWeather} = action.weatherData;

            return {
                currentCity: newCurrentCity,
                cityList: newCityList,
                forecast: newWeather
            };
        default:
            return state;
    }
}