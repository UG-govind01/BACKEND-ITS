const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    sub: {
        type: String,
        enum: ['it', 'os', 'js']
    },

    age: {
        type: Number,
        required: true
    },

    phoneNo: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String
    }
});
console.log("this is student file");

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;