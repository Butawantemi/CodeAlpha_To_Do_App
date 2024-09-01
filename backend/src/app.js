const express = require('express');
const { dbConnect } = require('./config/dbConnect');
const app = express();
port = process.env.PORT || 3000;
require('dotenv/config');

// Database connection
dbConnect();

//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})