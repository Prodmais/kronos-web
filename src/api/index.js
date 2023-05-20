import axios from 'axios';
import environment from '../environment';

let token = localStorage.getItem('token');

const api = axios.create({
    baseURL: environment.API_URL,
    headers: {
        Authorization: 'Bearer ' + token
    }
    // baseURL: proccess.env.REACT_APP_API_URL
});

export default api;