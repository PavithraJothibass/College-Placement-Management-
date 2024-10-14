// JobPosting.js
import React from 'react';
import './JobPosting.css'; // Optional: Add your own styles

const JobPosting = () => {
    return (
        <div className="job-posting">
            <h2>Job Title: Software Engineer</h2>
            <p><strong>Company:</strong> Tech Solutions Inc.</p>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Description:</strong> We are looking for a Software Engineer to join our team. You will be responsible for developing high-quality software solutions.</p>
            <p><strong>Qualifications:</strong></p>
            <ul>
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>Proficiency in JavaScript, Node.js, and React</li>
                <li>Excellent problem-solving skills</li>
            </ul>
            <p><strong>Salary:</strong> $80,000 - $100,000</p>
            <p><strong>How to Apply:</strong> Send your resume to careers@techsolutions.com</p>
        </div>
    );
};

export default JobPosting;
