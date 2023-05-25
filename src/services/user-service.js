import api from "../api";

export class UserService {
    constructor() {}

    async getUser() {
        const user = await api.get(`/user/`);
        return user.data;
    }

    async sendResetPassword(email){
        try {
            await api.post('/user/send-email-reset-password', { email: email });
        } catch (err) {
            throw new Error(err);
        }
    }
}