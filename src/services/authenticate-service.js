import api from '../api';

export const authentication = async ({ email, password }) => {
    try {
        const login = await api.post('/auth/', {
            email,
            password
        });
    
        return login;        
    } catch (error) {
        console.error(error);
    }
}