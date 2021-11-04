/* function Animal() {
    Animal.prototype.eat = () => {
        console.log("nom nom nom")
    }
}
*/

// or

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: () => {
        console.log("nom nom nom")
    }
}

function Dog(name) {
    this.name = name
}

let animal = Object.create(Animal.prototype)

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog("Snoopy")
beagle.eat()
console.log(Dog.prototype.isPrototypeOf(beagle)) // true

console.log(Animal.prototype.isPrototypeOf(Dog.prototype)) // true
console.log(Object.prototype.isPrototypeOf(Animal.prototype)) // true
