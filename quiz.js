const questionOneItems = document.querySelectorAll("#questionOne > ul >li");
const questionTwoItems = document.querySelectorAll("#questionTwo > ul >li");
const questionThreeItems = document.querySelectorAll("#questionThree > ul >li");
const questionFourItems = document.querySelectorAll("#questionFour > ul >li");
const questionFiveItems = document.querySelectorAll("#questionFive > ul >li");
const motionState = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("load", (event) => {
  questionOneItems.forEach((item) => {
    item.addEventListener("click", toQuestionTwo);
  });

  questionTwoItems.forEach((item) => {
    item.addEventListener("click", toQuestionThree);
  });

  questionThreeItems.forEach((item) => {
    item.addEventListener("click", toQuestionFour);
  });

  questionFourItems.forEach((item) => {
    item.addEventListener("click", toQuestionFive);
  });
});

$("#quiz-form").submit(function () {
return false;  
function getCharacter();
});

function respectMotionPreference(e) {
  if (motionState.matches === true) {
    e.scrollIntoView({ block: "start" });
  } else {
    e.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toQuestionTwo() {
  respectMotionPreference(document.querySelector("#questionTwo"));
}

function toQuestionThree() {
  respectMotionPreference(document.querySelector("#questionThree"));
}

function toQuestionFour() {
  respectMotionPreference(document.querySelector("#questionFour"));
}

function toQuestionFive() {
  respectMotionPreference(document.querySelector("#questionFive"));
}

function getCharacter() {
  respectMotionPreference(document.querySelector("#results"));
  fadeOut(document.querySelector("#submit"));
  fadeIn(document.querySelector(".loading-wrapper"));

  const handleError = (response) => {
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    } else {
      return response.json();
    }
  };

  const answerOne = Number(
    document.querySelector('input[name="one"]:checked').value
  );
  const answerTwo = Number(
    document.querySelector('input[name="two"]:checked').value
  );
  const answerThree = Number(
    document.querySelector('input[name="three"]:checked').value
  );
  const answerFour = Number(
    document.querySelector('input[name="four"]:checked').value
  );
  const answerFive = Number(
    document.querySelector('input[name="five"]:checked').value
  );  

  fetch("https://unoalgot.autocode.dev/cofactor@dev/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
    }),
  })
    .then(handleError)
    .then((data) => {
      console.log(data);
      document.querySelector("#resultName").innerText = data.fields.resultName;
      document.querySelector("#resultDescription").innerText =
        data.fields.resultDescription;
      document.querySelector("#resultImage").src = data.fields.resultImage;
    })
    .catch(function writeError(err) {
      console.log(err);
    })
    .finally(() => {
      fadeOut(document.querySelector(".loading-wrapper"));
      fadeIn(document.querySelector(".results-wrapper"));
      respectMotionPreference(document.querySelector("#results"));
      document.querySelector(".results-wrapper").setAttribute("tabindex", "-1");
      document.querySelector



