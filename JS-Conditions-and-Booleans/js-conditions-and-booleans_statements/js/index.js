console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs

const numberOfHotdogs = 58;

if (numberOfHotdogs <= 5) {
  console.log("hotdog total price:" + numberOfHotdogs * 2);
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  console.log("hotdog total price:" + numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("hotdog total price:" + numberOfHotdogs * 1);
} else {
  console.log("hotdog total price:" + numberOfHotdogs * 0.1);
}

// Part 4: Daytime

const currentHour = 13;

const statement = currentHour < 17 ? "still need to learn" : "party time!";

console.log(statement);

// Part 5: Greeting

const userName = "Archibald";
const couchName = "juan";

const greeting = userName === couchName ? "Hello couch" : "hello" + userName;

console.log(greeting);
