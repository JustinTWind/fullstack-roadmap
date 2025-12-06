/*

  114. Check String as Correct Sentence

    Write a JavaScript program to check whether a given string represents a correct sentence or not.
    A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 


*/

function checkCorrectSentence(givenString) {
  return givenString.at(-1) === "." && /[A-Z]/.test(givenString[0]);
}

console.log(
  checkCorrectSentence(
    "This tool will help you write better English and efficiently corrects texts."
  )
);

console.log(
  checkCorrectSentence(
    "this tool will help you write better English and efficiently corrects texts."
  )
);

console.log(
  checkCorrectSentence(
    "This tool will help you write better English and efficiently corrects texts"
  )
);
