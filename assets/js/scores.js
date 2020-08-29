

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var userName = localStorage.getItem("initials")

  var userScore = localStorage.getItem("final-score")
  
  // (optional) sort highscores by score property in descending order

  // for each score
    // create li tag for each high score
for (var i = 0; i< userScore.length; i++){
  var li = document.createElement("li")
  li.textContent = userName + " " + userScore[i]*20

}

 

    // display on page
    document.querySelector("#highscores").appendChild(li);
}



function clearHighscores() {
  // (and reload)
  localStorage.clear();
}

// attache clear event to clear score button

// run printhighscore when page loads
printHighscores()