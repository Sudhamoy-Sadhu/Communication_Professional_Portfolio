import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ContentHeader.css";
import { CiSearch } from "react-icons/ci";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaPlug } from "react-icons/fa";
import axios from "axios";
import { API_GET_ARTICLES, API_GET_INTERVIEWS, API_GET_REVIEWS } from "../../../../apiUrl";

function ContentHeader({
  reviews,
  setReviews,
  setFilteredReviews,
  articles,
  setFilteredArticles,
  interviews,
  setFilteredInterviews,
}) {
  const [activeLink, setActiveLink] = useState("Reviews");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/interviews") {
      setActiveLink("Interviews");
      fetchInterviews();
    } else if (location.pathname === "/articles") {
      setActiveLink("Articles");
      fetchArticles();
    } else {
      setActiveLink("Reviews");
      fetchReviews();
    }
  }, [location]);

  // Fetch Reviews data
  const fetchReviews = async () => {
    try {
      const response = await axios.get(API_GET_REVIEWS);
      const data = response.data.map((review) => ({
        ...review,
        reviewTitle: review.reviewTitle || "",
        reviewLink: review.reviewLink || "",
        imageUrl: review.imageUrl || "",
        sourceName: review.sourceName || "",
      }));
      setReviews(data);
      setFilteredReviews(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setIsLoading(false);
    }
  };

  // Fetch Articles data
  const fetchArticles = async () => {
    try {
      const response = await axios.get(API_GET_ARTICLES);
      const data = response.data.map((article) => ({
        ...article,
        articleTitle: article.articleTitle || "",
        articleLink: article.articleLink || "",
        imageUrl: article.imageUrl || "",
        sourceName: article.sourceName || "",
      }));
      setFilteredArticles(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setIsLoading(false);
    }
  };

  // Fetch Interviews data
  const fetchInterviews = async () => {
    try {
      const response = await axios.get(API_GET_INTERVIEWS);
      const data = response.data.map((interview) => ({
        ...interview,
        interviewTitle: interview.interviewTitle || "",
        interviewLink: interview.interviewLink || "",
        imageUrl: interview.imageUrl || "",
        sourceName: interview.sourceName || "",
      }));
      setFilteredInterviews(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching interviews:", error);
      setIsLoading(false);
    }
  };

  // Handle the change in search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterContent(query, selectedType, selectedSource);
  };

  // Handle the change in Type selection
  const handleTypeChange = (e) => {
    const selected = e.target.value;
    setSelectedType(selected);
    filterContent(searchQuery, selected, selectedSource);
  };

  // Handle the change in Source selection
  const handleSourceChange = (e) => {
    const selected = e.target.value;
    setSelectedSource(selected);
    filterContent(searchQuery, selectedType, selected);
  };

  // Filter content based on the search, type, and source
  const filterContent = (query, type, source) => {
    let filteredContent = [];

    // Dynamically select content based on the current page type
    if (location.pathname === "/interviews") {
      filteredContent = [...interviews];
    } else if (location.pathname === "/articles") {
      filteredContent = [...articles];
    } else {
      filteredContent = [...reviews];
    }

    // Apply search query filter (by title) if query is present
    if (query) {
      filteredContent = filteredContent.filter((item) => {
        // Dynamically access the correct title field based on the content type
        const titleField = location.pathname === "/interviews" ? "interviewTitle" :
                           location.pathname === "/articles" ? "articleTitle" :
                           "reviewTitle";  // default to reviewTitle for reviews

        return item[titleField].toLowerCase().includes(query.toLowerCase());
      });
    }

    // Apply source filter (if selected and not "all")
    if (source && source !== "all") {
      filteredContent = filteredContent.filter((item) => {
        // Dynamically access the correct source field based on the content type
        const sourceField = location.pathname === "/interviews" ? "sourceName" :
                            location.pathname === "/articles" ? "sourceName" :
                            "sourceName";  // default to sourceName for reviews

        return item[sourceField].toLowerCase().includes(source.toLowerCase());
      });
    }

    // Apply type filter (if selected and not "all")
    if (type && type !== "all") {
      filteredContent = filteredContent.filter((item) => item.type === type);
    }

    // Dynamically set filtered content based on the current page type
    if (location.pathname === "/interviews") {
      setFilteredInterviews(filteredContent);
    } else if (location.pathname === "/articles") {
      setFilteredArticles(filteredContent);
    } else {
      setFilteredReviews(filteredContent);
    }
  };

  return (
    <div className="ReviewsHeader">
      <div className="mainLinks">
        <a
          href="/"
          className={`R ${activeLink === "Reviews" ? "active" : ""}`}
          onClick={() => setActiveLink("Reviews")}
        >
          Reviews
        </a>
        <a
          href="/interviews"
          className={`I ${activeLink === "Interviews" ? "active" : ""}`}
          onClick={() => setActiveLink("Interviews")}
        >
          Interviews
        </a>
        <a
          href="/articles"
          className={`A ${activeLink === "Articles" ? "active" : ""}`}
          onClick={() => setActiveLink("Articles")}
        >
          Articles
        </a>
      </div>

      <div className="search-cont">
        <div className="search">
          <CiSearch />
          <input
            type="text"
            className="searchbar"
            placeholder="Search by Title..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="ReviewsFilter">
          {/* Type Dropdown (appears on hover) */}
          <div className="selectType">
            <TbTriangleInvertedFilled />
            <div className="dropdown">
              <select value={selectedType} onChange={handleTypeChange}>
                <option value="all">Select a Type</option>
                <option value="Review">Review</option>
                <option value="Interview">Interview</option>
                <option value="Article">Article</option>
              </select>
            </div>
          </div>

          {/* Source Dropdown (appears on hover) */}
          <div className="selectASource">
            <FaPlug />
            <div className="dropdown">
              <select value={selectedSource} onChange={handleSourceChange}>
                <option value="all">Select a Source</option>
                <option value="NewsBytes">NewsBytes</option>
                <option value="ExampleSource">Example Source</option>
                <option value="OtherSource">Other Source</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
