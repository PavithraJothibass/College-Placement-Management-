const mongoose = require('mongoose');
const Role = require('./models/Role');
const dotenv = require('dotenv');

dotenv.config();
const roles = [
    { name: 'Admin', image: '/Admin.png' },
    { name: 'Student', image: '/Student.png' },
    { name: 'Recruiter', image: '/Recruiters.png' },
];


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
        await Role.deleteMany({});
        await Role.insertMany(roles);
        console.log('Roles seeded');
        mongoose.disconnect();
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

connectDB();
