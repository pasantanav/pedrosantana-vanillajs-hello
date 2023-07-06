/* eslint-disable */
import "./style.css";

function generate(size) {
  return Math.floor(Math.random() * size);
}

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  document.getElementById("excuse").innerHTML =
    who[generate(4)] +
    " " +
    action[generate(4)] +
    " " +
    what[generate(3)] +
    " " +
    when[generate(5)];
};
