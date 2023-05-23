import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import api, { loginRequest } from '../api';
import { clearUserAuthentication } from '../store/slices/auth.slice';

export class AuthenticateService {

    constructor() {}
    navigate = useNavigate();
    dispatch = useDispatch();

    async authentication({ email, password }) {
        try {

            const login = await loginRequest.post('', {
                email,
                password
            });

            return login;
        } catch (error) {
            console.error(error);
        }
    };

    async createUser({ name, lastName, email, password, phone = "99999999999" }) {
        try {
            const created = await api.post('/auth/signup', {
                name,
                lastName,
                email,
                password,
                phone
            });
            return created;
        } catch (error) {
            console.error(error);
        }
    };

    setToken({ token }) {

        localStorage.removeItem('token');
        localStorage.setItem('token', token);
        api.defaults.headers.Authorization = 'Bearer ' + token;
    }

    decodeToken(token) {
        if (!token) return null;

        try {
            const decodeToken = jwt(token);
            return decodeToken;
        } catch (error) {
            return null
        }
    }

    isValidToken(token) {
        if (!token) return false;

        return true;
    }

    getToken() {
        const localToken = localStorage.getItem('token');
        if (!localToken) {
            return null;
        }
        return localToken;
    }

    logout() {
        this.dispatch(clearUserAuthentication())
        api.defaults.headers.Authorization = undefined;
        localStorage.removeItem('token');
        this.navigate('/auth');
    }
}