// Assertion - утверждение. Мы сами задаем типы сами принудительно

const inputElement = document.querySelector('input')

const inputValue = inputElement?.value

const inputValue2 = (inputElement as HTMLInputElement).value

const inputValue3 = (<HTMLInputElement>inputElement).value

// Generic
function entity<T>(args: T): T {
	return args
}
entity<number>(1)
entity<string>('w')

class Channel<T> {
	private name: T

	constructor(name: T) {
		this.name = name
	}

	getName(): T {
		return this.name
	}
}
new Channel<string>('Alex')
new Channel<number>(1)

const entitys3 = <T>(args: T): T => {
	return args
}

interface IPair<K, V> {
	key: K
	value: V
}

const pair1: IPair<string, number> = {
	key: '1',
	value: 1,
}

type TypeLenght = {
	length: number
}

function getNameLenght<T extends TypeLenght>(entity: T): number {
	return entity.length
}
