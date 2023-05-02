// Утилиты типов: Pick, Omit, Partial
interface ICar {
	id: number
	name: string
	price: number
	yearBuild: number
}

// Omit позволяет удалить лишние поля. В данном случае удалить поле id
interface ICarCreate extends Omit<ICar, 'id'> {}

// Pick позволяет вытащить только конкретные поля. В данном случае только поле id
interface ICarId extends Pick<ICar, 'id'> {}

// Partial - делает все свойства необязательными  ?
interface IOptionCar extends Partial<ICar> {}

// Readonly - позволяет сделать все поля доступными только для чтения
interface IReadonlyCar extends Readonly<ICar> {}

// Record
type TypeCarRecord = Record<'name' | 'price', string | number>

const car: ICarCreate = {
	name: 'alex',
	price: 1000,
	yearBuild: 342,
}

//Применяеться в Redux когда не знаем какой тип данных в state
type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

