let snare = document.getElementById("snare");
snare.addEventListener('click', playSnare);

function playSnare(){
    let snareSound = new Audio("sounds/snare.wav");
    snareSound.play();
}

let kick = document.getElementById("kick");
kick.addEventListener('click', playKick);

function playKick(){
    let kickSound = new Audio("sounds/kick.wav");
    kickSound.play();
}

let hihat = document.getElementById("hihat");
hihat.addEventListener('click', playHihat);

function playHihat(){
    let hihatSound = new Audio("sounds/hihat.wav");
    hihatSound.play();
}

let cymbal = document.getElementById("cymbal");
cymbal.addEventListener('click', playCymbal);

function playCymbal(){
    let cymbalSound = new Audio("sounds/cymbal.wav");
    cymbalSound.play();
}

let tom1 = document.getElementById("tom1");
tom1.addEventListener('click', playTom1);

function playTom1(){
    let tom1Sound = new Audio("sounds/tom1.wav");
    tom1Sound.play();
}

let tom2 = document.getElementById("tom2");
tom2.addEventListener('click', playTom2);

function playTom2(){
    let tom2Sound = new Audio("sounds/tom2.wav");
    tom2Sound.play();
}

let ding = document.getElementById("ding");
ding.addEventListener('click', playDing);

function playDing(){
    let dingSound = new Audio("sounds/ding.wav");
    dingSound.play();
}