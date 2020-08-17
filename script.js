var title = document.getElementById('title');
title.style.display = "none";

document.getElementById('audioPlay').style.display = "none";

document.getElementById('audioPause').style.display = "none";

document.getElementById('gameholder2').style.display = "none";

document.getElementById('start').style.display = "none";

document.getElementById('gameholder3').style.display = "none";

document.getElementById('Level1Title').style.display = "none";

document.getElementById('Level1').style.display = "none";

document.getElementById('rainforest').style.display = "none";

document.getElementById('directions').style.display = "none";

document.getElementById('rainDescription').style.display = "none";

document.getElementById('freshwater').style.display = "none";

document.getElementById('freshDescription').style.display = "none";

document.getElementById('Level2Title').style.display = "none";

document.getElementById('Level2').style.display = "none";

document.getElementById('player').style.display = "none";



var userName;

function storeName() {
  var input = document.getElementById("input1").value;
  userName = input;
  document.getElementById('gameholder1').style.display = "none";
  title.style.display = "block";
  document.getElementById('audioPlay').style.display = "block";
  document.getElementById('audioPause').style.display = "block";
  document.getElementById('gameholder2').style.display = "block";
}

var audio;
audio = document.getElementById("myAudio");
audio.volume = 0.5;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function mission(){
  document.getElementById('gameholder2').style.display = "none";
  document.getElementById('start').style.display = "block";
  document.getElementById('gameholder3').style.display = "block";
}



var i = 0;
var txt;
var speed = 1;

