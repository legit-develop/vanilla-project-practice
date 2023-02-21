const containerEl = document.querySelector(".container");
const xPositionEl = document.getElementById("x-position");
const yPositionEl = document.getElementById("y-position");
console.log(xPositionEl);
console.log(yPositionEl);

window.addEventListener("mousemove", (event) => {
  xPositionEl.innerText = event.clientX;
  yPositionEl.innerText = event.clientY;
  console.log(event.clientX);
  console.log(event.clientY);
});
