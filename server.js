const express = require("express");
const app = express();

app.use(express.static("website"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("listening to port ", PORT, "..."));
