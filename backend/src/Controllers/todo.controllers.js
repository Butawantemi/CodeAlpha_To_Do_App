const Todo = require('../Models/todo.model')
const asnycHandler = require('express-async-handler');

// Create or add a new Todo.
exports.createTodo = asnycHandler(async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
    }
    catch {
        res.status(400);
        throw new Error('Invalid data');
    }
})

// Get all Todos.
exports.getTodos = asnycHandler (async (req, res) => {
    const todos = await Todo.find({});
    res.status(200).json(todos);

})

// Get a single Todo.
exports.getTodo = asnycHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
       res.status(404);
       throw new Error('Todo not found');
    }
})

// Update a Todo.
exports.updateTodo = asnycHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(404);
        throw new Error('Todo not found');
    }
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;

    await todo.save();
    res.status(200).json(todo);
})

// Delete a Todo.
exports.deleteTodo = asnycHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(404);
        throw new Error('Todo not found');
    }
    await todo.remove();
    res.status(200).json({ message : 'Todo removed' });
})

