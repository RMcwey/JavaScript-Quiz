var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector(".submit-btn");
var score = JSON.parse(localStorage.getItem('correctA'));

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // var answerSubmission = {
    //     scores: score
    // }
    // var scoreList = JSON.parse(localStorage.getItem("scoreInput"))
    // var scoreInputsToStore
    // if(!scoreList) {
    //     scoreInputsToStore = [answerSubmission];
    // } else {
    //     scoreList.push(answerSubmission);
    //     scoreInputsToStore = scoreList;
    // }
    // localStorage.setItem("scoreInputs", JSON.stringify(scoreInputsToStore));

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
    // TODO: Set new submission to local storage 
    localStorage.setItem("highScoreInputs", JSON.stringify(highScoreInputsToStore));
    renderMessage();
});
function renderMessage() {
    // var scoreList = JSON.parse(localStorage.getItem('scoreInputs'));
    // if (scoreList) {
    //     var players = scoreList.map(function(score) {
    //         var scores = score.scores
    //         return `<li> ${scores} <li>`
    //     }).join("");
    //     var leaderboardOl = document.querySelector("#leaderboard > ol")
    //     leaderboardOl.innerHTML = players;
    // }

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