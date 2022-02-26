//* Object Literal
const obj = {
    name:"KeepRolling",
    age:23
}
// console.log(obj)
//* Object Constructor create a new object
const person = new Object(obj);
// console.log(person.name);
//*Another way to create object
const human = Object.create(obj);
// console.log(human.name);
//*create object with class
class FoodMachine{
    constructor(name,quantity,isFresh) {
        this.name = name;
        this.quantity = quantity;
        this.isFresh = isFresh;
    }
}
const giveInput = new FoodMachine('apple', 5, true);
// console.log(giveInput);
//* create object with function
function createObj(name , height,age) {
    this.name = name;
    this.height = height;
    this.age = age;
}
const setValue = new createObj('keepRolling', '5.6', 23);
// console.log(setValue);