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

});

module.exports = router;