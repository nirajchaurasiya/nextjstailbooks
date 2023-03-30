const Router = require('express').Router();

const postSchema = require('../../Schema/postSchema');
const postImg = require('../../imagecontroller/postImage')
Router.post('/', postImg.single('postImage'), async (req, res) => {
    try {
        const file = req.file.path
        await postSchema.create({
            desc: req.body.desc,
            userId: req.body.userId,
            userImage: req.body.userImage,
            name: req.body.name,
            postImage: file
        })
        res.send({ "status": "1", "msg": "Uploaded Success" })
    } catch (error) {
        res.send({ "status": "0", "msg": "Error in uploading posts" });
    }
})

Router.get('/allposts', async (req, res) => {
    try {
        const allposts = await postSchema.find()
        res.send({ "status": "1", "msg": allposts })
    } catch (error) {
        res.send({ "status": "0", "msg": "Error in uploading posts" });
    }
})

// Post of a specific user

Router.get('/allposts/:id', async (req, res) => {
    try {
        const findAllPosts = await postSchema.find({ userId: req.params.id })
        res.send({ "status": "1", "msg": findAllPosts })
    } catch (error) {

    }
})
// Like a post

Router.put('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const isPostExist = await postSchema.findById(postId);
        if (isPostExist) {
            await postSchema.findByIdAndUpdate(postId, { $addToSet: { likes: req.body.userId } })
            res.send("Updated")
        }
        else {
            res.send("Wrong Id")
        }

    } catch (error) {
        console.log(error)
    }
})


module.exports = Router