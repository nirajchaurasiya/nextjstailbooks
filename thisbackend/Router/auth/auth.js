const Router = require('express').Router();
const userSchema = require('../../Schema/userSchema')
const bcrypt = require('bcrypt')
const CoverImageAndAllData = require('../../imagecontroller/CoverImage');

Router.post('/register', CoverImageAndAllData.single('profile'), async (req, res) => {
    try {
        const existingUser = await userSchema.findOne({ email: req.body.email });
        // console.log(req.body)
        if (existingUser) {
            res.send({ code: 2, msg: 'User with this email already exists' });
        }

        else {
            const file = req.file.path
            await userSchema.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                shortquote: req.body.shortquote,
                aboutyourself: req.body.aboutyourself,
                from: req.body.from,
                city: req.body.city,
                hobbies: req.body.hobbies,
                status: req.body.status,
                cover: '',
                profile: file
            });
            res.status(200).json({ code: 1, msg: "User created successfully" })
        }
    } catch (error) {
        res.send({ code: 0, msg: error });
    }
});


Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isEmailExist = await userSchema.findOne({ email: email });
        if (isEmailExist) {
            const isPasswordSame = await bcrypt.compare(password, isEmailExist.password);
            if (isPasswordSame) {
                res.send({ "code": "1", "user": isEmailExist });
            }
            else {
                res.send({ "code": "0", "msg": 'Invalid Credentials' })
            }
        }
        else {
            res.send({ "code": "0", "msg": 'Invalid Credentials' })
        }
    } catch (error) {
        res.send("An unexpected error occured")
    }
})

Router.post('/updateCover/:userId', CoverImageAndAllData.single('cover'), async (req, res) => {
    try {
        const { userId } = req.params;
        const file = req.file.path;
        const findTheUser = await userSchema.findById(userId)
        if (findTheUser) {
            await userSchema.findByIdAndUpdate(userId, { $set: { cover: file } });
            const findTheUpdatedUser = await userSchema.findById(userId)
            // res.send(findTheUpdatedUser)
            res.send({ "status": "1", "msg": findTheUpdatedUser });
            // res.send({ "status": "1", "msg": 'Your cover picture has been updated successfully' });

        }
        else {
            res.send({ "status": "0", "msg": 'You can update cover to only your account' });
        }
    } catch (error) {
        res.send({ "status": "0", "msg": 'Upload Failed' })
    }
})

Router.post('/updateProfile/:userId', CoverImageAndAllData.single('cover'), async (req, res) => {
    try {
        const { userId } = req.params;
        const file = req.file.path;
        const findTheUser = await userSchema.findById(userId)
        if (findTheUser) {
            await userSchema.findByIdAndUpdate(userId, { $set: { profile: file } });
            const findTheUpdatedUser = await userSchema.findById(userId)
            res.send({ "status": "1", "msg": findTheUpdatedUser });
        }
        else {
            res.send({ "status": "0", "msg": 'You can update profile to only your account' });
        }
    } catch (error) {
        res.send({ "status": "0", "msg": 'Upload Failed' })
    }
})


module.exports = Router;