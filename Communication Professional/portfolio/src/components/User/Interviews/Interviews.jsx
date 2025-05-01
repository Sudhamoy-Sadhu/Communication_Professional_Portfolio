import React, { useState, useEffect } from "react";
import "../Reviews/Reviews.css";
import { FiExternalLink } from "react-icons/fi";
import ContentHeader from "../HeaderComponent/ContentHeader/ContentHeader";
import interviewsData from "../../User/interviews.json"; // Import the interviews data

function Interviews() {
  const [interviews, setInterviews] = useState([]);
  const [filteredInterviews, setFilteredInterviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  useEffect(() => {
    // Simulating a delay like an API call
    setTimeout(() => {
      setInterviews(interviewsData); // Use the imported data
      setFilteredInterviews(interviewsData);
      setIsLoading(false);
    }, 1000); // 1 second delay for simulation
  }, []);

  return (
    <div className="ReviewsMain">
      <div className="Reviewsbox">
        <ContentHeader
          interviews={interviews}
          setFilteredInterviews={setFilteredInterviews}
        />
        <div className="all-reviews">
          {isLoading ? (
            <p>Loading interviews...</p>
          ) : (
            filteredInterviews.map((interview) => (
              <div key={interview.id} className="ReviewsContent">
                <a href={interview.interviewLink} target="_blank" rel="noopener noreferrer">
                  <img
                    className="mainPic"
                    src={interview.imageUrl}
                    alt={interview.interviewTitle}
                  />
                  <h1>{interview.interviewTitle}</h1>
                </a>
                <span className="gotolink">
                  <img className="nlogo" src="./assets/newsbyteslogo.png" alt="Source Logo" />
                  <span className="dateofReview">{formatDate(interview.dateOfInterview)}&nbsp;</span> - 
                  <span className="articalAt">&nbsp; &nbsp;Interview at &nbsp; <b>{interview.sourceName}</b></span>
                  <a
                    href={interview.interviewLink}
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

export default Interviews;
