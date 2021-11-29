const puzzleprincipals = [
  'The most fundamental endgame principal is that of opposition of the kings, after all of the other pices have been traded and we are down to a King and king. Find the winning move.',
  'Another fundamental endgame concept is that of zugzwang. This is when you deprive your opponent of any useful, or even acceptable move, and force him to make a move that damages his position.',
  'This puzzle comes from a game played by yours truly in Class A at the world open. There were thousands of dollars riding on this game. I endedup winning around four grand but my opponent could have won that if he had a better understanding of basic endgame principals and had found the correct move that leads to a forced win. This puzzle also illustrates the principal of zugzwang as well as the principalof distraction.',
];

const puzzlesimages = ['opposition.png', 'zugzwang.png', 'real.png'];

const question = document.querySelector('#questions');
question.innerText = puzzleprincipals[0];

const image = document.querySelector('#puzzleimages');
image.src = puzzlesimages[0];

/*
const button = document.getElementById("btn1");
button.addEventListener('click', () => {
    var str = document.getElementById("notation1").value;
    if str ===  
})
*/
