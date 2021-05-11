import {  combineReducers  } from 'redux';
import loginDetails from '././reducers/reducer'

const rootReducer = combineReducers({
    user: loginDetails
})

export default rootReducer;