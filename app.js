// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
});
