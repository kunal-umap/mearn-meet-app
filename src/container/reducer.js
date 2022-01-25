
// importing action type
import * as actionType from './actiontype';

// setting intial state
const initialState = { isLogin: false, user: null };


// creating a reducer
export default function mainReducer(state=initialState,action){
    let {type,payload} = action;
    switch (type) {
        case actionType.SUCCESSFULLY_SIGNUP:
            return{
                ...state,
                isLogin: false
            }
        case actionType.SUCCESSFULLY_LOGIN:
            return{
                ...state,
                isLogin: true,
                user: payload.username
            }
            case actionType.FAIL_SIGNUP:
                return{
                    ...state,
                    isLogin: false
                }
            case actionType.FAIL_LOGIN:
                return{
                    ...state,
                    isLogin: false,
                    user: null
                }
            case actionType.LOGOUT:
                return{
                    ...state,
                    isLogin: false
                }
            default:
                return state;
    }

};
export const messageReducer = (state ,action) => {
    let newState = [...state];
    switch (action.type) {
        case actionType.STORE_MESSAGE:
            return [...newState, action.payload];            
        default:
            return state;
    }
};