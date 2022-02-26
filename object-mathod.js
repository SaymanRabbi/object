// const objectTree = {
//     name: "Object",
//     work:"Store Details",
//     age: 26,
//     Born: "Netscape Navigator",
//     isInterpreted : true,
//     whatHeDo: function (CO,Years,IscomFort) {
//             this.CO = CO,
//             this.Years = Years;
//             this.IscomFort = IscomFort
//     }
// }
// let objectChild = objectTree.whatHeDo;
// let objectChildNew = new objectChild('Brendan Eich', 1995, true);
// console.log(objectChildNew)
let student = {
    name: "KeepRolling",
    major: 'Math',
    age: 23,
    money:5000,
    bestFriend: {
        name: "No One",
        major: this.major,
        age:25
    },
    tretDe: function (blanc) {
        this.money = this.money - blanc;
        console.log("Your Corrent Blanc is",this.money)
        return this.money;
    }
}
let studentDetails = student.tretDe(500);
console.log(studentDetails);