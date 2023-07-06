import {combineReducers} from 'redux'
import seatReducer from './seatReducer';
const rootReducer = combineReducers({
    // child Reducer
    // Key: value
    seatReducer,
});

export default rootReducer