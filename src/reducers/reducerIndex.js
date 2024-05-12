import { combineReducers } from 'redux';
import menuReducer from './menuReducer'
import viewReducer from './menuReducer'

export default combineReducers({
    menustate : menuReducer,
    viewType: viewReducer
});