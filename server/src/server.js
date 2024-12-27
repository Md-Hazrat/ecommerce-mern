const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.send("api testing is working fine");
});

app.listen(3002, () => {
  console.log(`Server is running at http://localhost:3002`);
});
