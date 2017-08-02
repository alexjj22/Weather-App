/**
 * Created by bigdrop on 10.03.17.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from '../Middlewares/logger'
//import logger from 'redux-logger';
import {updateLocalStorage} from '../functions/storageFunctions';
import api from '../Middlewares/api'
import fetch from '../reducers/fetchEvents';
import weather from '../reducers/weatherEvents';


let reducer = combineReducers({
    fetch,
    weather
});


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger, api)));

updateLocalStorage(store);


export default store;