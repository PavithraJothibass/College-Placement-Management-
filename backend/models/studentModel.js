const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
