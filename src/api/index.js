import axios from 'axios';
import environment from '../environment';

const api = axios.create({
    baseURL: environment.API_URL
    // baseURL: proccess.env.REACT_APP_API_URL
});

export default api;