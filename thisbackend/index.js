const server = require('express')
const app = server();
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
require('./connect/connect')
const uploadProfileImage = require('./imagecontroller/ProfileImageController')
const CoverImage = require('./imagecontroller/CoverImage')
const PORT = process.env.PORT
const auth = require('./Router/auth/auth')
const posts = require('./Router/posts/posts')
const user = require('./Router/user/user')
app.use(server.static('images'))
app.use(bodyParser.json())
app.use(server.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"));
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/post/profile/image', uploadProfileImage.single('profile'), async (req, res) => {
    try {
        res.status(200).json("Image uploaded successfuk")
    } catch (error) {
        res.status(500).json("An unexpected error occured")
    }
})

app.post('/post/cover/image', CoverImage.single('profile'), async (req, res) => {
    try {
        res.status(200).json("Image uploaded successfuk")
    } catch (error) {
        res.status(500).json("An unexpected error occured")
    }
})


app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/posts', posts);






app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})