function typeWriter() {
  txt = 'Hello, ' + userName + ', welcome to Humans and the Environment. Our world has changed significantly due to the actions of humans. Do you know how?'; /* The text */
  
  if (i < txt.length) {
    document.getElementById("gameholder3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
} 



function startLevel1(){
  document.getElementById('gameholder3').style.display = "none";
  document.getElementById('Level1Title').style.display = "block";
  document.getElementById('Level1').style.display = "block";
  document.getElementById('rainforest').style.display = "block";
  document.getElementById('rainButton1').style.display = "block";
  document.getElementById('directions').style.display = "block";
  document.getElementById('player').style.display = "block";

}

var a = 0;
var txt2 = 'Welcome to the first level. This environment is the rainforest, a place with the most diverse creatures.'; 
var speed1 = 1;

function typeWriter2() {
  if (a < txt2.length) {
    document.getElementById("Level1").innerHTML += txt2.charAt(a);
    a++;
    setTimeout(typeWriter2, speed1);
    
  }
  setTimeout(rainDescription, 9000);
  document.getElementById('rainFact1').style.display = "none";
  document.getElementById('rainFact2').style.display = "none";
  document.getElementById('rainButton2').style.display = "none";
  document.getElementById('rainButton3').style.display = "none";
  document.getElementById('rainFact3').style.display = "none";
  document.getElementById('player').style.width = "240px";
  document.getElementById('player').style.display = "block";
} 

function rainDescription(){
  document.getElementById('Level1').innerHTML = "";
  document.getElementById('rainDescription').style.display = "block";
}

var objImage;
function init(){
	objImage=document.getElementById("player");
  objImage.style.display = "block";				
	objImage.style.position='relative';
	objImage.style.left='0px';
	objImage.style.top='300px';
}

function getKeyAndMove(e){				
	var key_code=e.which||e.keyCode;
	switch(key_code){
		case 37: //left arrow key
			moveLeft();
      setTimeout(changeBack, 2000);
			break;
			
		case 39: //right arrow key
			moveRight();
      setTimeout(changeBack, 2000);
			break;						
	}
}

function moveLeft(){
	objImage.style.left=parseInt(objImage.style.left)-60 +'px';
  objImage.src="charLeft.png";
  objImage.style.width="235px";
}

function changeBack(){
   objImage.src="char.png"
}
  
function moveRight(){
	objImage.style.left=parseInt(objImage.style.left)+60 +'px';
  objImage.src="charRight.png";
  objImage.style.width="235px";
}
	
window.onload=init;

function rainFact1(){
  document.getElementById('rainFact1').style.display = "block";
}

function rainButton2(){
  document.getElementById('rainButton2').style.display = "block";
}

function rainFact2(){
  document.getElementById('rainFact2').style.display = "block";
}

function rainButton3(){
  document.getElementById('rainButton3').style.display = "block";
}

function rainFact3(){
  document.getElementById('rainFact3').style.display = "block";
}

var answer1;

function level1Quiz(){
  var quiz1 = prompt("How much of the Earth's surface do rainforests cover? \n A. 3% \n B. 10% \n C. 6% \n D. 12%", "Your Answer");
  console.log(quiz1);
  if (quiz1 == "A" || quiz1 == "a" || quiz1 == "A." || quiz1 == "a." || quiz1 == "a. 3%" || quiz1 == "A. 3%" || quiz1 == "3%" || quiz1 == "3") {
    startLevel2();
  }
  else {
    alert('Seems like \'' + quiz1 + '\' is incorrect! Try again!');
    level1quiz();
  }
}


function startLevel2(){
  typeWriter3();
  document.getElementById('rainforest').style.display = "none";
  document.getElementById('rainforest').innerHTML = "";
  document.getElementById('Level1Title').style.display = "none";
  document.getElementById('rainDescription').style.display = "none";
  document.getElementById('freshwater').style.display = "block";
  document.getElementById('Level2Title').style.display = "block";
  document.getElementById('Level2').style.display = "block";
  document.getElementById('freshFact1').style.display = "none";
  document.getElementById('freshFact2').style.display = "none";
  document.getElementById('freshButton2').style.display = "none";
  document.getElementById('freshButton3').style.display = "none";
  document.getElementById('freshFact3').style.display = "none";
  document.getElementById('freshButton1').style.display = "block";
}

function freshFact1(){
  document.getElementById('freshFact1').style.display = "block";
}

function freshButton2(){
  document.getElementById('freshButton2').style.display = "block";
}

function freshFact2(){
  document.getElementById('freshFact2').style.display = "block";
}

function freshButton3(){
  document.getElementById('freshButton3').style.display = "block";
}

function freshFact3(){
  document.getElementById('freshFact3').style.display = "block";
}

function level2Quiz(){
  var quiz2 = prompt("Which of the following is the most common threat to freshwater aligators? \n A. Deforestation \n B. Overfishing \n C. Illegal Killing \n D. Agricultural Pesticides", "Your Answer");
  console.log(quiz2);
  if (quiz2 == "C" || quiz2 == "c" || quiz2 == "C." || quiz2 == "c." || quiz2 == "Illegal Killing" || quiz2 == "illegal killing" || quiz2 == "Illegal killing" || quiz2 == "A. Illegal Killing" || quiz2 == "a. Illegal Killing" || quiz2 == "A. Illegal Killing" || quiz2 == "A.Illegal Killing" || quiz2 == "a.Illegal Killing" || quiz2 == "illegalkilling" || quiz2 == "Illegalkilling") {
    startLevel3();
  }
  else {
    alert('Seems like \'' + quiz2 + '\' is incorrect! Try again!');
    level2quiz();
  }
}


function startLevel3(){
  typeWriter3();
  document.getElementById('freshwater').style.display = "none";
  document.getElementById('freshwater').innerHTML = "";
  document.getElementById('Level2Title').style.display = "none";
  document.getElementById("freshDescription").style.display = "none";
  document.getElementById('freshwater').style.display = "block";
  document.getElementById('Level3Title').style.display = "block";
  document.getElementById('Level3').style.display = "block";
  document.getElementById('freshFact1').style.display = "none";
  document.getElementById('freshFact2').style.display = "none";
  document.getElementById('freshButton2').style.display = "none";
  document.getElementById('freshButton3').style.display = "none";
  document.getElementById('freshFact3').style.display = "none";
  document.getElementById('player2').style.display = "block";
  document.getElementById('freshButton1').style.display = "block";
  document.getElementById('player2').style.width = "240px";
}

var b = 0;
var txt3 = 'Welcome to the freshwater ecosystem; consisting of the Earth\'s lakes, ponds, springs, streams, and wetlands.' ; 
var speed3 = 1;

function typeWriter3() {
  if (b < txt3.length) {
    document.getElementById("Level2").innerHTML += txt3.charAt(b);
    b++;
    setTimeout(typeWriter3, speed3);
    
  }
  setTimeout(freshDescription, 9000);
}  

function freshDescription(){
  document.getElementById('Level2').innerHTML = "";
  document.getElementById('freshDescription').style.display = "block";
}



function level3Quiz(){
  var quiz2 = prompt("Moose are most commonly hunted for their... \n A. Fur \n B. Antlers \n C. Hooves \n D. Meat", "Your Answer");
  console.log(quiz3);
  if (quiz3 == "B" || quiz3 == "b" || quiz3 == "B." || quiz3 == "b." || quiz3 == "antlers" || quiz3 == "Antlers" || quiz3 == "B. Antlers" || quiz3 == "b. Antlers" || quiz3 == "B Antlers" || quiz3 == "b Antlers" || quiz3 == "B. antlers" || quiz3 == "b. antlers" ) {
    startLevel4();
  }
  else {
    alert('Seems like \'' + quiz3 + '\' is incorrect! Try again!');
    level3quiz();
  }
}

function startLevel4(){
  typeWriter3();
  document.getElementById('freshwater').style.display = "none";
  document.getElementById('freshwater').innerHTML = "";
  document.getElementById('Level2Title').style.display = "none";
  document.getElementById("freshDescription").style.display = "none";
  document.getElementById('freshwater').style.display = "block";
  document.getElementById('Level3Title').style.display = "block";
  document.getElementById('Level3').style.display = "block";
  document.getElementById('freshFact1').style.display = "none";
  document.getElementById('freshFact2').style.display = "none";
  document.getElementById('freshButton2').style.display = "none";
  document.getElementById('freshButton3').style.display = "none";
  document.getElementById('freshFact3').style.display = "none";
  document.getElementById('player2').style.display = "block";
  document.getElementById('freshButton1').style.display = "block";
  document.getElementById('player2').style.width = "240px";
}

function level4Quiz(){
  var quiz2 = prompt("Seaturtles tend to confuse jellyfish with...? \n A. Straws \n B. Fishing Nets \n C. Paper \n D. Plastic Bags", "Your Answer");
  console.log(quiz4);
  if (quiz4 == "D" || quiz4 =="d" || quiz4 =="d." || quiz4 == "D." || quiz4=="D. Plastic Bags" || quiz4 == "d. Plastic Bags" || quiz4 == "D. plastic bags" || quiz4 == "D. Plastic Bags" || quiz4 == "d. plastic bags" || quiz4 == "d. Plastic bags" || quiz4 == "d. Plastic Bags" || quiz4 == "plastic bags" || quiz4 == "Plastic Bags" || quiz4 == "Plastic bags") {
    startLevel5();
  }
  else {
    alert('Seems like \'' + quiz4 + '\' is incorrect! Try again!');
    level4quiz();
  }
}

function startLevel5(){
  typeWriter3();
  document.getElementById('freshwater').style.display = "none";
  document.getElementById('freshwater').innerHTML = "";
  document.getElementById('Level2Title').style.display = "none";
  document.getElementById("freshDescription").style.display = "none";
  document.getElementById('freshwater').style.display = "block";
  document.getElementById('Level3Title').style.display = "block";
  document.getElementById('Level3').style.display = "block";
  document.getElementById('freshFact1').style.display = "none";
  document.getElementById('freshFact2').style.display = "none";
  document.getElementById('freshButton2').style.display = "none";
  document.getElementById('freshButton3').style.display = "none";
  document.getElementById('freshFact3').style.display = "none";
  document.getElementById('player2').style.display = "block";
  document.getElementById('freshButton1').style.display = "block";
  document.getElementById('player2').style.width = "240px";
}
