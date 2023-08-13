import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.send("<h1>Hello, from express.</h1>");
});

app.listen(3000, () => {
  console.log("Express server is listening on port 3000");
});
