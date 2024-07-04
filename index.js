const express = require("express");
const { urlRouter } = require("./routes/url");
const { connectionToDb } = require("./connection");
const path = require("path");
const { router } = require("./routes/staticRouter");

connectionToDb();

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/url", urlRouter);
app.use("/", router);

app.listen(PORT, () => console.log("The Server has started on port : 8000"));
