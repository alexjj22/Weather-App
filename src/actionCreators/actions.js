/**
 * Created by Александр on 28.06.2017.
 */

export function deleteCity( newCurrentCity, newCityList, newWeather){
    return {
        type: "DELETE_CITY",
        currentCity: newCurrentCity,
        cityList: newCityList,
        weather: newWeather
    }
}

export function getWeather(weather){
    return {
        type: "GET_WEATHER",
        weather: weather
    }
}