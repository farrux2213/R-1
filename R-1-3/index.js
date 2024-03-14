const natija = document.getElementById("natija");
const button = document.getElementById("button");
const valyuta = 12490.0;
const result = 0;

const summa = document.getElementById("summa");
button.addEventListener("click", () => {
  if (summa.value === "") return alert("Biror qiymat kiriting");
  else {
    result = summa.value * valyuta;
    const message = `Siz kiritgan ${summa.value}$ o'zbek so'mida ${result} tashkil etadi`;
    console.log(message);
    natija.innerHTML = message;
  }
});
