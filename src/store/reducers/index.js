import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';
import customer from './customer';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        products,
        product,
        customer,
        ...asyncReducers
    });

export default createReducer;
