import api from '../api';

export class AuthenticateService {

    constructor() {}

    async authentication({ email, password }) {
        try {

            const login = await api.post('/auth/signin', {
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
        localStorage.setItem('token', token);
    }

    getToken() {
        const localToken = localStorage.getItem('token');
        if (!localToken) {
            return null;
        }
        return localToken;
    }
}