console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());
// ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
);
// ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((card) => ({
  question: card.question,
  answer: card.answer,
})); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

/*Ahora es tu turno: elimina el valor null y escribe código para 
que estas variables tengan un valor correspondiente a su nombre. Usa el método map para lograrlo.*/
