import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Reviews/Reviews.css";
import { FiExternalLink } from "react-icons/fi";
import ContentHeader from "../HeaderComponent/ContentHeader/ContentHeader";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://your-backend-api.com/articles");
        if (response.data && Array.isArray(response.data)) {
          setArticles(response.data);
          setFilteredArticles(response.data);
        } else {
          console.error("Invalid data structure from API");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
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
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="mainPic"
                      src={article.imageUrl} 
                      alt={article.title}
                    />
                    <h1>{article.title}</h1>
                  </a>
                  <span className="gotolink">
                    <img className="nlogo" src={article.sourceLogo} alt="source" />
                    {article.date} - Article at {article.sourceName}
                    <a
                      href={article.link}
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
    </>
  );
}

export default Articles;
