const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const API_GET_REVIEWS = `${API_BASE_URL}/reviews/getAllReviews`;
export const API_GET_INTERVIEWS = `${API_BASE_URL}/interviews/getallinterviews`;
export const API_GET_ARTICLES = `${API_BASE_URL}/articles/getAllArticles`;
export const API_SAVE_REVIEWS = `${API_BASE_URL}/reviews/save`;
export const API_SAVE_INTERVIEWS = `${API_BASE_URL}/interviews/save`;
export const API_SAVE_ARTICLES = `${API_BASE_URL}/articles/save`;
export const API_CONTACT_ME = `${API_BASE_URL}/contactMe/sendEmail`;
export const API_GET_REVIEWS_BYID = (id) => `${API_BASE_URL}/reviews/${id}`;
export const API_PUT_REVIEWS = (id) => `${API_BASE_URL}/reviews/update/${id}`;
export const API_DELETE_REVIEWS = (id) => `${API_BASE_URL}/reviews/delete/${id}`;