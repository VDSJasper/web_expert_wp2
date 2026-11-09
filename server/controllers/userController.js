const userService = require('../services/userService');

module.exports.getAllUsers = async function (req, res, next) {
    try
    {
        const status = 200;
        const tasks = await userService.getAllUsers()
        res.status(status).json(tasks);
    } catch (err) {
        next(err);
    }
}