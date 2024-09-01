const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      dueDate: {
        type: Date
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

//Export the model
module.exports = mongoose.model('Todo', userSchema);