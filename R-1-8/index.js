var button = document.getElementById("button");
var natija = document.getElementById("natija");
var yil = document.getElementById("yil");

var result = 0;

button.addEventListener("click", () => {
  if (yil.value === "" || yil.value >= 2025)
    return alert("Yil kiritilmagan yoki hali bu yil mavjud emas!");
  else {
    result = Math.ceil(yil.value / 100);
    var message = ` Siz kiritgan ${yil.value} yil ${result} asrga tegishli!`;
    console.log(message);
    natija.innerHTML = message;
  }
});
