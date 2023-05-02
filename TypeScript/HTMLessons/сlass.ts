// Классы
class Car {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	getInfo(): string {
		return `${this.name} - ${this.price}`
	}
}
new Car('BMW', 100).getInfo()

// Interface

interface IUser {
	name: string
	email: string
}

const user: IUser = {
	name: 'Alex',
	email: 'abs@mail.com',
}

// Enum - по типу константы
const enum EnumRoles {
	ADMIN,
	GUEST,
	USER,
}

const enum EnumColor {
	black,
	red,
	yellow,
}

interface IUsers {
	role: EnumRoles
	color: EnumColor
}

const users: IUsers = {
	role: EnumRoles.ADMIN,
	color: EnumColor.black,
}

const enum EnumPosition {
	DIRECTOR,
	SELLER,
}

type TypeEmployers = {
	director: EnumPosition.DIRECTOR
	seller: EnumPosition.SELLER
}

const employers: TypeEmployers = {}
