const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student");

const app = express();

app.use(express.json());

//register the Router
app.use(studentRouter);

//listening to the server

app.listen(80 , () => {
    console.log("App started at Port 80");
});
