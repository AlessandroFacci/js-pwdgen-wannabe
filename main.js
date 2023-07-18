let name = prompt("Add your name");
console.log(name);

let surname = prompt("Add your username");
console.log(surname);

let color = prompt("Add your favorite color");
console.log(color);

let password = name + surname + color + "21";

const passwordGenerator = `
${password}`;

document.getElementById("password-generator").innerHTML = passwordGenerator;
