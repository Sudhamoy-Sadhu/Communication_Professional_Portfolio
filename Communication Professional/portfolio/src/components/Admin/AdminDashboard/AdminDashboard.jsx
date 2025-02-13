import React from "react";
import "./AdminDashboard.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <>
            <div className="addashboardmain">
                <div className="welcomeSh">
                    <h1>Welcome Shreya Mukherjee!</h1>
                </div>
                <div className="dashboard-content">
                    <div className="ReviewsAdminPart">
                        <div className="adminReviewsCard">
                            <div className="heading-reviews" onClick={() => navigate("/")}>
                                <h1>Reviews Detail</h1>
                                <h3>Total Number of Reviews:</h3>
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
                                <li className="edit" onClick={()=> navigate("/adminEditTable")}><FaEdit /></li>
                                <li className="trash" onClick={()=> navigate("/adminDeleteTable")}><FaTrashAlt /></li>
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
                                <li className="edit"><FaEdit /></li>
                                <li className="trash"><FaTrashAlt /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminDashboard;