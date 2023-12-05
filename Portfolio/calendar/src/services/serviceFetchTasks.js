export default class ServiceFetchTasks {
	// GET
	// eslint-disable-next-line class-methods-use-this
	async getAllTasks() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			if (!response.ok) {
				throw new Error(`Failed to get all tasks: ${response.statusText}`)
			}
			const data = await response.json()
			console.log(data)
			return response
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	// GET/id
	async getTaskById(id) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return response
	}

	// DELETE
	async deleteTaskById(id) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
		})
		return response
	}

	// POST
	async addTask(task) {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		})
		return response
	}

	// PATCH
	async updateTaskById(id, task) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		})
		return response
	}
}
