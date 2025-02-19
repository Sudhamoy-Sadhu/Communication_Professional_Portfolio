const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://shreya-mukherjee.onrender.com';

//Contact Me API
export const API_CONTACT_ME = `${API_BASE_URL}/contactMe/sendEmail`;

// Reviews API
export const API_GET_REVIEWS = `${API_BASE_URL}/reviews/getAllReviews`;
export const API_SAVE_REVIEWS = `${API_BASE_URL}/reviews/save`;
export const API_GET_REVIEWS_BYID = (id) => `${API_BASE_URL}/reviews/${id}`;
export const API_PUT_REVIEWS = (id) => `${API_BASE_URL}/reviews/update/${id}`;
export const API_DELETE_REVIEWS = (id) => `${API_BASE_URL}/reviews/delete/${id}`;
export const API_GET_TOTAL_REVIEWS = `${API_BASE_URL}/reviews/total`;

// Interviews API
export const API_GET_INTERVIEWS = `${API_BASE_URL}/interviews/getallinterviews`;
export const API_SAVE_INTERVIEWS = `${API_BASE_URL}/interviews/save`;
export const API_GET_INTERVIEWS_BYID = (id) => `${API_BASE_URL}/interviews/${id}`;
export const API_PUT_INTERVIEWS = (id) => `${API_BASE_URL}/interviews/update/${id}`;
export const API_DELETE_INTERVIEWS = (id) => `${API_BASE_URL}/interviews/delete/${id}`;

// Articles API
export const API_GET_ARTICLES = `${API_BASE_URL}/articles/getAllArticles`;
export const API_SAVE_ARTICLES = `${API_BASE_URL}/articles/save`;
export const API_GET_ARTICLES_BYID = (id) => `${API_BASE_URL}/articles/${id}`;
export const API_PUT_ARTICLES = (id) => `${API_BASE_URL}/articles/update/${id}`;
export const API_DELETE_ARTICLES = (id) => `${API_BASE_URL}/articles/delete/${id}`;
