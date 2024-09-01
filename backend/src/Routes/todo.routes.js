const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todo.controllers');


// Create a new Todo.
router.post('/', todoController.createTodo);

//Get all Todos.
router.get('/', todoController.getTodos);

// Get a single Todo.
router.get('/:id', todoController.getTodo);

// Update a Todo.
router.put('/:id', todoController.updateTodo);

// Delete a Todo.
router.delete('/id', todoController.deleteTodo);

module.e