const counterEl = document.getElementById("counter");
const backBarEl = document.getElementById("back-bar");
const frontBarEl = document.getElementById("front-bar");

let percentCounter = 0;

function updateCounter() {
  counterEl.innerText = `${percentCounter}%`;
  frontBarEl.style.width = `${percentCounter}%`;
  percentCounter++;

  if (percentCounter < 101) {
    setTimeout(updateCounter, 20);
  }
}

updateCounter();
