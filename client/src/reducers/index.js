import { combineReducers } from 'redux';
import app from './app';
import transactions from './transactions';

export default combineReducers({
    app,
    transactions
});
