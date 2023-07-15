const express = require("express");
const app = express();
const port = 3000;

const greeting = "Hello";

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  let greeting;

  if (name === "stranger") {
    greeting = "Hello, stranger";
  } else {
    greeting = "Wow! Hello there, ${name}!";
  }
  res.send(greeting);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);

  if (isNaN(total) || isNaN(tipPercentage)) {
    res.status(400).send("Invalid parameters");
    return;
  }

  const tipAmount = (total * tipPercentage) / 100;
  res.send(tipAmount.toString());
});

const magic8BallResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question.replace(/%20/g, " ");
  const randomResponse =
    magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];

  const responseHTML = `<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`;

  res.send(responseHTML);
});

app.listen(port, () => {
  console.log("Sever listening on port ${port}");
});
