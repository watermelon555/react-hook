import { createStore, combineReducers } from 'redux';
import { loginReducer } from './login';

const allReducers = {
    login: loginReducer
};

const reducers = combineReducers(allReducers);

const store = createStore(reducers);

export default store;
