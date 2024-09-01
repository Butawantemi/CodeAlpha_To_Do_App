const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./config/dbConnect');
const  todoRoutes = require('./Routes/todo.routes');
const app = express();
port = process.env.PORT || 3000;
require('dotenv/config');

// Database connection
dbConnect();

//middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})