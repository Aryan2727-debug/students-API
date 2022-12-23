const mongoose = require("mongoose");

mongoose.set('strictQuery' , true);

//creating a new database and establishing a connection between Nodejs and Mongodb

mongoose.connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection successful!");
}).catch((err) => {
    console.log(err);
});