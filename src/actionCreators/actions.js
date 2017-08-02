/**
 * Created by Александр on 28.06.2017.
 */

// fetch actions

export function fetchStart(){
    return {
        type: "FETCH_START"
    }
}

export function fetchError(error){
    return {
        type: "FETCH_ERROR",
        error: error
    }
}

export function fetchFulfilled(){
    return {
        type: "FETCH_FULFILLED"
    }
}

// app events

export function deleteCity( weatherData){
    return {
        type: "DELETE_CITY",
        weatherData: weatherData
    }
}

export function addCity(weatherData){
    return {
        type: "ADD_CITY",
        weatherData: weatherData
    }
}

export function setWeather(weatherData){
    return {
        type: "SET_WEATHER",
        weatherData: weatherData
    }
}

export function getApi(city){
    return {
        type: 'GET_API',
        city: city
    }
}