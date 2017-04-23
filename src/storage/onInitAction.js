/**
 * Created by Александр on 23.04.2017.
 */

import store from './index';
import {request} from '../functions';

export function getWeatherOnInit() {
    const currentCity = store.getState().currentCity;
    if (currentCity.length){
        request(currentCity, (response) => {
            store.dispatch({
                type: "GET_WEATHER",
                weather: response
            })
        })
    }
}