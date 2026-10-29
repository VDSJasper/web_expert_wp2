const request = require('supertest')
const express = require('express')
const {usersIncludingPasswords, tasks} = require('../functional/data')

const app = express();

// Should test cookies too

app.get('/users', function (req, res) {
    res.status(200).json(usersIncludingPasswords);
});

