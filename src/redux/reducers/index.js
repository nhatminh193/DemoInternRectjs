import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import listReducer from './list.reducer';

export default combineReducers({
    userReducer,
    listReducer
})