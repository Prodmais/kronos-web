import api from "../api";
import { AuthenticateService } from "./authenticate-service";

export class ProjectsService {
    constructor() {
        this.authService = new AuthenticateService();
    }

    async getAllProjects () {

        const projects = (await api.get('project')).data
        return projects;
    }

    async createProject({ title, description }) {
        try {
            const created = await api.post('/project', {
                title,
                description
            },
                {
                    headers: {
                        Authorization: 'Bearer ' + this.authService.getToken(),
                    }
                }
            );
            return created;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}