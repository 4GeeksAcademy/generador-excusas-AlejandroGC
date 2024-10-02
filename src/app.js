import "./styles.css";

function searchExcuse() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];

  let who_index = Math.floor(Math.random() * who.length);
  let action_index = Math.floor(Math.random() * action.length);
  let what_index = Math.floor(Math.random() * what.length);
  let when_index = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[who_index] + action[action_index] + what[what_index] + when[when_index];
}

document.body.onload = searchExcuse;

const newExcuse = document.getElementById("new-excuse");
newExcuse.onclick = searchExcuse;
