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
    }
})

// Update a Todo.
exports.updateTodo = async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedTodo) {
        return res.status(404).json({ message: 'To-Do not found' });
      }
      res.json(updatedTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Delete a Todo.
exports.deleteTodo = asnycHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(404);
    }
    await todo.remove();
    res.status(200).json({ message : 'Todo removed' });
})

