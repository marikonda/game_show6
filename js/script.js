const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const startPage = document.getElementById("overlay");
const startGame = document.querySelector(".btn__reset");
const liveHearts = document.querySelectorAll(".tries img");
const phrases = [
    'Have a good day',
    'killer queen',
    'peanut butter',
    'classmate',
    'javascript',
    'Let it be',
    'programming'
];

//listens when a startbutton is clicked
startGame.addEventListener("click", () => {
    startPage.style.display = "none";
});


//return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split("");
}

//set the game display
function addPhraseToDisplay(arr) {

    const ul = document.querySelector("#phrase ul");
    for ( let i = 0; i <=arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = arr[i];
        if (arr[i] !== " ") {
            li.className = "letter"
        } else {
            li.className = "space"
        }
        ul.appendChild(li);
     }    
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

//check if a letter is in a phrase
function  checkLetter(BUTTON) {
    let letters = document.getElementsByClassName("letter");
    let matchletter = null;
    for ( let i = 0; i < letters.length; i++) {
        if (BUTTON === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            match = true;
        }
    }
    return matchletter;


}

//listens keyboard clicks
qwerty.addEventListener('click', (e) => {
    if (event.target.tagName === "BUTTON") {
        const target= e.target;
        event.target.disabled = true;
        event.target.classList.add("chosen");
        checkLetter(event.target.textContent);
        const text = target.textContent;
        const letterFound = checkLetter(text);
    
    //if a letter is not found, loses a heart
        if (letterFound === null) {
            missed +=1;
            liveHearts[liveHearts.length - missed].setAttribute(
                "src",
                "images/lostHeart.png"
            );
        }
    }
});

//checks if you are winning 
function checkWin(){







}