const express = require("express");
const cors = require("cors");
var path = require("path");
var public = path.join(__dirname, "public");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(public));
app.listen(port, () => console.log(`listening to port : ${port}`));
