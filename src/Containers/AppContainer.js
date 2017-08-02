/**
 * Created by Александр on 23.07.2017.
 */

import { connect } from 'react-redux';
import App from '../Components/App';
import { getApi, deleteCity } from '../actionCreators/actions'


function mapStateToProps(state) {
    //console.log(state);
    return {
        ...state
    }
}

function mergeProps(stateProps, dispatchProps, ownProps){
    const {weather} = stateProps;
    const {currentCity, cityList, cityWeather} = weather;
    const {dispatch} = dispatchProps;

    function onGetApi(city){
        dispatch(getApi(city))
    }

    function onDeleteCity(cityName){
        let newCityList = cityList.filter(item => item.city !== cityName);
        let newCurrentCity = currentCity === cityName ? '' : currentCity;
        let newWeather = currentCity === cityName ? {} : cityWeather;

        let weatherData = {
            newCityList,
            newCurrentCity,
            newWeather
        };

        dispatch(deleteCity(weatherData))
    }

    const props = {
        ...stateProps,
        ...ownProps,
        onGetApi,
        onDeleteCity
    };

    return props;
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(App)

