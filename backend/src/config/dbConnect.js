const mongoose = require('mongoose');
require('dotenv/config');


const dbConnect = () => {
    mongoose.connect(process.env.DB_URI, )
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', {message: err.message});
    })
}

module.exports = { dbConnect };
