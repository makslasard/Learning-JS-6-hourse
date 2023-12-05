import TaskController from './TaskController'
import serviceFetchTasks from './serviceFetchTasks'

const taskController = new TaskController(serviceFetchTasks)

const getAllTask = async () => {
	// Получение всех задач
	const allTasks = await taskController.getAllTasks('https://jsonplaceholder.typicode.com/posts')

	// Отображение всех задач в консоли
	console.log('All tasks:', JSON.stringify(allTasks))
}
getAllTask()

// Получение задачи по идентификатору
const taskById = await taskController.getTaskById(1)

// Отображение задачи в консоли
console.log('Task by ID:', taskById)

// Удаление задачи по идентификатору
await taskController.deleteTaskById(2)

// Добавление новой задачи
const newTask = {
	title: 'Новая задача',
	body: 'Это новая задача',
}
const taskId = await taskController.addTask(newTask)

// Обновление задачи
const updatedTask = {
	id: taskId,
	title: 'Обновленная задача',
	body: 'Это обновленная задача',
}
await taskController.updateTaskById(taskId, updatedTask)
