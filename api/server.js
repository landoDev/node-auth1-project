const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth/", authRouter);
server.use("/api/users", userRouter);

server.get("/api", (req, res) =>{
    res.send(`<h1>Auth Project API</h1>`)
})

module.exports = server;