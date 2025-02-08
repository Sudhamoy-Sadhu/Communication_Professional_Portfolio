import React, { useState } from "react";
import axios from "axios";
import "../AdminReviews/AdminreviewsForm.css";

function AdminArticlesForm() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !link || !imageUrl || !date || !sourceName) {
      setError("All fields are required");
      return;
    }

    const newArticle = {
      title,
      link,
      imageUrl,
      date,
      sourceName,
    };

    try {
      const response = await axios.post("http://your-backend-api.com/articles", newArticle);
      
      if (response.status === 201) {
        alert("Article submitted successfully!");
    
        setTitle("");
        setLink("");
        setImageUrl("");
        setDate("");
        setSourceName("");
      }
    } catch (error) {
      console.error("Error submitting article:", error);
      setError("Error submitting the article. Please try again.");
    }
  };

  return (
    <div className="AdminForm">
      <h2>Submit a New Article</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Article Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link to Article</label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Article Image URL</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of Article</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
        <button type="submit" className="submit-btn">Submit Article</button>
      </form>
    </div>
  );
}

export default AdminArticlesForm;
