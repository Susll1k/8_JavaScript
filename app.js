class Car {
    constructor(manufacturer, model, year, averageSpeed) {
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
        this.averageSpeed = averageSpeed
    }
    displayInfo(){
        console.log("Информация об автомобиле:")
        console.log("Производитель:", this.manufacturer)
        console.log("Модель:", this.model)
        console.log("Год выпуска:", this.year)
        console.log("Средняя скорость:", this.averageSpeed + " км/ч")
    }
    calculateTime(distance){
        let timeHours = distance / this.averageSpeed
        let restCount = Math.floor(distance / this.averageSpeed / 4)
        let totalTimeHours = timeHours + restCount
        console.log("Для преодоления расстояния", distance, "км требуется", totalTimeHours, "часов")
    }
}


let car1 = new Car("Toyota", "Camry", 2018, 80)
car1.displayInfo()
car1.calculateTime(500)





//2 ex

class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator
        this.denominator = denominator
    }

    add(other) {
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    subtract(other) {
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    multiply(other) {
        const newNumerator = this.numerator * other.numerator
        const newDenominator = this.denominator * other.denominator
        return new Fraction(newNumerator, newDenominator)
    }

    divide(other) {
        const newNumerator = this.numerator * other.denominator
        const newDenominator = this.denominator * other.numerator
        return new Fraction(newNumerator, newDenominator)
    }

    reduce() {
        const gcdValue = this.gcd(this.numerator, this.denominator)
        this.numerator /= gcdValue
        this.denominator /= gcdValue
        return this
    }

    gcd(a, b) {
        if (b === 0) {
            return a
        }
        return this.gcd(b, a % b)
    }

    display() {
        console.log(this.numerator + "/" + this.denominator)
    }
}


const fraction1 = new Fraction(3, 4)
const fraction2 = new Fraction(2, 5)

const resultAdd = fraction1.add(fraction2)
const resultSubtract = fraction1.subtract(fraction2)
const resultMultiply = fraction1.multiply(fraction2)
const resultDivide = fraction1.divide(fraction2)

resultAdd.reduce().display()
resultSubtract.reduce().display()
resultMultiply.reduce().display()
resultDivide.reduce().display()



//ex 3


class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    displayTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    addSeconds(seconds) {
        this.seconds += seconds
        this.normalizeTime()
    }

    addMinutes(minutes) {
        this.minutes += minutes
        this.normalizeTime()
    }

    addHours(hours) {
        this.hours += hours
        this.normalizeTime()
    }

    normalizeTime() {
        let extraMinutes = Math.floor(this.seconds / 60)
        this.seconds %= 60
        this.minutes += extraMinutes

        let extraHours = Math.floor(this.minutes / 60)
        this.minutes %= 60
        this.hours += extraHours

        this.hours %= 24
    }
}

const currentTime = new Time(20, 30, 45)
currentTime.displayTime()

currentTime.addSeconds(30)
currentTime.displayTime()

currentTime.addMinutes(10)
currentTime.displayTime()

currentTime.addHours(2)
currentTime.displayTime()
