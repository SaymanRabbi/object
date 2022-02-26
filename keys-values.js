let student = {
    name: "KeepRolling",
    major: 'Math',
    age: 23,
    money:5000,
    bestFriend: {
        name: "No One",
        major: this.major,
        age: 25,
    },
    
    tretDe: function (blanc) {
        this.money = this.money - blanc;
        console.log("Your Corrent Blanc is", this.money)
        // console.log(this.major)
        return this.money;
        
    }
}
// const keys = Object.keys(student);
// for (const key of keys) {
//     console.log(key);
// }
// const values = Object.values(student);
// for (const value of values) {
//     console.log(value);
// }
// for in loop-------
// const keyValue = Object.entries(student);
// console.log(keyValue);
//seal object 
// changes property value but do not add new property
// Object.seal(student);
// delete student.tretDe;
console.log(student);
//do not changes any property value or add any property
Object.freeze(student);

