import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../AdminEditTable.css";
import { FaEdit } from "react-icons/fa";
import { API_GET_ARTICLES } from "../../../../../apiUrl";


const ArticleEditTable = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_GET_ARTICLES)
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error("Error fetching articles:", error);
            });
    }, []);

    const handleEdit = (id) => {
        console.log("Navigating to:", `/articleEditForm/${id}`);
        if (id) {
            navigate(`/articleEditForm/${id}`);
        } else {
            console.error("ID is undefined!");
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
                        <tr key={review.id || index + 1}>
                            <td>{review.articleTitle}</td>
                            <td><a href={review.articleLink} target="_blank" rel="noopener noreferrer">View</a></td>
                            <td><img src={review.imageUrl} alt="Review" width="50" /></td>
                            <td>{review.dateOfArticle}</td>
                            <td>{review.sourceName}</td>
                            <td>
                                <button onClick={() => handleEdit(review.id || index + 1)} className="admin-reviews-edit-btn"><FaEdit/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArticleEditTable;
