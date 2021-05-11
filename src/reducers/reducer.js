import { LOGIN } from '../constants/actionTypes'

const initialState = { user: [] }
console.log('reducer');

function loginDetails(state=initialState,action){
    switch(action.type){
        case LOGIN :
        return {
            ...state,
            user:action.payload
        }
        default:
            return state
    }
}

export default loginDetails;