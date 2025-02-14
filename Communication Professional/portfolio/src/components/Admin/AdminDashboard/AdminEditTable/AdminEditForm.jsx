import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminEditForm.css"
import { useParams, useNavigate } from "react-router-dom";
import { API_GET_REVIEWS_BYID, API_PUT_REVIEWS } from "../../../../apiUrl";

const AdminEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState({
        reviewTitle: "",
        reviewLink: "",
        imageUrl: "",
        dateOfReview: "",
        sourceName: ""
    });

    useEffect(() => {
        axios.get(API_GET_REVIEWS_BYID(id))
            .then(response => {
                setReview(response.data);
            })
            .catch(error => {
                console.error("Error fetching review:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(API_PUT_REVIEWS(id), review)
            .then(() => {
                alert("Review updated successfully!");
                navigate("/adminEditTable");
            })
            .catch(error => {
                console.error("Error updating review:", error);
            });
    };

    return (
        <div className="admin-edit-form-main">
            <form className="admin-edit-form" onSubmit={handleSubmit}>
                <h2>Edit Review</h2>
                <div className="form-fields">
                    <label>Title:</label>
                    <input type="text" name="reviewTitle" value={review.reviewTitle} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Link:</label>
                    <input type="text" name="reviewLink" value={review.reviewLink} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Image URL :</label>
                    <input type="text" name="imageUrl" value={review.imageUrl} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Date:</label>
                    <input type="date" name="dateOfReview" value={review.dateOfReview} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Source Name:</label>
                    <input type="text" name="sourceName" value={review.sourceName} onChange={handleChange} required />

                </div>

                <button type="submit" className="update-btn">Update Review</button>
            </form>
        </div>
    );
};

export default AdminEditForm;
