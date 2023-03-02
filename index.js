const jokeEl = document.getElementById("joke");

const btnEl = document.getElementById("btn");

const apiKey = "V7aqF5COHMcp3MVAmbpBMw==IB3tbbQ8XyWqC9M7";

const options = {
  method: "GET",
  headers: {
    "X-Api.key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
