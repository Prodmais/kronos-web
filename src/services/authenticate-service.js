import api from '../api';

export const authentication = async ({ email, password }) => {
    try {

        const login = await api.post('/auth/signin', {
            email,
            password
        });

        console.log(login);
    
        return login;        
    } catch (error) {
        console.error(error);
    }
};

export const setToken = ({ token }) => {
    localStorage.setItem('token', token);
};