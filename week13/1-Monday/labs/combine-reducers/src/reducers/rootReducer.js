import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import bookReducer from './bookReducer'


const rootReducer = combineReducers({
    auth: authorReducer,
    bks: bookReducer
});

export default rootReducer;
