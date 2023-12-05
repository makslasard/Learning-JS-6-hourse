// const baseUrl = 'https://intership-liga.ru/tasks'
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export default class TaskController {
    constructor(service) {
        this.service = service
    }

    async getAllTasks() {
        const response = await service.getAllTasks(baseUrl)
        return response
    }


    async getTaskById(id) {
        const response = await service.getTaskById(id)
        return response
    }

    async deleteTaskById(id) {
        const response = await service.deleteTaskById(id)
        return response
    }

    async addTask(task) {
        const response = await service.addTask(task)
        return response
    }

    async updateTaskById(id, task) {
        const response = await this.service.updateTaskById(id, task)
        return response
    }
}
const serviceFetchTasks = new TaskController(serviceFetchTasks)
// const serviceXMLTasks = new TaskController(serviceXMLTasks)

/*
// In src/controllers/workoutController.js
const getAllWorkouts = (req, res) => {
    res.send('Get all workouts');
};

const getOneWorkout = (req, res) => {
    res.send('Get an existing workout');
};

const createNewWorkout = (req, res) => {
    res.send('Create a new workout');
};

const updateOneWorkout = (req, res) => {
    res.send('Update an existing workout');
};

const deleteOneWorkout = (req, res) => {
    res.send('Delete an existing workout');
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
*/