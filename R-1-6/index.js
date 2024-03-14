var button = document.getElementById("button");
var natija = document.getElementById("natija");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = 0;

button.addEventListener("click", () => {
  if (num1.value === "" || num2.value === "")
    return alert("Sonlarni toliq kiriting!");
  else {
    result = num1.value / 2 + num2.value / 2;
    var message = ` Siz kiritgan ${num1.value} va ${num2.value} sonlarning o'rta arifmetigi ${result} tashkil etadi`;
    console.log(message);
    natija.innerHTML = message;
  }
});
