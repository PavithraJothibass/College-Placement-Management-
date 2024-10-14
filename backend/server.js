const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
const studentRoutes = require('./routes/studentRoutes'); // Import student routes
const dotenv = require('dotenv');
const StudentDetails = require('./models/StudentDetails'); // Adjust the path if necessary
const recruiterRoutes = require('./routes/RecruiterRoutes'); // Import student routes
const Recruiter = require('./models/RecruiterModel'); // Ensure this is correct
const bcrypt = require('bcrypt'); // Make sure this is here
const adminRoutes = require('./routes/AdminRoutes'); // Adjust path as necessary
const Admin = require('./models/AdminModel'); // Adjust the path if necessary

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/roles', roleRoutes);
app.use('/api/students', studentRoutes); // Use student routes
app.use('/api/recruiters', recruiterRoutes); // Use student routes
app.use('/api/admin', adminRoutes); // Use admin routes

// Function to initialize the admin user
const initializeAdminUser = async () => {
    const adminUsername = 'pavithra'; // Desired username
    const adminPassword = 'pavi@14'; // Desired password

    try {
        const existingAdmin = await Admin.findOne({ username: adminUsername });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            const newAdmin = new Admin({
                username: adminUsername,
                password: hashedPassword,
            });
            await newAdmin.save();
            console.log('Admin user created successfully!');
        } else {
            console.log('Admin user already exists.');
        }
    } catch (error) {
        console.error('Error initializing admin user:', error.message);
    }
};

initializeAdminUser();

// Define the route for saving student details
app.post('/api/studentdetails', async (req, res) => {
    try {
        const { school, college, marks, extracurricular } = req.body;
        const newDetails = new StudentDetails({
            schoolName: school,
            marks10: marks.marks10,
            marks12: marks.marks12,
            collegeName: college,
            department: req.body.department,
            branch: req.body.branch,
            year: req.body.year,
            cgpa: req.body.cgpa,
            extracurricular: req.body.extracurricular,
        });

        await newDetails.save();
        res.status(201).json({ message: 'Student details saved successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Define routes after importing the model
app.post('/api/recruiter/recruiter_register', async (req, res) => {
    console.log('Request body:', req.body); // Log incoming request

    const { username, email, password, phoneNumber } = req.body;

    if (!username || !email || !password || !phoneNumber) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const existingRecruiter = await Recruiter.findOne({ username });
        if (existingRecruiter) {
            return res.status(400).json({ error: 'Username already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newRecruiter = new Recruiter({
            username,
            email,
            password: hashedPassword,
            phoneNumber,
        });

        await newRecruiter.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error saving recruiter:', error); // Log error
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post('/api/recruiterdetails', async (req, res) => {
    try {
        const { school, college, marks } = req.body;
        const newDetails = new StudentDetails({
            OfficeName: school,
            Overall_Employees: marks.marks10,
            GST_No: marks.marks12,
            Overall_projects: college,
            Address: req.body.department,
            contact_number: req.body.branch,
        });

        await newDetails.save();
        res.status(201).json({ message: 'Details saved successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
