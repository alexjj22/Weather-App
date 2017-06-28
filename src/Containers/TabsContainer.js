/**
 * Created by Александр on 25.06.2017.
 */
import { connect } from 'react-redux';
import Tabs from '../Components/Tabs'
import {request} from '../functions';
import {deleteCity, getWeather} from '../actionCreators/actions'


function mapStateToProps(state) {
    return {
        ...state
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {

    const {currentCity, cityList, cityWeather} = stateProps;
    const {dispatch} = dispatchProps;

    function onGetForecast(cityName) {
        request(cityName, (response) => {
            dispatch(getWeather(response))
        })
    }

    function onDeleteCity(cityName) {
        const newCityList = cityList.filter(item => item.city !== cityName);
        const newCurrentCity = currentCity === cityName ? '' : currentCity;
        const newWeather = currentCity === cityName ? {} : cityWeather;

        dispatch( deleteCity( newCurrentCity, newCityList, newWeather) );
    }

    const props = {
        ...stateProps,
        ...ownProps,
        onGetForecast,
        onDeleteCity
    };

    return props;
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(Tabs);