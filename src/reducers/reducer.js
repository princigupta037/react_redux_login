import { LOGIN } from '../constants/actionTypes'

const initialState = { user: [] }
console.log('reducer');

function loginDetails(state=initialState,action){
    console.log('reducer inside',action.payload);
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