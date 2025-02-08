import React, { useState } from "react";
import axios from "axios";
import "../AdminReviews/AdminreviewsForm.css";

function AdminInterviewForm() {
  const [interviewTitle, setInterviewTitle] = useState("");
  const [interviewLink, setInterviewLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateOfInterview, setDateOfInterview] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!interviewTitle || !interviewLink || !imageUrl || !dateOfInterview || !sourceName) {
      setError("All fields are required");
      return;
    }

    const newInterview = {
      interviewTitle,
      interviewLink,
      imageUrl,
      dateOfInterview,
      sourceName,
    };

    try {
      const response = await axios.post("http://localhost:8080/interviews/save", newInterview);
      
      if (response.status === 201) {
        alert("Interview submitted successfully!");
    
        setInterviewTitle("");
        setInterviewLink("");
        setImageUrl("");
        setDateOfInterview("");
        setSourceName("");
      }
    } catch (error) {
      console.error("Error submitting interview:", error);
      setError("Error submitting the interview. Please try again.");
    }
  };

  return (
    <div className="AdminForm">
      <h2>Submit a New Interview</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Interview Title</label>
          <input
            type="text"
            id="title"
            value={interviewTitle}
            onChange={(e) => setInterviewTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link to Interview</label>
          <input
            type="url"
            id="link"
            value={interviewLink}
            onChange={(e) => setInterviewLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Interview Image URL</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of Interview</label>
          <input
            type="date"
            id="date"
            value={dateOfInterview}
            onChange={(e) => setDateOfInterview(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sourceName">Source Name</label>
          <input
            type="text"
            id="sourceName"
            value={sourceName}
            onChange={(e) => setSourceName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Interview</button>
      </form>
    </div>
  );
}

export default AdminInterviewForm;
