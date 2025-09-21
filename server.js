const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const quotes = require("./quotes.json");

dotenv.config();
const app = express();
app.use(cors());

app.get("/api/random-quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Backend running at http://${HOST}:${PORT}`);
});
