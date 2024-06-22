const express = require("express");
const app = express();//express のインスタンス
const port = 3001; // listenするport番号

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
