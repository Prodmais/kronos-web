import api from '../api';

export class BoardsService {
    
    constructor () {}

    async getAllboardsByProject(id) {
        const boards = (await api.get(`board/${id}`)).data;

        return boards;

    }

}