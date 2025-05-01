import React, { useState, useEffect } from "react";
import "./Reviews.css";
import { FiExternalLink } from "react-icons/fi";
import ContentHeader from "../HeaderComponent/ContentHeader/ContentHeader";
import reviewsData from "../../User/reviews.json"; // Import the reviews data

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

  // Simulate fetching reviews data from the JSON file
  useEffect(() => {
    // Simulating a delay like an API call
    setTimeout(() => {
      setReviews(reviewsData);
      setFilteredReviews(reviewsData);
      setIsLoading(false);
    }, 1000); // 1 second delay for simulation
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
                  <span className="dateofReview">{formatDate(review.dateOfReview)}&nbsp;</span> - 
                  <span className="articalAt">&nbsp; &nbsp;Article at &nbsp; <b>{review.sourceName}</b></span>
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
