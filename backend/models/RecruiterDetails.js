const mongoose = require('mongoose');

const recruiterDetailsSchema = new mongoose.Schema({
    officeName: { type: String, required: true },         // Updated to camelCase for consistency
    overallEmployees: { type: Number, required: true },    // Updated to camelCase
    gstNo: { type: String, required: true },               // Changed to String for GST No to accommodate formats
    overallProjects: { type: String, required: true },     // Updated to camelCase
    address: { type: String, required: true },             // Updated to camelCase
    contactNumber: { type: String, required: true },       // Updated to camelCase
});

const RecruiterDetails = mongoose.model('RecruiterDetails', recruiterDetailsSchema);

module.exports = RecruiterDetails;
