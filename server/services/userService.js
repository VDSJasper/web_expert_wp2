const mongoose = require('mongoose');
const User = require('../models/userModel');

async function getAllUsers() {
    return await User.find();
}