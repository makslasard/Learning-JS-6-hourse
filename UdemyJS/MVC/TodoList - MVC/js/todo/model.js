export default class Model {
    constructor() {
        this.task = []
    }

    addTask(text) {
        const newTask = {
            status: 'active',
            task: text
        }

        this.task.push(newTask)
    }

    doneTask(task) {
        task.status = 'done'
    }

    removeTask(task) {
        const index = this.task.indexOf(task)
    }
}

// tasks = ['Задача 1', 'Задача 2', 'Задача 3']