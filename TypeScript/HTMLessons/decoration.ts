// декораторы - это обычная функция которая накладывает сверх функционал
function LogClass(constructor: Function) {
	console.log(constructor.name)
}
// @LogClass

function LogMethod(
	target: Object,
	key: string,
	descriptor: PropertyDescriptor
) {
	console.log(key)
}

class Plane {
	private id: number

	constructor(id: number) {
		this.id = id
	}

	// @LogMethod

	getId() {
		return this.id
	}
}

// Расширенные типы

// Проверка внутри TS
type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'mclaren' | 'lada'
type TypePrice = '$10000' | '$324000' | '$790000'
type TypeCar = `${TypeBrand} ${TypeCar}`

const car1: TypeCar = '$10000 bmw'
