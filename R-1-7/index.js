var button = document.getElementById("button");
var natija = document.getElementById("natija");
var time = document.getElementById("time");
var distance = document.getElementById("distance");
var result = 0;

button.addEventListener("click", () => {
  if (time.value === "" || distance.value === "")
    return alert("Vaqt yoki Masofa kiritilmagan!");
  else {
    result = distance.value / time.value;
    var message = ` Siz ${time.value} sekundda ${distance.value} metr masofani bosib o'ttingiz, Tezligingiz esa ${result} m/s tashkil etadi.`;
    console.log(message);
    natija.innerHTML = message;
  }
});
