import api from "../api";

export class TasksService {
    constructor() {}

    async createTaskByProject(task) {
        const createdTask = await api.post('/task', task);
        return createdTask;
    }

    async editTaskById(task) {
        console.log(task);
        const editedTask = await api.put(`/task/${task.id}`, {
            ...task,
            User: undefined
        });
        return editedTask;
    }

    async deleteTaskById(id) {
        const deletedTask = await api.delete(`/task/${id}`);
        return deletedTask;
    }
}