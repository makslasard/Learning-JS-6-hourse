// Базовые типы TS

let entity: unknown // неизвестный
let entity2: any // не использовать
let entity3: void // пустота. Функция ничего не возвращает

type TypeUser = {
	name: string
	age: number
	address?: string
}

type TypeAddress = {
	city: string
	country: string
}

const user: TypeUser = {
	name: 'Alex',
	age: 24,
	address: 'SPB',
}

const address: TypeAddress = {
	city: 'MSK',
	country: 'RF',
}

const common: TypeUser & TypeAddress = {
	...user,
	...address,
}
