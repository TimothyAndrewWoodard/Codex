const puzzleprincipals = [
  '',
  'The most fundamental endgame principal is that of opposition of the kings, after all of the other pices have been traded and we are down to a King and king. Find the winning move.',
  'Another fundamental endgame concept is that of zugzwang. This is when you deprive your opponent of any useful, or even acceptable move, and force him to make a move that damages his position.',
  'This puzzle comes from a game played by yours truly in Class A at the world open. There were thousands of dollars riding on this game. I endedup winning around four grand but my opponent could have won that if he had a better understanding of basic endgame principals and had found the correct move that leads to a forced win. This puzzle also illustrates the principal of zugzwang as well as the principalof distraction.',
];

const puzzlesimages = ['', 'opposition.png', 'zugzwang.png', 'real.png'];

const question = document.querySelector('#questions');

const image = document.querySelector('#puzzleimages');

const questionAnswers = ['kg6', 'rf1', 'c6'];

let score = null;
let questionCounter = null;
const maxQuestions = 2;

startQuiz = () => {
  score = 0;
  questionCounter = 0;
  image.src = puzzlesimages[1];
  question.innerText = puzzleprincipals[1];
};

const button0 = document.getElementById('btn0');
button0.addEventListener('click', () => {
  startQuiz();
});
/*
const button = document.getElementById("btn1");
button.addEventListener('click', () => {
    let str = document.getElementById("notation1").value;
    let str1 = str.tolowercase(); 
    let i = 0;
    let j = 1;
    let k = 1;
    if(str1===questionAnswers[i]){
        score++
    }
    i++;
    j++;
    k++;
    question.innerText = puzzleprincipals[j];
    image.src = puzzleimages[k];
    questionCounter++;
    if(questionCounter>maxQuestions){
        question.innerText = puzzleprincipals[0];
        image.src = puzzleimages[k];
    }


})
*/
