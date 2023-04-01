const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect('mongodb+srv://localhost:mongodb1234@cluster0.c9pxkia.mongodb.net/facebook')
    .then((data) => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log("Some error occured while connecting to MongoDB")
    })
