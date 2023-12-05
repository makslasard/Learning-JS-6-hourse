import XMLHttpRequest from 'xmlhttprequest'

export default class ServiceXMLTasks {
	// GET
	static async getAllTasks(baseUrl) {
		try {
			const xhr = new XMLHttpRequest()
			xhr.open('GET', baseUrl)
			xhr.send()

			if (xhr.status !== 200) {
				throw new Error(`Failed to get all tasks: ${xhr.statusText}`)
			}

			return JSON.parse(xhr.responseText)
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	// GET/id
	static async getTaskById(id) {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', `${baseUrl}/${id}`)
		xhr.send()

		return xhr
	}

	// DELETE
	static async deleteTaskById(id) {
		const xhr = new XMLHttpRequest()
		xhr.open('DELETE', `${baseUrl}/${id}`)
		xhr.send()

		return xhr
	}

	// POST
	static async addTask(task) {
		const xhr = new XMLHttpRequest()
		xhr.open('POST', baseUrl)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send(JSON.stringify(task))

		return xhr
	}

	// PATCH
	static async updateTaskById(id, task) {
		const xhr = new XMLHttpRequest()
		xhr.open('PATCH', `${baseUrl}/${id}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send(JSON.stringify(task))

		return xhr
	}
}
