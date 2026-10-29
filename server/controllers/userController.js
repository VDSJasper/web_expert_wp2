const userService = require('../services/userService');
const taskService = require("../services/taskService");

module.exports.getAllUsers = async function (req, res, next) {
    try
    {
        const status = 200;
        const {requestingUser} = req;
        const tasks = await userService.getAllUsers(requestingUser.roles)
    } catch (err) {
        next(err);
    }
}