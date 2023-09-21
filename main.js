// Universarl Constants
const quizQuestions = [
  {
    question:
      "Which HTML5 element should contain important links for navigating a website?",
    id: 1,
    topic: "html",
    choices: {
      a: "<li>",
      b: "<ul>",
      c: "<header>",
      d: "<nav>",
    },
    answer: "d",
  },
  {
    question:
      "Which HTML5 element should contain important information about what page you are on and the topic of the page?",
    id: 2,
    topic: "html",
    choices: {
      a: "<li>",
      b: "<ul>",
      c: "<header>",
      d: "<nav>",
    },
    answer: "c",
  },
  {
    question:
      "Which JavaScript variable declaration is used when the assigned value is likely to change?",
    id: 3,
    topic: "javascript",
    choices: {
      a: "let",
      b: "var",
      c: "variable",
      d: "const",
    },
    answer: "a",
  },
  {
    question:
      "Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?",
    id: 4,
    topic: "javascript",
    choices: {
      a: "null",
      b: "undefined",
      c: "typeError",
      d: "NaN",
    },
    answer: "b",
  },
  {
    question:
      "Which selector could refer to an html element with the class of 'sm-col'?",
    id: 5,
    topic: "css",
    choices: {
      a: "#sm-col",
      b: ".sm, .col",
      c: "[class~=col]",
      d: ".sm_col",
    },
    answer: "c",
  },
  {
    question:
      "Setting an element height to '10vh' bases the height calculation on _________",
    id: 6,
    topic: "css",
    choices: {
      a: "viewfinder height",
      b: "viewport width",
      c: "visible height",
      d: "viewport height",
    },
    answer: "d",
  },
  {
    question: "Which HTML5 property can be used for custom data?",
    id: 7,
    topic: "html",
    choices: {
      a: "data-",
      b: "-data-",
      c: "data=",
      d: "custom",
    },
    answer: "a",
  },
  {
    question:
      "Which HTML5 tag is used to define 'independant, self-contained content' within a web page?",
    id: 8,
    topic: "html",
    choices: {
      a: "<section>",
      b: "<main>",
      c: "<aside>",
      d: "<article>",
    },
    answer: "d",
  },
  {
    question:
      "Which of the following snippets does not result in a return value of 8?",
    id: 9,
    topic: "javascript",
    choices: {
      a: "8**1",
      b: "Math.pow(16, .75)",
      c: "2 * 2 * 'two'",
      d: "2**+'3'",
    },
    answer: "c",
  },
  {
    question:
      "Which of these statements is NOT true of browser-side JavaScript?",
    id: 10,
    topic: "javascript",
    choices: {
      a: "JavaScript can be used for functional programming.",
      b: "JavaScript can be used for file reading and writing on client machines.",
      c: "JavaScript does not require frameworks or libraries to be used.",
      d: "Though not class-based, JavaScript is an Object-Oriented Programming Language.",
    },
    answer: "b",
  },
];

// DOM loader
document.addEventListener("DOMContentLoaded", function () {
  //  DOM constants
  let currentQuestionIndex = 0;
  const questionNumberElement = document.getElementById("questionNumber");
  const questionElement = document.getElementById("question");
  const choice1Element = document.getElementById("choice1");
  const choice2Element = document.getElementById("choice2");
  const choice3Element = document.getElementById("choice3");
  const choice4Element = document.getElementById("choice4");
  const nextButtonElement = document.getElementById("nextButton");
  let userAnswer = [];

  // DOM updates
  function updateQuestion() {
    questionNumberElement.textContent =
      "Question " + (currentQuestionIndex + 1) + "/" + quizQuestions.length;

    questionElement.textContent = quizQuestions[currentQuestionIndex].question;

    choice1Element.textContent = quizQuestions[currentQuestionIndex].choices.a;
    choice2Element.textContent = quizQuestions[currentQuestionIndex].choices.b;
    choice3Element.textContent = quizQuestions[currentQuestionIndex].choices.c;
    choice4Element.textContent = quizQuestions[currentQuestionIndex].choices.d;
  }
  updateQuestion();
  // adding event listeners and functions for buttons
  nextButtonElement.style.display = "none";

  function showNextButton(event) {
    nextButtonElement.style.display = "block";

    choice1Element.disabled = true;
    choice2Element.disabled = true;
    choice3Element.disabled = true;
    choice4Element.disabled = true;

    event.target.disabled = false;

    userAnswer[currentQuestionIndex] = event.target.value;
  }

  choice1Element.addEventListener("click", showNextButton);
  choice2Element.addEventListener("click", showNextButton);
  choice3Element.addEventListener("click", showNextButton);
  choice4Element.addEventListener("click", showNextButton);

  nextButtonElement.addEventListener("click", function () {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      updateQuestion();

      choice1Element.disabled = false;
      choice2Element.disabled = false;
      choice3Element.disabled = false;
      choice4Element.disabled = false;

      nextButtonElement.style.display = "none";
    } else {
      questionElement.textContent = "Nice, you finished the Quiz!";
      choice1Element.style.display = "none";
      choice2Element.style.display = "none";
      choice3Element.style.display = "none";
      choice4Element.style.display = "none";
      nextButtonElement.style.display = "none";

      let score = 0;
      for (let i = 0; i < quizQuestions.length; i++) {
        if (userAnswer[i] === quizQuestions[i].answer) {
          score++;
        }
      }
      questionElement.textContent += " " + "You got: " + score;

      nextButtonElement.textContent = "Retry?";
      nextButtonElement.style.display = "block";
      nextButtonElement.addEventListener("click", function () {
        location.reload();
      });
    }
  });
});
