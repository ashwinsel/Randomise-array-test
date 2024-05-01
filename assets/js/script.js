// Get the modals
var howToPlay = document.getElementById("instructions");
var musicToggle12 = document.getElementById("musicOnOff");
const music = document.getElementById("music");
const musicToggle = document.getElementById("toggleMusic");
const resetButton = document.querySelector(".btn-reset");


// Play the audio when the user clicks on Music Toggle button
musicToggle.addEventListener("click", function() {
    if (music.paused) {
      // If the music is paused, start playing
      music.play().catch(error => {
        console.error("Failed to play music:", error);
      });
      // Change the button text to indicate pausing
      musicToggle.textContent = "Music On";
    } else {
      // If the music is playing, pause it
      music.pause();
      // Change the button text to indicate resuming
      musicToggle.textContent = "Music Off";
    }
  });

// Get the buttons that open the modals
var htp = document.querySelectorAll(".btn")[0];
var mT = document.querySelectorAll(".btn")[1];
var rG = document.querySelectorAll(".btn")[2];

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks the buttons, open the corresponding modal
htp.onclick = function() {
    howToPlay.style.display = "block";
}
 
rG.onclick = function() {
    resetButton.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        howToPlay.style.display = "none";
        
    }
}
// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = "none";        
    }
}

function resetGame() {
    // Reset current question counter and score
    currentQuestionCounter = 0;
    score = 0;

    // Show the first question
    showQuestion();

    // Remove any previous styling and enable answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
        answerButtons[i].disabled = false;
    }

    // Hide the next button
    nextButton.style.display = "none";
}


const question = [{
    question: "Which mighty bird serves as the vehicle of Lord Vishnu?",
    answers: [
        {ans: "Peacock", result: false},
        {ans: "Parrot", result: false},
        {ans: "Kite", result: true},
        {ans: "Sparrow", result: false},
    ]
},
{
    question: "The epic Ramayana tells the tale of Rama's battle against which demon king?",
    answers: [
        {ans: "Ravana", result: true},
        {ans: "Duryodhana", result: false},
        {ans: "Shiva", result: false},
        {ans: "Mahishasura", result: false},
    ]
},
{
    question: "The powerful weapon Trishul is associated with which deity?",
    answers: [
        {ans: "Brahma", result: false},
        {ans: "Shiva", result: true},
        {ans: "Vishnu", result: false},
        {ans: "Ganesha", result: false},
    ]
},
{
    question: "Which Hindu festival celebrates the victory of good over evil and the triumph of Lord Rama over Ravana?",
    answers: [
        {ans: "Holi", result: false},
        {ans: "Dusshera", result: true},
        {ans: "Janmasthami", result: false},
        {ans: "Diwali", result: false},
    ]
},
{
    question: "What is the name of the celestial weapon wielded by Lord Vishnu?",
    answers: [
        {ans: "Sudarshana Chakra", result: true},
        {ans: "Vajra", result: false},
        {ans: "Spear", result: false},
        {ans: "Trident", result: false},
    ]
},
{
    question: "Nandi the mount of Shiva is represented by what animal?",
    answers: [
        {ans: "Mouse", result: false},
        {ans: "Monkey", result: false},
        {ans: "Bull", result: true},
        {ans: "Lion", result: false},
    ]
},
{
    question: "What is the sacred abode of lord Vishnu?",
    answers: [
        {ans: "Ocean", result: true},
        {ans: "Mars", result: false},
        {ans: "Himalayas", result: false},
        {ans: "The Sun", result: false},
    ]
},
{
    question: "Who is the goddess of wealth and prosperity in Hindu Mythology?",
    answers: [
        {ans: "Saraswati", result: false},
        {ans: "Kali", result: false},
        {ans: "Lakshmi", result: true},
        {ans: "Parvati", result: false},
    ]
},
{
    question: "What does Krishna adornes on his head gear?",
    answers: [
        {ans: "Peacock feather", result: true},
        {ans: "Gold Leaf", result: false},
        {ans: "Pearl", result: false},
        {ans: "Kohinoor Diamond", result: false},
    ]
},
{
    question: "Krishna is beleived to be an incarnation of which god?",
    answers: [
        {ans: "Brahma", result: false},
        {ans: "Shiva", result: false},
        {ans: "Vishnu", result: true},
        {ans: "Indra", result: false},
    ]
},

]

