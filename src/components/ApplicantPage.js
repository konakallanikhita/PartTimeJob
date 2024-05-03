import React, { useEffect, useState } from "react";
import "./ApplicantPage.css"; // Import the CSS file

function ApplicantPage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('http://localhost:3002/applications'); // Update the URL to match the server route
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  return (
    <div className="applicant-container">
      <h2 className="applicant-title">Applicants</h2>
      <ul className="applicant-list">
        {applications.map(application => (
          <li key={application._id} className="applicant-item">
            <p className="applicant-detail"><strong>Name:</strong> {application.name}</p>
            <p className="applicant-detail"><strong>Email:</strong> {application.email}</p>
            <p className="applicant-detail"><strong>Message:</strong> {application.message}</p>
            <p className="applicant-detail"><strong>Age:</strong> {application.age}</p>
            <p className="applicant-detail"><strong>Degree:</strong> {application.degree}</p>
            {/* <div className="button-container">
              <button className="accept-button">Accept</button>
              <button className="reject-button">Reject</button>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicantPage;
