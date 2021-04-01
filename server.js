const express = require("express");
const app = express();
const path = require("path");

//MiddleWare
app.use(express.static(path.join(__dirname, "static")));

const avatar = require("./routes/avatar");

app.use("/avatar", avatar);

//PORT and Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Running on " + PORT));
