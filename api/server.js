const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session')
const userRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router');
const heimdall = require('../auth/heimdall');

const server = express();

//session configuration
// added .env for later if I wanna tool around
const sessionConfig = {
    name: 'fury',
    secret: process.env.SESSION_SECRET || 'CONFIDENTIAL',
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true, 
    cookie: {
        maxAge: 1000 * 60 * 5, // good for 5 mins
        secure: process.env.USE_SECURE_COOKIES || false,
        httpOnly: true
    }
}

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api/auth/", authRouter);
server.use("/api/users", heimdall, userRouter); // if this breaks its prob the middleware

server.get("/api", (req, res) =>{
    res.send(`<h1>Auth Project API</h1>`)
})

module.exports = server;