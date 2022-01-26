var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector(".submit-btn");
var score = JSON.parse(localStorage.getItem('correctA'));
var clearButton = document.querySelector(".clear-btn");

renderMessage()
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var submission = {
        initials: initialsInput.value,
        scores: score
    }
    var highScoreList = JSON.parse(localStorage.getItem("highScoreInputs"))
    var highScoreInputsToStore
    if (!highScoreList) {
       highScoreInputsToStore = [submission]; 
    } else {
        highScoreList.push(submission);
        highScoreInputsToStore = highScoreList;
    }
    
    localStorage.setItem("highScoreInputs", JSON.stringify(highScoreInputsToStore));
    renderMessage();
});
function renderMessage() {
    var highScoreList = JSON.parse(localStorage.getItem("highScoreInputs"));
    
    if (highScoreList) {
        // if the list is there then we want to write that list into li's, then push those to the html
        var listOfPlayers = highScoreList.map(function(score) {
            var initials = score.initials
            var scores = score.scores
            return `<li> ${initials} : ${scores} </li>`
    
            // joins the array into a single string
        }).join("");
        var leaderboardOl = document.querySelector("#leaderboard > ol")
        leaderboardOl.innerHTML = listOfPlayers;
    // } else {
    //     // add empty li's
    // }
}};

clearButton.addEventListener("click", function (event) {
    event.preventDefault;
    localStorage.removeItem("highScoreInputs");
    const removeLi = document.querySelectorAll('li');
    for (const element of removeLi) {
      element.remove()
    }
    
});
