const express=require("express");
const {urlRouter}=require("./routes/url");
const {connectionToDb} =require("./connection");

connectionToDb();

const app=express();
const PORT=8000;

app.use(express.json());


app.use("/url",urlRouter);

app.listen(PORT,()=>console.log("The Server has started on port : 8000"));