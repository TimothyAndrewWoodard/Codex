const puzzleprincipals = [
  'Endgame principals',
  'The most fundamental endgame principal is that of opposition of the kings, after all of the other pices have been traded and we are down to a king versus a king and pawn. Find the winning move.',
  'Another fundamental endgame concept is that of zugzwang. This is when you deprive your opponent of any useful, or even acceptable move, and force him to make a move that damages his position.',
  'This puzzle comes from a game played by yours truly in Class A at the world open. There were thousands of dollars riding on this game. I ended up winning around four grand but my opponent could have won that if he had a better understanding of basic endgame principals and had found the correct move that leads to a forced win. This puzzle also illustrates the principal of zugzwang as well as the principalof distraction.',
];

const puzzleimages = ['', 'opposition.png', 'zugzwang.png', 'real.png'];

const question = document.querySelector('#questions');

const image = document.querySelector('#puzzleimages');

const questionAnswers = ['kg6', 'rf1', 'c6'];

let score = null;
let questionCounter = null;
const maxQuestions = 3;
let i = 0;
let j = 1;

startQuiz = () => {
  score = 0;
  questionCounter = 0;
  image.src = puzzleimages[1];
  question.innerText = puzzleprincipals[1];
};

const button0 = document.getElementById('btn0');
button0.addEventListener('click', () => {
  startQuiz();
});

const button = document.getElementById('btn1');
button.addEventListener('click', () => {
  let str = document.getElementById('notation1').value;
  let str1 = null;

  str1 = str.toLowerCase();
  if (str1 === questionAnswers[i]) {
    score++;
  }
  i++;

  questionCounter++;
  if (questionCounter > maxQuestions) {
    resetQuiz();
  }

  getNewQuestion();
});

getNewQuestion = () => {
  j++;
  question.innerText = puzzleprincipals[j];
  image.src = puzzleimages[j];
};
resetQuiz = () => {
  question.innerText = puzzleprincipals[0];
  image.src = puzzleimages[0];
};
