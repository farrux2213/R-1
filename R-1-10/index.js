var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");

// var asosiyDiv = document.getElementById("asos");
// var speedDiv = document.getElementById("speed");

button1.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = position + "px";
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = null;
    }
  }
});
button2.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = position + "px";
      elem.style.top = null;
      elem.style.left = 260 + "px";
      elem.style.right = 260 + "px";
    }
  }
});
button3.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = 260 + "px";
      elem.style.top = position + "px";
      elem.style.left = null;
      elem.style.right = null;
    }
  }
});
button4.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = position + "px";
      elem.style.left = 260 + "px";
      elem.style.right = null;
    }
  }
});
button5.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = 260 + "px";
      elem.style.left = position + "px";
      elem.style.right = null;
    }
  }
});
button6.addEventListener("click", function myMoveTRT() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = position + "px";
      elem.style.right = null;
    }
  }
});

button7.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = 260 + "px";
      elem.style.left = null;
      elem.style.right = position + "px";
    }
  }
});
button8.addEventListener("click", () => {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position == 260) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = position + "px";
    }
  }
});
