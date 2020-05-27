import Keyboard from "simple-keyboard";
import autocorrect from "simple-keyboard-autocorrect";

// CSS
import "simple-keyboard/build/css/index.css";

let wordList = ["pizza"];

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  autocorrectDict: wordList,
  autocorrectHotkey: "{space}",
  modules: [autocorrect]
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
