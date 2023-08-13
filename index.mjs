import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.send("<h1>Hello, from express. Work hard. Otherwise life will fuck you hard. Workflows directory added.</h1>");
});

app.listen(3000, () => {
  console.log("Express server is listening on port 3000");
});
