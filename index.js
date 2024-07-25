require('dotenv').config()
const compression = require("compression");
const { default: helmet } = require("helmet");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000
const REDIRECT_LINK = process.env.REDIRECT_LINK || 'http://www.youtube.com/watch?v=dQw4w9WgXcQ'

app.use(compression())
app.use(helmet())

app.get("/", (req, res) => {
  res.redirect(REDIRECT_LINK);
});

app.listen(PORT, () => {
  console.log(`Server start with port ${PORT}`);
})