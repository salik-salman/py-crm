import { combineReducers } from 'redux';
import attendance from './attendance';
import errors from './errors';
import menu from './menu';


export default combineReducers({
    attendance,
    errors,
    menu
});