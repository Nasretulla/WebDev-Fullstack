import express from "express";
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello from other side!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
