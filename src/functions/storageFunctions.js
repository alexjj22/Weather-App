
export function setWeatherStorage({ currentCity, cityList }) {
    localStorage.setItem('weather-currentCity', currentCity);
    localStorage.setItem('weather-cityList', JSON.stringify(cityList));
}

export function getCurrentCity() {
    return localStorage.getItem('weather-currentCity');
}

export function getCityList() {
    return JSON.parse(localStorage.getItem('weather-cityList'));
}