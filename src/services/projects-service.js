import api from "../api";

export class ProjectsService {
    constructor(
        // private _authService: Authen
    ) {}

    getAllProjects () {
        api.get('project', {
            headers: {
                Authorization: 'Bearer '
            }
        })
    }
}