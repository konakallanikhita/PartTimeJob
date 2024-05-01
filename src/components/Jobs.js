
import React from "react";
import './Jobs.css'; // Import CSS for styling

function Jobs(props) {
  const redirectToApplicationForm = () => {
    // Redirect to the application form page
    window.location.href = "/application-form";
  };

  return (
    <div className="main">
    <div className="job-card" onClick={redirectToApplicationForm}>
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
    </div>
  );
}

export default Jobs;