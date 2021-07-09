const button = document.getElementById('btn1');
button.addEventListener('click', () => {
  var str = document.getElementById('text1').value;
  document.getElementById('new1').innerHTML =
    ' Hello ' + str + '!How are you today?';
});

//function fn1(){
//var str = document.getElementById("text1").value;
//document.getElementById("new1").innerHTML = " Hello " + str + "!How are you today?"
//}

function fn2() {
  var str = document.getElementById('text2').value;
  document.getElementById('new2').innerHTML = 'Your phone number is ' + str;
}

function fn3() {
  var str = document.getElementById('text3').value;
  document.getElementById('new3').innerHTML = 'Your email is ' + str;
}

function fn4() {
  var str = document.getElementById('text4').value;
  document.getElementById('new4').innerHTML = 'Your rating(s) are ' + str;
}

function fn5() {
  let color = document.querySelectorAll('.box, .blue-box');
  for (i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = 'green';
  }
}
