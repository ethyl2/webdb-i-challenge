const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('accounts')
        .then(response => {
            console.log(response);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err, message: "There was an error while retrieving the accounts"});
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db('accounts').where({id: id}).first()
        .then(response => {
            console.log(response);
            if (response) {
                res.status(200).json(response);
            } else {
                res.status(500).json({message: `There was an error while retrieving the account with id ${id}`})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err, message: `There was an error while retrieving the account with id ${id}`});
        });
});

module.exports = router;