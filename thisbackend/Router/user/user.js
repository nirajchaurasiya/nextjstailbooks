const userSchema = require('../../Schema/userSchema');

const Router = require('express').Router();

Router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const isUserFind = await userSchema.findById(userId);
        if (isUserFind) {
            res.send({ code: 1, user: isUserFind })
        }
        else {
            res.send({ code: 0 })
        }
    } catch (error) {
        res.send({ code: 2 })
    }
})


module.exports = Router