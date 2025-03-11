console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your conode indexde here --v--
const title = "the lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let sales = 120;
// --^-- write your code here --^--
console.log("title:", title);
console.log("author:", author);
console.log("rating:", rating);
console.log("sales:", sales);
/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
rating = 5;
sales += 10;

console.log("\nAfter update:");
console.log("title:", title);
console.log("author:", author);
console.log("rating:", rating);
console.log("sales:", sales);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(title, author, rating, sales) {
  console.log(
    "title is" +
      title +
      "author is" +
      author +
      "rating is" +
      rating +
      "sales is" +
      sales
  );
}

logBookData(" the lord of the Javascript", "mario", 5, 130);
// --^-- write your code here --^--
