
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Blog = require("../models/Blog");


router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(users => {
         if(!users) 
         {res.status(404).send("Invalid Id");        
    } 
        res.status(200).json(users);

    });
});

router.post('/', (req, res) => {
    let user = new User (req.body)
    user
        .save()
        .then(users => {
            res.status(201).json(users);
        });
});

router.put('/:id', (req, res) => {
    User
        .findByIdAndUpdate(req.params.id,req.body)
        .then(users => {
            res.status(204).json(users);
        });
});

router.delete('/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(users => {
            res.status(200).send(users);
        });
});


module.exports = router;