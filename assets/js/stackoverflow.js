const questionInput = document.getElementById("questionInput");
const postQuestion = document.getElementById("postQuestion");
const answersSection = document.getElementById("answersSection");

postQuestion.addEventListener("click", () => {
  if (questionInput.value.trim() !== "") {
    const question = document.createElement("div");
    question.className = "question";
    question.innerHTML = <h3>${questionInput.value.trim()}</h3>;
    answersSection.appendChild(question);
    questionInput.value = "";

    const answerInput = document.createElement("textarea");
    answerInput.className = "answerInput";
    answerInput.placeholder = "Write your answer here...";
    answerInput.rows = 5;
    question.appendChild(answerInput);

    const answerButton = document.createElement("button");
    answerButton.textContent = "Post Answer";
    answerButton.addEventListener("click", () => {
      if (answerInput.value.trim() !== "") {
        const answer = document.createElement("div");
        answer.className = "answer";
        answer.textContent = answerInput.value.trim();
        question.appendChild(answer);
        answerInput.value = "";
      }
    });
    question.appendChild(answerButton);
  }
});
