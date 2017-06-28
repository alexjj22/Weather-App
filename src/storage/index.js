/**
 * Created by bigdrop on 10.03.17.
 */

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducer'
import {updateLocalStorage} from '../functions'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,logger)));

updateLocalStorage(store);


export default store;