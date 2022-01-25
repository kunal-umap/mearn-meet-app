import * as actionType from './actiontype';
import* as authServiece from '../services/auth.service';


export const signupAction = (payload) =>(dispatch) => {
    return authServiece.signUp(payload)
    .then(response => {
        dispatch({
            type: actionType.SUCCESSFULLY_SIGNUP,
            payload: response.data
        })
        return Promise.resolve(response.data)
    })
    .catch(error => {
        dispatch({
            type: actionType.FAIL_SIGNUP,
            payload:{err:error.message || "Error occured"}
        })
        
        return Promise.reject(error)
    })
}

export const loginAction = (payload)=> (dispatch) =>{
    return authServiece.login(payload)
    .then(data => {
        dispatch({
            type: actionType.SUCCESSFULLY_LOGIN,
            payload: data
        })
        return Promise.resolve(data);
    })
    .catch(error => {
        dispatch({
            type: actionType.FAIL_LOGIN,
            payload: {err: error.message || " Login Fail"}
        })
        return Promise.reject(error);
    })
}

export const logoutAction = ()=> (dispatch) => {
    const message = authServiece.logout();
    dispatch({
        type: actionType.LOGOUT,
        payload: message
    })

    return Promise.resolve(message);
}