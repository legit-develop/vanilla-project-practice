const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();

monthEl.innerText = date.toLocaleDateString("en", { month: "long" });
dayEl.innerText = date.toLocaleDateString("en", { weekday: "long" });
dateEl.innerText = date.toLocaleDateString("en", { day: "numeric" });
yearEl.innerText = date.toLocaleDateString("en", { year: "numeric" });
