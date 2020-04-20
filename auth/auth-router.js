const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');

router.post('/register', (req, res) =>{
    let user = req.body;

    // add rounds .env if time (matters in production)
    const lockdown = bcrypt.hashSync(user.password, 8);
    user.password = lockdown;

    Users.add(user)
    .then(registered =>{
        res.status(201).json(registered)
    })
    .catch(err => {
        res.status(500).json({ error: 'Couldn\'t register the user'})
    })
});

router.post('/login', (req, res) =>{
    const { username, password } = req.body;

    Users.findBy({ username })
    .then(user =>{
        if(user && bcrypt.compareSync(password, user[0].password)){
            res.status(200).json({ message: `Welcome, ${username}`});
        } else {
            res.status(401).status({ message: 'UNAUTHORIZED'});
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Couldn\'t login with user'})
    })
});

module.exports = router;