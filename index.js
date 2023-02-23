const counterEl = document.querySelector(".counter");
console.log(counterEl);
const barEl = document.querySelector(".front-bar");
console.log(barEl);

let percentCounter = 0;

function updateNumber() {
  counterEl.innerText = `${percentCounter}%`;
  barEl.style.width = `${percentCounter}%`;
  percentCounter++;

  if (percentCounter < 101) {
    setTimeout(updateNumber, 40);
  }
}

updateNumber();
