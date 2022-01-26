var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector(".submit-btn");
var score = localStorage.getItem("correctA");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

var submission = {
    initials: initialsInput.value,
  }

  // TODO: Set new submission to local storage 
  localStorage.setItem("submissionForm", JSON.stringify(submission));
  renderMessage();
});
function renderMessage() {
  var lastSubmissionForm = JSON.parse(localStorage.getItem("submissionForm", score));
  if (lastSubmissionForm !== null) {
    var results = document.body.li.createElement("li");
    document.body.appendChild(results);
    results.textContent = lastSubmissionForm.initials + ": " + score;                                        
  }
};