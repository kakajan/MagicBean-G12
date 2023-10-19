// const cars = [
//     'Samand',
//     'Prido',
//     '206',
//     'Quick',
//     'Dena',
//     'Saina',
// ];
// const output = document.getElementById('output');
// let text = ''
// cars.forEach((value,index) => {
//     text = text + cars[index+2] + "<br>";
// })

// // for (let i = 0; i < cars.length; i++) {
// //   text = text + cars[i] + "<br>";
// // }

// output.innerHTML = text
const display = document.querySelector(".display");
let tempNum = "";
let firstNum, secondNum, operator, res;
function getNum(input) {
  tempNum += input;
  display.innerHTML = tempNum;
}
function sum() {
  display.innerHTML = "";
  firstNum = tempNum;
  tempNum = "";
  operator = "sum";
}
function minus () {
  display.innerHTML = "";
  firstNum = tempNum;
  tempNum = "";
  operator = "minus";
}
function result() {
  secondNum = tempNum;
  tempNum = "";
  if (operator === "sum") {
    res = +firstNum + +secondNum;
  } else if (operator === "minus") {
    res = +firstNum - +secondNum;
  }
  display.innerHTML = res;
}
