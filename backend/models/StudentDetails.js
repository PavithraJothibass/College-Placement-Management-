const mongoose = require('mongoose');

const studentDetailsSchema = new mongoose.Schema({
    schoolName: { type: String, required: true },
    marks10: { type: Number, required: true },
    marks12: { type: Number, required: true },
    collegeName: { type: String, required: true },
    department: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    cgpa: { type: String, required: true },
    extracurricular: [{ type: String }],
});

const StudentDetails = mongoose.model('StudentDetails', studentDetailsSchema);

module.exports = StudentDetails;
