const server = require('express')
const app = server();
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
require('./connect/connect')
const PORT = process.env.PORT
const auth = require('./Router/auth/auth')
const posts = require('./Router/posts/posts')
const user = require('./Router/user/user');
const path = require('path');
app.use(server.static('/images'))
app.use("/images", server.static(path.join(__dirname, "/images")))
app.use(bodyParser.json())
app.use(server.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"));
const corsOptions = {
    origin: 'http://localhost:3000'
    // origin: 'https://main--tailbooks.netlify.app'
};
app.use(cors(corsOptions))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api/auth', auth);
app.use('/api/posts', posts);
app.use('/api/user', user);





app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})