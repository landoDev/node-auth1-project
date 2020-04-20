const express = require('express');
const Users = require('./user-model')
const router = express.Router;

router.get('/users', (req, res) =>{
    Users.find()
    .then(users =>{
        if(users){
            res.status(200).json(users)
        } else {
            res.status(404).json({ message: 'No Data' })
        }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: 'Could not find users'})
    })
})

module.exports = router;