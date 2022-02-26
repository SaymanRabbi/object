const student = { name: "Keep-Rolling", age:23}
const student2 = { age: 23, name: "Keep-Rolling" };
function isEqual(name1,name2) {
    if (Object.keys(name1).length!== Object.keys(name2).length) {
        return false;
    }

    for (const prof in name1) {
        if (name1[prof] !== name2[prof]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual(student, student2))
