const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todo.controllers');


// Create a new Todo.
router.post('/', todoController.createTodo);

//