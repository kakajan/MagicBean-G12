// const ziad = document.querySelector("#ziad");
// const kam = document.querySelector("#kam");
// const natijeh = document.querySelector(".natijeh");
// natijeh.value = 0;
// function FN(x) {
//   if (x == "+") {
//     natijeh.value++;
//   } else {
//     if (natijeh.value > 0) {
//       natijeh.value--;
//     } else {
//       console.log("ja nadare");
//     }
//   }
// }

// const courseName = document.querySelector(".name");
// const courseScore = document.querySelector(".score");
// const addBTN = document.querySelector(".addFN");
// const output = document.getElementById("output");
// const courseList = [];
// let courseListText = "";
// addBTN.addEventListener("click", () => {
//   const course = {
//     name: courseName.value,
//     score: courseScore.value,
//   };
//   courseList.push(course);
//   courseListText +=
//     "<li>" + course.name + " | " + course.score + "</li>";
//   output.innerHTML = courseListText;
// });
const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const signIn = document.getElementById("signIn");
const output = document.getElementById("output");
const code = document.getElementById("code");
const fName = document.getElementById('f-Name')
const nameList = []
let nameListText = ""
signIn.addEventListener("click", () => {
    const reg = {
        Name: name.value,
        LastName: lastname.value,
        Code: code.value,
        FName:fName.value
    }
    nameList.push(reg);
    nameListText += "<li> esm: " + reg.Name + " famil: " + reg.LastName + " code: " + reg.Code + " esm pedar: " + reg.FName + "</li>";
    output.innerHTML = nameListText

})