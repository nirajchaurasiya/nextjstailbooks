const Router = require('express').Router();

const postSchema = require('../../Schema/postSchema');

Router.post('/', async (req, res) => {
    try {
        await postSchema.create(req.body);
        res.send("Posts created successfully");
    } catch (error) {
        res.send("Error in uploading posts");
    }
})


module.exports = Router