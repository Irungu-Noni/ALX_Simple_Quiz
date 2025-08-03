document.addEventListener("DOMContentLoaded", function() {

function checkAnswer() {
    const correctAnswer = "4";

    const selectedRadio = document.querySelector("input[name='quiz']:checked");

    const userAnswer = selectedRadio ? selectedRadio.value : null;

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!.";
    } 
}
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});