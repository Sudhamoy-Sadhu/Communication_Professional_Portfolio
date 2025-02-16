import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDeleteTable.css";
import { FaTrashAlt } from "react-icons/fa";
import { API_DELETE_ARTICLES, API_GET_ARTICLES } from "../../../../../apiUrl";

const ArticleDeleteTable = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);

    useEffect(() => {
        fetchReviews();
    }, []);

    // Fetch reviews
    const fetchReviews = () => {
        axios.get(API_GET_ARTICLES)
            .then(response => setReviews(response.data))
            .catch(error => console.error("Error fetching reviews:", error));
    };

    // Open delete confirmation popup
    const confirmDelete = (review) => {
        setSelectedReview(review);
    };

    // Handle delete API call
    const handleDelete = () => {
        if (selectedReview && selectedReview.id) {
            axios.delete(API_DELETE_ARTICLES(selectedReview.id))
                .then(() => {
                    alert(`Article with Title ${selectedReview.articleTitle} deleted successfully!`);
                    setSelectedReview(null); // Close popup
                    fetchReviews(); // Refresh list
                })
                .catch(error => {
                    console.error("Error deleting article:", error);
                    alert("Failed to delete article.");
                });
        }
    };

    return (
        <div className="admin-edit-table-main">
            <h1>Articles List</h1>
            <table className="admin-edit-table" cellPadding="10">
                <thead className="admin-edit-table-head">
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Image</th>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="admin-edit-table-body">
                    {reviews.map((review, index) => (
                        <tr key={review.id || `review-${index}`}>
                            <td>{review.articleTitle}</td>
                            <td>
                                <a href={review.articleLink} target="_blank" rel="noopener noreferrer">View</a>
                            </td>
                            <td>
                                <img src={review.imageUrl} alt="Review" width="50" />
                            </td>
                            <td>{review.dateOfArticle}</td>
                            <td>{review.sourceName}</td>
                            <td>
                                <button onClick={() => confirmDelete(review)} className="admin-reviews-edit-btn">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>

            {/* Delete Confirmation Popup */ }
    {
        selectedReview && (
            <div className="delete-popup">
                <div className="popup-content">
                    <h2>Are you sure you want to delete this interview?</h2>
                    {/* <p><strong>Review ID:</strong> {selectedReview.id || "N/A"}</p> */}
                    <p><strong>Title:</strong> {selectedReview.articleTitle}</p>
                    <div className="popup-buttons">
                        <button onClick={handleDelete} className="delete-btn">Delete</button>
                        <button onClick={() => setSelectedReview(null)} className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
        </div >
    );
};

export default ArticleDeleteTable;
