const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateCalendar() {
  //monthEl.innerText = months[date.getMonth()];
  //dayEl.innerText = weekdays[date.getDay()];
  monthEl.innerText = date.toLocaleDateString("en", { month: "long" });
  dayEl.innerText = date.toLocaleDateString("en", { weekday: "long" });
  dateEl.innerText = date.getDate();
  yearEl.innerText = date.getFullYear();
}

updateCalendar();
