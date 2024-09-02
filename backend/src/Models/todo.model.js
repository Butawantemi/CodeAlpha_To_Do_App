const mongoose = require('mongoose'); 

// Define the Schema for the Todo model
const todoSchema = new mongoose.Schema({
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
  startDate: {
    type: Date,
    required: true 
  },
  endDate: {
    type: Date,
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the model
module.exports = mongoose.model('Todo', todoSchema);
