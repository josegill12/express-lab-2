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

app.listen(port, () => {
  console.log("Sever listening on port ${port}");
});
