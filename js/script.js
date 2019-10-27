const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const startPage = document.getElementById("overlay");
const startGame = document.querySelector(".btn_reset");
const phrases = [
    'Have a good day',
    'Front end web development',
    'peanut butter',
    'classmate',
    'javascript'
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

getRandomPhraseAsArray(phrases);


