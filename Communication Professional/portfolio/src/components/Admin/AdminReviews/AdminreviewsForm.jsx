import React, { useState } from "react";
import axios from "axios";
import "./AdminreviewsForm.css";
import { API_SAVE_REVIEWS } from "../../../apiUrl";

function AdminReviewsForm() {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateOfReview, setDateofReview] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reviewTitle || !reviewLink || !imageUrl || !dateOfReview || !sourceName) {
      setError("All fields are required");
      return;
    }

    const newReview = {
      reviewTitle,
      reviewLink,
      imageUrl,
      dateOfReview,
      sourceName,
    };

    try {
      const response = await axios.post(API_SAVE_REVIEWS, newReview);
      
      if (response.status === 201) {
        alert("Review submitted successfully!");
    
        setReviewTitle("");
        setReviewLink("");
        setImageUrl("");
        setDateofReview("");
        setSourceName("");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Error submitting the review. Please try again.");
    }
  };

  return (
    <div className="AdminForm">
      <h2>Submit a New Review</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewTitle">Review Title</label>
          <input
            type="text"
            id="reviewTitle"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link to Review</label>
          <input
            type="url"
            id="link"
            value={reviewLink}
            onChange={(e) => setReviewLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Review Image URL</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of Review</label>
          <input
            type="date"
            id="date"
            value={dateOfReview}
            onChange={(e) => setDateofReview(e.target.value)}
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
        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
    </div>
  );
}

export default AdminReviewsForm;
