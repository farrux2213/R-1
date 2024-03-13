const button = document.getElementById("button");
const box = document.getElementById("box");

const rangi = document.getElementById("rangi");
const shakli = document.getElementById("shakli");
const width = document.getElementById("width");
const height = document.getElementById("height");

button.addEventListener("click", () => {
  if (rangi.value === "") return alert("Rangni tanlang!");

  box.style = `
  background-color: ${rangi.value};
  width: ${width.value}px;
  height: ${height.value}px
`;
});
