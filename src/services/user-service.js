import api from "../api";

export class UserService {
    constructor() {}

    async getUser() {
        const user = await api.get(`/user/`);
        return user.data;
    }
}