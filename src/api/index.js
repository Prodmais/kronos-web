import axios from 'axios';
import environment from '../environment';

let token = localStorage.getItem('token');

console.log(token);
const api = axios.create({
    baseURL: environment.API_URL,
    headers: {
        Authorization: token ? 'Bearer ' + token : null
    }
    // baseURL: proccess.env.REACT_APP_API_URL
});

const loginRequest = axios.create({
    baseURL: `${environment.API_URL}/auth/signin`,
})

export { loginRequest };

export default api;