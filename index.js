const xPositionEl = document.getElementById("x-position");
const yPositionEl = document.getElementById("y-position");

window.addEventListener("mousemove", (event) => {
  xPositionEl.innerText = event.clientX;
  yPositionEl.innerText = event.clientY;
});
