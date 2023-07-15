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

app.listen(port, () => {
  console.log("Sever listening on port ${port}");
});
