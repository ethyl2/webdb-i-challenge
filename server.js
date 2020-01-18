const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the accounts API"});
});

server.get('/api/accounts', (req, res) => {
    db('accounts')
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = server;