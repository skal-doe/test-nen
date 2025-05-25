import nenTypes from "./data/nen-types.js";
import questions from "./data/questions.js";

let currentQuestion = 0;
let answers = {};
let scores = {
  Renforcement: 0,
  Émission: 0,
  Manipulation: 0,
  Transmutation: 0,
  Matérialisation: 0,
  Spécialisation: 0,
};

function loadQuestion() {
  const quiz = document.getElementById("quiz");
  const question = questions[currentQuestion];

  quiz.innerHTML = `
        <div class="question-container">
            <div class="question">
                <h3>Question ${currentQuestion + 1}/${questions.length}</h3>
                <p>${question.question}</p>
                <p style="font-size: 0.9em; color: #666; margin-top: 10px;"><em>Choisissez 1 ou 2 réponses maximum</em></p>
            </div>
            <div class="options">
                ${question.options
                  .map(
                    (option, index) => `
                    <label class="option" for="q${currentQuestion}_${index}">
                        <input type="checkbox" id="q${currentQuestion}_${index}" name="q${currentQuestion}" value="${option.type}">
                        ${option.text}
                    </label>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  // Add event listeners
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const checkedBoxes = document.querySelectorAll(
        `input[name="q${currentQuestion}"]:checked`
      );

      // Limit to 2 selections
      if (checkedBoxes.length > 2) {
        this.checked = false;
        return;
      }

      // Update visual feedback
      document
        .querySelectorAll(".option")
        .forEach((opt) => opt.classList.remove("selected"));
      checkedBoxes.forEach((box) =>
        box.parentElement.classList.add("selected")
      );

      // Store answers
      answers[currentQuestion] = Array.from(checkedBoxes).map(
        (box) => box.value
      );

      // Enable next button if at least one option is selected
      document.getElementById("nextBtn").disabled = checkedBoxes.length === 0;
    });
  });

  updateProgress();
}

function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
    document.getElementById("nextBtn").disabled = true;
  } else {
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("resultBtn").classList.remove("hidden");
    document.getElementById("progressBar").style.width = "100%";
  }
}

function calculateResult() {
  // Reset scores
  Object.keys(scores).forEach((key) => (scores[key] = 0));

  // Calculate scores
  Object.values(answers).forEach((answerArray) => {
    answerArray.forEach((answer) => {
      scores[answer]++;
    });
  });

  // Find the highest score
  let maxScore = 0;
  let resultType = "";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  return resultType;
}

function showResult() {
  const resultType = calculateResult();
  const result = nenTypes[resultType];

  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultBtn").style.display = "none";

  document.getElementById(
    "resultType"
  ).textContent = `Votre type de Nen : ${resultType}`;
  document.getElementById("resultDescription").innerHTML = `
        <h4>Description de votre personnalité :</h4>
        <p>${result.description}</p>
        <br>
        <h4>Traits de personnalité dominants :</h4>
        <p><em>${result.personality}</em></p>
        <br>
        <p><strong>${result.characters}</strong></p>
    `;
  document.getElementById("nenAbilities").innerHTML = `
        <h4>Capacités typiques :</h4>
        <pre style="white-space: pre-line; font-family: Arial, sans-serif;">${result.abilities}</pre>
    `;

  document.getElementById("result").style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  answers = {};
  scores = {
    Renforcement: 0,
    Émission: 0,
    Manipulation: 0,
    Transmutation: 0,
    Matérialisation: 0,
    Spécialisation: 0,
  };

  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("resultBtn").classList.add("hidden");

  loadQuestion();
}

// Initialize the quiz
loadQuestion();

document.querySelector("#nextBtn").addEventListener("click", nextQuestion);
document.querySelector("#resultBtn").addEventListener("click", showResult);
document.querySelector("#restartQuiz").addEventListener("click", restartQuiz);
