/**
 * Created by Александр on 28.06.2017.
 */
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

export default function reducer(state = setDefaultStorage(), action) {
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
            return {
                currentCity: action.currentCity,
                cityList: action.cityList,
                cityWeather: action.weather
            };
        default:
            return state;
    }
}