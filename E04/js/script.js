const person = {
    firstName: 'Usher',
    lastName: 'SM',
    age: 34,
    height: 187,
    weight: 86,
    fullName: function() {
        return `${this.lastName} ${this.firstName}`;
    }
}
const output = document.getElementById("output");
output.innerHTML = `My name is ${person.fullName()} And I am ${person.age} Years Old.`
// output.style.fontSize = '45px'



// let x = '';
// let y = 2;
// let z = 3;
// console.log(x + y + z);