const jokeText = document.getElementById("joke");
console.log(jokeText);
const btnEl = document.getElementById("btn");
console.log(btnEl);

const apiKey = "V7aqF5COHMcp3MVAmbpBMw==IB3tbbQ8XyWqC9M7";

const options = {
  method: "GET",
  headers: {
    "X-API-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjookes?limit=1";
