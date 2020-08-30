

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
  li.setAttribute("data-index", i)

}
 // display on page
    document.querySelector("#highscores").appendChild(li);
    
}




  // (and reload)
  
// attache clear event to clear score button
document.getElementById("clear").addEventListener("click",function (){
  document.querySelector("ol").innerHTML = "";
  localStorage.clear("initials");
})

// run printhighscore when page loads
printHighscores()