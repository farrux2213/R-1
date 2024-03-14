var button = document.getElementById("button");
var natija = document.getElementById("natija");
var yil = document.getElementById("yil");
var result = 0;
var shu_yil = 2024;

button.addEventListener("click", () => {
  if (yil.value === "") return alert("yosh kiritilmagan!");
  else {
    result = shu_yil - yil.value;
    var message = `Sizning yoshingiz  ${result}`;
    console.log(message);
    natija.innerText = message;
  }
});
