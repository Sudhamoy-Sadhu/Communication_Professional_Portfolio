import React, { useState } from "react";
import axios from "axios";
import "../AdminReviews/AdminreviewsForm.css";
import { API_SAVE_ARTICLES } from "../../../apiUrl";

function AdminArticlesForm() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleLink, setArticleLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateOfArticle, setDateOfArticle] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!articleTitle || !articleLink || !imageUrl || !dateOfArticle || !sourceName) {
      setError("All fields are required");
      return;
    }

    const newArticle = {
      articleTitle,
      articleLink,
      imageUrl,
      dateOfArticle,
      sourceName,
    };

    try {
      const response = await axios.post(API_SAVE_ARTICLES, newArticle);
      
      if (response.status === 201) {
        alert("Article submitted successfully!");
    
        setArticleTitle("");
        setArticleLink("");
        setImageUrl("");
        setDateOfArticle("");
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
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link to Article</label>
          <input
            type="url"
            id="link"
            value={articleLink}
            onChange={(e) => setArticleLink(e.target.value)}
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
            value={dateOfArticle}
            onChange={(e) => setDateOfArticle(e.target.value)}
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
