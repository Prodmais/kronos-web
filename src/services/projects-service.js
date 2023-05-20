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
}