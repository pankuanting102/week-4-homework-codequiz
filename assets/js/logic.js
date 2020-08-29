// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var score = 0
// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
 document.getElementById("start-screen").style.display="none"
  // un-hide questions section
questionsEl.style.display="block";
  // start timer

  var secondsLeft = time;
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + "s";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
  // show starting time
  setTime()
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  

// update title with current question
  questionsEl.children[0].textContent = questions[currentQuestionIndex].title

  

  

  // clear out any old question choices
function clearOldChoices() {
  while (choicesEl.firstChild){
    choicesEl.removeChild
    (choicesEl.firstChild)
  }

}
  clearOldChoices()  
    
  // loop over choices
  for (var j = 0; j < 4; j++){
    var buttonEl = document.createElement("button");
    buttonEl.innerText =  questions[currentQuestionIndex].choices[j]
    buttonEl.setAttribute("id","choice-btn")
        // create new button for each choice
   document.querySelector("#choices").appendChild(buttonEl)
      // attach click event listener to each choice
buttonEl.addEventListener("click", function(event){
 

    // display on the page

   
   
    // check if user guessed wrong
  
    if(event.target.textContent !== questions[currentQuestionIndex].answer){
      console.log(event.target.textContent)
      console.log(buttonEl.innerText)
   
  // penalize time
  
      // display new time on page
  
      // play "wrong" sound effect
      
      function AnsWrongAudio() {
        sfxWrong.play();
      }
      AnsWrongAudio()

      document.getElementById("feedback").style.display="block";
      document.getElementById("feedback").innerText="Wrong!";
 

      setTimeout(function () {
        document.getElementById('feedback').style.display='none';
    }, 500);
    
    }
    
   
      
  
    // else 
      // play "right" sound effect
      
      else{AnsRightAudio()
        function AnsRightAudio() {
          sfxRight.play();
        }

        score ++
        console.log(score)
        document.getElementById("feedback").style.display="block";
        document.getElementById("feedback").innerText="Correct!";
   

        setTimeout(function () {
          document.getElementById('feedback').style.display='none';
      }, 500);
      
  

      }
  
    // flash right/wrong feedback on page for half a second
    
    questionClick()

    function questionClick() {
  
  
    
  
      // move to next question
      currentQuestionIndex ++
      // check if we've run out of questions
      if (currentQuestionIndex>4){
        // quizEnd
        quizEnd();
      }
        
      // else 
      // getQuestion
       else (getQuestion()) 
        
      }
    
    function quizEnd() {
      // stop timer
    
      // show end screen
      document.querySelector("#end-screen").style.display="block"
      // show final score
    document.querySelector("#final-score").innerText=score * 20
      // hide questions section
      questionsEl.style.display="none"
    }
  
   
})
  }
}



function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  
  
  // get value of input box
submitBtn.addEventListener("click", function(event){
event.preventDefault();
 // make sure value wasn't empty
 var userInitials = document.querySelector("#initials").value;
 if (userInitials === ""){
  initialsEl.value="Please enter initials!"
 }

 else{

    // get saved scores from localstorage, or if not any, set to empty array
    localStorage.setItem("final-score", score);
    // format new score object for current user
    var stringifiedUser = JSON.stringify(userInitials);
    localStorage.setItem("initials",stringifiedUser);
    // save to localstorage
    
    
    // redirect to next page
    function pageRedirect(){
      window.location.href = "highscores.html"
    }
    pageRedirect ()

 }
 
  });

}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
