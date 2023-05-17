import api from '../api';

export const authentication = async ({ email, password }) => {
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

export const createUser = async({ name, lastName, email, password, phone="99999999999" }) => {
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

export const setToken = ({ token }) => {
    localStorage.setItem('token', token);
};