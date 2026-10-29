const taskService = require("../services/taskService");

module.exports.getTasksOfUser = async function (req, res, next) {
    try {
        const status = 200;
        const {requestingUser} = req;
        const tasks = await taskService.findByUserId(requestingUser._id.toString());
        res.status(status).json(tasks);
    } catch (err) {
        next(err);
    }
};

module.exports.updateTaskCompletion = async function (req, res, next) {
    try {
        const status = 200;
        const {requestingUser} = req;
        const {taskId} = req.params;
        const {completed} = req.body;
        const task = await taskService.updateTask(taskId, requestingUser._id.toString(), {completed});
        res.status(status).json(task);
    } catch (err) {
        next(err);
    }
};

module.exports.getAllTasks = async function (req, res, next) {
    try
    {
        const status = 200;
        const tasks = await taskService.getAllTasks()
    } catch (err) {
        next(err);
    }
}

module.exports.giveUserTask = async function (req, res, next) {
    try {
        const status = 200;
        const taskId = req.params.taskId;
        const userId = req.params.userId;
        const {completed} = req.body;
        const task = await taskService.updateTask(taskId, userId, {completed})
        res.status(status).json(task);
    } catch (err) {
        next(err);
    }
}

