const Todo = require('../Models/todo.model')
const asnycHandler = require('express-async-handler');

// Create or add a new Todo.
exports.createTodo = asnycHandler(async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
})

// G

