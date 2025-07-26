const task3Element = document.getElementById("task-3");

function alertRandomWords() {
  alert("LOL");
}

function alertProvidedWords(name) {
  alert(name);
}

let randomWords = "LOLOLOLOL";

alertRandomWords();
alertProvidedWords(randomWords);

task3Element.addEventListener("click", alertRandomWords);

function concatenateWords(word1, word2, word3) {
  let result = `${word1} ${word2} ${word3}`;
  alert(result);
}

let word1 = "one";
let word2 = "two";
let word3 = "three";

concatenateWords(word1, word2, word3);
