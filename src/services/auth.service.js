import axios from "axios";

 
// main URL
const mainURL = `http://localhost:4000/api`;

// signup post request finction
export const signUp = (newUser) => {
    return axios.post(`${mainURL}/signup`,newUser)
    .then(response=>{
        if(response){
            return Promise.resolve(response)
        }
    })
    .catch(error=>{
        return Promise.reject(error.response)
    })
}

export const login = (user) =>{
    return axios.post(`${mainURL}/login`,user)
    .then(response => {
        if(response.data.verifyJwt){
            localStorage.setItem('user-authentication-token',response.data.verifyJwt);
        }
        if(response.data.verifyJwt){
            localStorage.setItem('user',response.data.username);
        }
        return Promise.resolve(response.data)
    })
    .catch(error => {
        return Promise.reject(error.response.data)
    })
}

export const logout = () => {
    localStorage.removeItem('user-authentication-token');
    localStorage.removeItem('user');
    return { message: "successfully logout"}
}

