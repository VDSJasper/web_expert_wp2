const userService = require('../services/userService');

module.exports.getAllUsers = async function (req, res, next) {
    try
    {
        const status = 200;
        const tasks = await userService.getAllUsers()
    } catch (err) {
        next(err);
    }
}