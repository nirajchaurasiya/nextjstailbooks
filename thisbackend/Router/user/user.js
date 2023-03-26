const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.status(200).json("Good")
})


module.exports = Router