/**
 * Created by Александр on 20.07.2017.
 */
import 'whatwg-fetch';
import {fetchStart, fetchError, fetchFulfilled, setWeather, addCity} from '../actionCreators/actions';

const api = store => next => action => {
    if (action.type !== 'GET_API') return next(action);

    const { cityList} = store.getState().weather;
    const { city } = action;

    next(fetchStart());
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d7e8bed91901222e31ebc77c311f2a`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            next(fetchFulfilled());

            const added = cityList.some( el => el.city === city);

            if(!added){
                if(city === response.name) {
                    next(addCity(response));
                } else {
                    alert('Your city is not found!');
                }
            } else {
                next(setWeather(response))
            }
        })
        .catch(function (ex) {
            next(fetchError(ex))
        });
};

export default api