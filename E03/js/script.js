const input = document.getElementById("input");
let lessons = 0,
  sum = 0;
const output = document.getElementById("output");
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      addNewScore();
    }
});

// f(x, y) = x ^ 2 + y + 1
// x = 1
// y = 5

// function sayHi (x) {
//     alert(x)
// }
// sayHi('Salam')
function addNewScore() {
    // console.log(typeof input.value);
    sum += +input.value;
    lessons++;
    const res = sum / lessons;
    output.innerHTML = res;
    input.value = ''
}
