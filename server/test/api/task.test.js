const request = require('supertest')
const express = require('express')
const {usersIncludingPasswords} = require("../functional/data");

const app = express();

app.get('/tasks', function (req, res) {
    res.status(200).json(usersIncludingPasswords);
});