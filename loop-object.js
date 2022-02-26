const object = {
    name: "sea-food",
    price: 100,
    available: 'yes'
}
const keys = Object.keys(object);
// console.log(keys);
const values = Object.values(object);
// console.log(values);
for (const key of keys) {
    // console.log(key);
}
const entries = Object.entries(object);
// console.log(entries);
for (const [name, value] of entries) {
    console.log(name,value)
}
// for (const prop in object) {
//     console.log(prop,object[prop]);
// }
// const array = ['food', 'fish', 'drink'];
// for (const arr in array) {
//     console.log(arr);
// }