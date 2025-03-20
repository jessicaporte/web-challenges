console.clear();

let number = Math.random();
let count = 0;

// --v-- write or modify code below this line --v--
while (number <= 0.9) {
  console.log(number);
  count++;
  number = Math.random();
}
// --^-- write or modify code above this line --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
