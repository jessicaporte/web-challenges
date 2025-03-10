// Change this value to test different "weather" conditions.
const weather = "sunny";
const temperature = 15;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log("It's sunny and warm!");
    } else {
      console.log("It's sunny, but a bit chilly!");
    }
    break;

  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;

  case "snowy":
    if (temperature < 0) {
      console.log("Freezing snow!");
    }
    break;

  default:
    console.log("I'm not sure what the weather is like.");
}
