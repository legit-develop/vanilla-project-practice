const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let barPercentage = 0;

function updateNum() {
  counterEl.innerText = `${barPercentage}%`;
  barEl.style.width = `${barPercentage}%`;
  barPercentage++;
  if (barPercentage < 101) {
    setTimeout(updateNum, 40);
  }
}

updateNum();
