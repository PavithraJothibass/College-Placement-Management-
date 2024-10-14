import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Ensure you have styles for your components

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('students'); // State to manage active tab

    // Static student data
    const staticStudents = [
        {
            _id: '1',
            school: 'High School A',
            marks: { marks10: 85, marks12: 90 },
            college: 'College A',
            department: 'Computer Science',
            branch: 'Software Engineering',
            year: '2024',
            cgpa: 3.8,
            extracurricular: ['Debate Club', 'Football'],
        },
        {
            _id: '2',
            school: 'High School B',
            marks: { marks10: 78, marks12: 82 },
            college: 'College B',
            department: 'Mathematics',
            branch: 'Statistics',
            year: '2025',
            cgpa: 3.5,
            extracurricular: ['Science Club', 'Basketball'],
        },
        {
            _id: '3',
            school: 'High School C',
            marks: { marks10: 92, marks12: 88 },
            college: 'College C',
            department: 'Physics',
            branch: 'Astrophysics',
            year: '2023',
            cgpa: 3.9,
            extracurricular: ['Robotics', 'Art Club'],
        },
    ];

    // Static recruiter data
    const staticRecruiters = [
        {
            _id: '1',
            companyName: 'Tech Corp',
            position: 'Software Engineer',
            contact: 'hr@techcorp.com',
            location: 'San Francisco',
        },
        {
            _id: '2',
            companyName: 'Finance Inc',
            position: 'Data Analyst',
            contact: 'jobs@financeinc.com',
            location: 'New York',
        },
        {
            _id: '3',
            companyName: 'Health LLC',
            position: 'Product Manager',
            contact: 'careers@healthllc.com',
            location: 'Chicago',
        },
    ];

    useEffect(() => {
        // Simulating a delay to mimic loading
        const loadData = () => {
            setStudents(staticStudents);
            setLoading(false);
        };

        setTimeout(loadData, 500); // Simulate a loading time of 500ms
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="admin-dashboard">
            <aside className="side-menu">
                <h2>Menu</h2>
                <ul>
                    <li onClick={() => handleTabChange('students')} style={{ cursor: 'pointer' }}>
                        Students
                    </li>
                    <li onClick={() => handleTabChange('recruiters')} style={{ cursor: 'pointer' }}>
                        Recruiters
                    </li>
                </ul>
            </aside>
            <main className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>

                {activeTab === 'students' && (
                    <table>
                        <thead>
                            <tr>
                                <th>School Name</th>
                                <th>10th Marks</th>
                                <th>12th Marks</th>
                                <th>College Name</th>
                                <th>Department</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>CGPA</th>
                                <th>Extracurricular</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.school}</td>
                                    <td>{student.marks.marks10}</td>
                                    <td>{student.marks.marks12}</td>
                                    <td>{student.college}</td>
                                    <td>{student.department}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.year}</td>
                                    <td>{student.cgpa}</td>
                                    <td>{student.extracurricular.join(', ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {activeTab === 'recruiters' && (
                    <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Position</th>
                                <th>Contact</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staticRecruiters.map((recruiter) => (
                                <tr key={recruiter._id}>
                                    <td>{recruiter.companyName}</td>
                                    <td>{recruiter.position}</td>
                                    <td>{recruiter.contact}</td>
                                    <td>{recruiter.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
