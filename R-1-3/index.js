let natija = document.getElementById("natija");
let button = document.getElementById("button");
let valyuta = 12490.0;
let result = 0;

let summa = document.getElementById("summa");
button.addEventListener("click", () => {
  if (summa.value === "") return alert("Biror qiymat kiriting");
  else {
    result = summa.value * valyuta;
    const message = `Siz kiritgan ${summa.value}$ o'zbek so'mida ${result} tashkil etadi`;
    console.log(message);
    natija.innerHTML = message;
  }
});
