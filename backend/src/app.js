const { config } = require('dotenv');
const express = require('express');
config()

const app = express();
port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})