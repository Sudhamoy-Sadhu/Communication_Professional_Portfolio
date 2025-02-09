import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";
import { FiExternalLink } from "react-icons/fi";
import ContentHeader from "../HeaderComponent/ContentHeader/ContentHeader";
import { API_GET_REVIEWS } from "../../../apiUrl";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Format the review date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  // Fetch reviews data from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(API_GET_REVIEWS);
        setReviews(response.data);
        setFilteredReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="ReviewsMain">
      <div className="Reviewsbox">
        <ContentHeader
          reviews={reviews}
          setFilteredReviews={setFilteredReviews}
        />
        <div className="all-reviews">
          {isLoading ? (
            <p>Loading reviews...</p>
          ) : (
            filteredReviews.map((review) => (
              <div key={review.id} className="ReviewsContent">
                <a href={review.reviewLink} target="_blank" rel="noopener noreferrer">
                  <img
                    className="mainPic"
                    src={review.imageUrl}
                    alt={review.reviewTitle}
                  />
                  <h1>{review.reviewTitle}</h1>
                </a>
                <span className="gotolink">
                  <img className="nlogo" src="./assets/newsbyteslogo.png" alt="Source Logo" />
                  <span className="dateofReview">{formatDate(review.dateOfReview)}&nbsp;</span> - <span className="articalAt">&nbsp; &nbsp;Article at &nbsp; <b>{review.sourceName}</b></span>
                  <a
                    href={review.reviewLink}
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

export default Reviews;
