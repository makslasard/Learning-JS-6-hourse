// Типизация массивов
let arr: string[]
arr = ['1', '2']

// Данные нельзя изменить. Только для чтения. Можно получить, но нельзя изменить
const numbers: ReadonlyArray<number> = [1, 2, 3, 4]

// Кортежи. Когда мы четко знаем кол-во элементов в нашем массиве их тип
type TypeArray = [number, string, null]
const array: TypeArray = [1, '2', null]

// Объект
type TypeChannelReturn = {
	name: string
}

function getChannel(name: string): TypeChannelReturn {
	return { name }
}
getChannel('Строка!')

// Минималистичная запись

type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelName: TypeChannelFunction = (name) => {
	return { name }
}
getChannel('Строка!')

// Rest

const getNumbers = (...numbers: number[]) => {
	return [...numbers]
}

// Перегрузки: 1. Сигнатура функции 2. Реализация функции

function getCar(name: string): string
function getCar(name: string, price: number): string

function getCar(name: string, price?: number): string {
	return price ? `Название: ${name}, Цена ${price}` : `Название: ${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('bmw', 10000)
