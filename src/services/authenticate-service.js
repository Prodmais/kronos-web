import { useNavigate } from 'react-router';
import api, { loginRequest } from '../api';

export class AuthenticateService {

    constructor() {}
    navigate = useNavigate();

    async authentication({ email, password }) {
        try {

            const login = await loginRequest.post('', {
                email,
                password
            });

            localStorage.setItem('token', login.data.token);
            const token = localStorage.getItem('token');
            api.defaults.headers.Authorization = 'Bearer ' + token;

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
    }

    getToken() {
        const localToken = localStorage.getItem('token');
        if (!localToken) {
            return null;
        }
        return localToken;
    }

    logout() {
        api.defaults.headers.Authorization = undefined;
        localStorage.removeItem('token');
        this.navigate('/auth');
    }
}