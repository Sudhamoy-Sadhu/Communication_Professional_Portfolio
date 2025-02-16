import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminEditForm.css"
import { useParams, useNavigate } from "react-router-dom";
import { API_GET_ARTICLES_BYID, API_PUT_ARTICLES } from "../../../../../apiUrl";

const ArticleEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState({
        articleTitle: "",
        articleLink: "",
        imageUrl: "",
        dateOfArticle: "",
        sourceName: ""
    });

    useEffect(() => {
        axios.get(API_GET_ARTICLES_BYID(id))
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
        axios.put(API_PUT_ARTICLES(id), review)
            .then(() => {
                alert("Article updated successfully!");
                navigate("/articleEditTable");
            })
            .catch(error => {
                console.error("Error updating interview:", error);
            });
    };

    return (
        <div className="admin-edit-form-main">
            <form className="admin-edit-form" onSubmit={handleSubmit}>
                <h2>Edit Articles</h2>
                <div className="form-fields">
                    <label>Title:</label>
                    <input type="text" name="reviewTitle" value={review.articleTitle} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Link:</label>
                    <input type="text" name="reviewLink" value={review.articleLink} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Image URL :</label>
                    <input type="text" name="imageUrl" value={review.imageUrl} onChange={handleChange} required />

                </div>
                <div className="form-fields">
                    <label>Date:</label>
                    <input type="date" name="dateOfReview" value={review.dateOfArticle} onChange={handleChange} required />
                </div>
                <div className="form-fields">
                    <label>Source Name:</label>
                    <input type="text" name="sourceName" value={review.sourceName} onChange={handleChange} required />

                </div>

                <button type="submit" className="update-btn">Update Article</button>
            </form>
        </div>
    );
};

export default ArticleEditForm;
