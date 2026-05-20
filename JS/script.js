console.log("Filip Gemela");
console.log("Pizza");
const var1 = 1;
const var2 = 5;
console.log(var1 + var2);
console.log(var1 - var2);
console.log(var1 * var2);
console.log(var1 / var2);

const name = promptNotEmpty("Name");
const color = promptNotEmpty("Color");
alert(`Hi ${name}! Your favorite color is ${color}`);

const age = promptNotEmpty("Age");
if (Number(age) < 13) {
  alert("You are a child");
} else if (Number(age) < 20) {
  alert("You are a teenager");
} else {
  alert("You are an adult");
}

const text = document.getElementById("text");
const button = document.getElementById("button");
const loading = document.getElementById("loading");

button.addEventListener("click", async () => {
  loading.style.display = "flex";
  await fetchMessage();
  loading.style.display = "none";
  text.innerText = "Hello from the future";
  text.style.color = "blue";
});

function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function promptNotEmpty(input) {
  let inValid = true;
  let response;
  while (inValid) {
    response = prompt(input);
    if (response === "") {
      alert("Invalid input!");
    } else {
      inValid = false;
    }
  }
  return response;
}
