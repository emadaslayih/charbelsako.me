import { combineReducers } from 'react-redux';
import menuReducer from './menuReducer';

const rootReducer = combineReducers(menuReducer);

export default rootReducer;
