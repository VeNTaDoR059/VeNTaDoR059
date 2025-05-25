let btnTheme = document.querySelector(".theme");
let body = document.querySelector("body");

if (localStorage.getItem("theme") == "dark") {
    body.classList.add("dark-theme");
} else if (localStorage.getItem("theme") == "light") {
    body.classList.remove("dark-theme");
}

btnTheme.addEventListener("click" , changeTheme);

function changeTheme() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    } else {
    localStorage.setItem('theme', 'light');
    }
}

let timeText = document.querySelector(".time");

let date = new Date();
let time = date.toLocaleTimeString();
timeText.innerHTML = time;


function timeString() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeText.innerHTML = time;
}
setInterval(timeString , 1000);

const timeBlock = document.querySelector(".time-block");

const redInputBg = document.querySelector("#redBg");
const greenInputBg = document.querySelector("#greenBg");
const blueInputBg = document.querySelector("#blueBg");


redInputBg.addEventListener("input" , changeBackground);
greenInputBg.addEventListener("input" , changeBackground);
blueInputBg.addEventListener("input" , changeBackground);


function changeBackground() {
timeBlock.style.background = `rgb(${redInputBg.value} ${greenInputBg.value} ${blueInputBg.value})`
}
changeBackground();

const redInputText = document.querySelector("#redText");
const greenInputText = document.querySelector("#greenText");
const blueInputText = document.querySelector("#blueText");

redInputText.addEventListener("input" , changeTextColor);
greenInputText.addEventListener("input" , changeTextColor);
blueInputText.addEventListener("input" , changeTextColor);


function changeTextColor() {
timeBlock.style.color = `rgb(${redInputText.value} ${greenInputText.value} ${blueInputText.value})`
}
changeTextColor();

const btnChangeText = document.querySelector("#typeColor");
const btnChangeBg = document.querySelector("#typeBg");
const blockChangeText = document.querySelector("#typeTextBlock");
const blockChangeBg = document.querySelector("#typeBgBlock");


btnChangeText.addEventListener("click", changeTypeColor);
btnChangeBg.addEventListener("click", changeTypeColor);

function changeTypeColor() {
    if(btnChangeText.checked) {
        blockChangeText.classList.contains("disabled") ? blockChangeText.classList.remove("disabled") : true ;
        blockChangeBg.classList.contains("disabled") ? true : blockChangeBg.classList.add("disabled") ;
    } else if(btnChangeBg.checked) {
        blockChangeBg.classList.contains("disabled") ? blockChangeBg.classList.remove("disabled") : true ;
        blockChangeText.classList.contains("disabled") ? true : blockChangeText.classList.add("disabled") ;
}
}
