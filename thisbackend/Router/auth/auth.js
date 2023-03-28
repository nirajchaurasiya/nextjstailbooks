const Router = require('express').Router();
const userSchema = require('../../Schema/userSchema')
const bcrypt = require('bcrypt')
const CoverImage = require('../../imagecontroller/CoverImage');

Router.post('/register', CoverImage.single('profile'), async (req, res) => {
    try {
        const existingUser = await userSchema.findOne({ email: req.body.email });
        console.log(req.body)
        if (existingUser) {
            res.send({ msg: 'User with this email already exists' });
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
            res.status(200).json({ msg: "User created successfully" })
        }
    } catch (error) {
        res.send({ msg: error });
    }
});


Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isEmailExist = await userSchema.findOne({ email: email });
        if (isEmailExist) {
            const isPasswordSame = await bcrypt.compare(password, isEmailExist.password);
            if (isPasswordSame) {
                res.status(200).json({ "code": "1", "user": isEmailExist });
            }
            else {
                res.status(503).json('Invalid Credentials')
            }
        }
        else {
            res.status(503).json("Invalid Credentials")
        }
    } catch (error) {
        res.send("An unexpected error occured")
    }
})


module.exports = Router;