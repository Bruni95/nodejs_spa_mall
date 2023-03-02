const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const connect = require("./schemas");
connect();
const cartsRouter = require("./routes/carts");


app.use(express.json());
app.use("/api", [goodsRouter]);
app.use("/api", [goodsRouter, cartsRouter]);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.js

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