// Randomise the questions in the quiz
function randomiseQuiz(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let copyQuestions = question.map(obj => {
    // Create a copy of the object
    let newObj = {...obj};
    // If letters is an array, shuffle it
    if (Array.isArray(obj.letters)) {
        newObj.letters = randomiseQuiz(obj.letters);
    }
    return newObj;
});


console.log(copyQuestions);

const questions = document.getElementById("question");
const answerButtons = document.getElementsByClassName("ans");
const nextButton = document.getElementById("next");





// Set initial values for quiz counter to nil
let currentQuestionCounter = 0;
let score = 0;

function startQuiz() {
    currentQuestionCounter = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    nextButton.style.display = "none";
}

function showQuestion() {

    let questionDisplayed = question[currentQuestionCounter];
    console.log(currentQuestionCounter);
    let questionNumber = currentQuestionCounter + 1;
    questions.innerHTML = questionNumber + ". " + questionDisplayed.question;

    questionDisplayed.answers.forEach((answer, i) => {
        document.getElementById("option" + (i + 1)).innerHTML = answer.ans;
    });

    // Remove any background-color already applied
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
    }

    for (let i = 1; i <= answerButtons.length; i++) {
        var buttonId = "option" + [i];
        console.log(buttonId);
        let x = document.getElementById(buttonId);
        x.style.pointerEvents = "";               
        
    }
    console.log(currentQuestionCounter);
}

function enterAnswer(evt) {
    let clicked = evt.target.innerHTML;
    console.log("Clicked:", clicked);
    

    // Find the corresponding question object
    const questionObj = question[currentQuestionCounter];
    const ansArray = questionObj.answers;

    // Find the corresponding answer object
    const answerObj = questionObj.answers.find((a) => a.ans === clicked);
    console.log(answerObj.ans);
    
    // Add classes based on the result
    if (answerObj.result === true) {
        evt.target.classList.add("green");
        score++; // Increment the score if the answer is correct
    } else {
        evt.target.classList.add("red");
    }

    // Find correct Answer object
    let rightAns;
    ansArray.forEach(function(obj, c){
        if (obj.result === true){            
        rightAns = ansArray[c].ans;
        }       
    });

    // Disable answer buttons after selection
    
    for (let i = 1; i <= answerButtons.length; i++) {
        var buttonId = "option" + [i];
        console.log(buttonId);
        let x = document.getElementById(buttonId);
        x.style.pointerEvents = "none";    
        console.log(x.textContent);        
        if(x.textContent === rightAns) {
            evt.target.classList.add("green");
        }
        
    }  

    // Show next button
    nextButton.style.display = "block";
}

startQuiz();



function nextQuestion() {
    // Move to the next question
    currentQuestionCounter++;

    // If all questions are answered, show score
    if (currentQuestionCounter >= question.length) {
        questions.innerHTML = "Your score is: " + score + "/" + question.length;
        nextButton.style.display = "none"; // Hide next button
    } else {
        showQuestion();
        nextButton.style.display = "none"; // Hide next button
    }
}

// Adding event listeners
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", enterAnswer);
}

nextButton.addEventListener("click", nextQuestion);

// Function to reset the game
function resetGame() {
    // Reset current question counter and score
    currentQuestionCounter = 0;
    score = 0;

    // Show the first question
    showQuestion();

    // Remove any previous styling and enable answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
        answerButtons[i].disabled = false;
    }

    // Hide the next button
    nextButton.style.display = "none";
    
}

// Event listener for the reset button
resetButton.addEventListener("click", resetGame);

