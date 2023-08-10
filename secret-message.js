const secretMessage = [
  "Programming",
  "is",
  "not",
  "about",
  "what",
  "you",
  "know,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "to",
  "Program",
];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage[secretMessage.indexOf("easily")] = "right";

secretMessage.shift();

secretMessage.unshift("Programming");

secretMessage.splice(secretMessage.indexOf("get"), 5, "know");

console.log(secretMessage.join(" "));
