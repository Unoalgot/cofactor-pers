$("#quiz-form").submit(function () {
return false;
function getCharacter();
});

function getCharacter() {
  respectMotionPreference(document.querySelector("#results"));
  fadeOut(document.querySelector("#submit"));
  fadeIn(document.querySelector(".loading-wrapper"));
