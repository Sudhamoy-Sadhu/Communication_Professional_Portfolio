import React, { useEffect, useState } from "react";
import axios from "axios";
import "../AdminEditForm.css"
import { useParams, useNavigate } from "react-router-dom";
import { API_GET_INTERVIEWS_BYID, API_PUT_INTERVIEWS } from "../../../../../apiUrl";

const InterviewEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState({
        interviewTitle: "",
        interviewLink: "",
        imageUrl: "",
        dateOfInterview: "",
        sourceName: ""
    });

    useEffect(() => {
        axios.get(API_GET_INTERVIEWS_BYID(id))
            .then(response => {
                setReview(response.data);
            })
            .catch(error => {
                console.error("Error fetching interview:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(API_PUT_INTERVIEWS(id), review)
            .then(() => {
                alert("Interview updated successfully!");
                navigate("/interviewEditTable");
            })
            .catch(error => {
                console.error("Error updating interview:", error);
            });
    };

    return (
        <div className="admin-edit-form-main">
            <form className="admin-edit-form" onSubmit={handleSubmit}>
                <h2>Edit Interview</h2>
                <div className="form-fields">
                    <label>Title:</label>
                    <input type="text" name="interviewTitle" value={review.interviewTitle} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Link:</label>
                    <input type="text" name="interviewLink" value={review.interviewLink} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Image URL :</label>
                    <input type="text" name="imageUrl" value={review.imageUrl} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Date:</label>
                    <input type="date" name="dateOfInterview" value={review.dateOfInterview} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Source Name:</label>
                    <input type="text" name="sourceName" value={review.sourceName} onChange={handleChange} required />

                </div>

                <button type="submit" className="update-btn">Update Interview</button>
            </form>
        </div>
    );
};

export default InterviewEditForm;
