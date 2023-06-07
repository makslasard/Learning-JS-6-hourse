
class Human {
    readonly name: string
    protected age: number
    protected work: string
    private bet: number

    constructor(name: string, age: number, work: string, bet: number) {
        this.name = name
        this.age = age
        this.work = work
        this.bet = bet
    }

    getMoney(bet) {
        return bet
    }
}

class Alex extends Human {
    constructor() {
        super() 
    }
}