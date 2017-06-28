/**
 * Created by Александр on 25.06.2017.
 */
import { connect } from 'react-redux';
import {request} from '../functions';

import Form from '../Components/Form'

function mapStateToProps(state) {
    const {cityList,currentCity} = state;
    return {
        currentCity: currentCity,
        cityList: cityList
    }

}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const {cityList} = stateProps;
    const {dispatch} = dispatchProps;

    function handleCityAdd(city){
        request(city, (response)=> {
            const added = cityList.some( el => el.city === city);

            if(!added){
                if(city === response.name) {
                    dispatch({
                        type: "ADD_CITY",
                        addedCityWeather: response
                    })
                } else {
                    alert('Your city is not found!');
                }
            } else {
                dispatch({
                    type: "GET_WEATHER",
                    weather: response
                })
            }
        });

    }

    const props = {
        onCityAdd: handleCityAdd
    };

    return props;
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(Form);

// dispatch => ({
//     onCityAdd: city =>
//         dispatch({
//             type: "ADD_CITY",
//             city: city
//         })
// })