const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  post: {
    type: String,
    enum: ['engineer', 'devloper', 'game', 'app','software']
  },

  salry: {
    type: Number,
    required: true
  },

  phoneNO: {
    type: Number
  },

  email: {
    type: String
  }
});

console.log('this is emp file hello js ');

const emp = mongoose.model('emp', empSchema);

module.exports = emp;