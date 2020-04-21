const express = require('express');
const Users = require('./user-model')
const router = express.Router();

router.get('/', (req, res) =>{
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: 'Could not find users'})
    })
})

module.exports = router;