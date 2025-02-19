import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { API_GET_TOTAL_REVIEWS } from "../../../apiUrl";

function AdminDashboard() {
    const [totalReviews, setTotalReviews] = useState("");

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminUsername");
        navigate("/adlogin");
      };

      useEffect(() => {
        const totalReviews = async () => {
          try {
            const response = await axios.get(API_GET_TOTAL_REVIEWS);
            setTotalReviews(response.data.totalReviews);
          } catch (error) {
            console.error("Error fetching total number of reviews:", error);
          }
        };
    
        totalReviews();
      }, []);

    return (
        <>
            <div className="addashboardmain">
                <div className="logout-admin" onClick={handleLogout}>Logout</div>
                <div className="welcomeSh">
                    <h1>Welcome Shreya Mukherjee!</h1>
                </div>
                <div className="dashboard-content">
                    <div className="ReviewsAdminPart">
                        <div className="adminReviewsCard">
                            <div className="heading-reviews" onClick={() => navigate("/")}>
                                <h1>Reviews Detail</h1>
                                <h3>Total Number of Reviews: {totalReviews}</h3>
                            </div>
                            <ul className="reviews-details-actionbtn">
                                <li className="plus" onClick={() => navigate("/adreviewsForm")}><FaPlus /></li>
                                <li className="edit" onClick={()=> navigate("/adminEditTable")}><FaEdit /></li>
                                <li className="trash" onClick={()=> navigate("/adminDeleteTable")}><FaTrashAlt /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ReviewsAdminPart">
                        <div className="adminReviewsCard">
                            <div className="heading-reviews" onClick={() => navigate("/interviews")}>
                                <h1>Interviews Detail</h1>
                                <h3>Total Number of Interviews:</h3>
                            </div>
                            <ul className="reviews-details-actionbtn">
                                <li className="plus" onClick={() => navigate("/adInterviewsForm")}><FaPlus /></li>
                                <li className="edit" onClick={()=> navigate("/interviewEditTable")}><FaEdit /></li>
                                <li className="trash" onClick={()=> navigate("/interviewDeleteTable")}><FaTrashAlt /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ReviewsAdminPart">
                        <div className="adminReviewsCard">
                            <div className="heading-reviews" onClick={() => navigate("/articles")}>
                                <h1>Articles Detail</h1>
                                <h3>Total Number of Articles:</h3>
                            </div>
                            <ul className="reviews-details-actionbtn">
                                <li className="plus" onClick={() => navigate("/adArticlesForm")}><FaPlus /></li>
                                <li className="edit" onClick={() => navigate("/articleEditTable")}><FaEdit /></li>
                                <li className="trash" onClick={() => navigate("/articleDeleteTable")}><FaTrashAlt /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminDashboard;