import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import ContentHeader from "../HeaderComponent/ContentHeader/ContentHeader";
import articlesData from "../../User/articles.json"; // Import the JSON file

import "../Reviews/Reviews.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Format the article date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  // Fetch articles data from the JSON file
  useEffect(() => {
    setArticles(articlesData);
    setFilteredArticles(articlesData);
    setIsLoading(false);
  }, []);

  return (
    <div className="ReviewsMain">
      <div className="Reviewsbox">
        {/* Ensure ContentHeader component accepts articles and setFilteredArticles props */}
        <ContentHeader
          articles={articles}
          setFilteredArticles={setFilteredArticles}
        />
        <div className="all-reviews">
          {isLoading ? (
            <p>Loading articles...</p>
          ) : (
            filteredArticles.map((article) => (
              <div key={article.id} className="ReviewsContent">
                <a href={article.articleLink} target="_blank" rel="noopener noreferrer">
                  <img
                    className="mainPic"
                    src={article.imageUrl}
                    alt={article.articleTitle}
                  />
                  <h1>{article.articleTitle}</h1>
                </a>
                <span className="gotolink">
                  <img className="nlogo" src="./assets/newsbyteslogo.png" alt="source" />
                  <span className="dateofReview">{formatDate(article.dateOfArticle)}&nbsp;</span> - 
                  <span className="articalAt">&nbsp; &nbsp;Article at &nbsp; <b>{article.sourceName}</b></span>
                  <a
                    href={article.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nlg"
                  >
                    <FiExternalLink />
                  </a>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Articles;
