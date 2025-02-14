import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/User/HomePage/Home";
import InterviewsPage from "./components/User/InterviewsPage/InterviewsPage";
import ArticlesPage from "./components/User/ArticlesPage/ArticlesPage";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import AdminReviewsForm from "./components/Admin/AdminReviews/AdminreviewsForm";
import AdminInterviewForm from "./components/Admin/AdminInterviews/AdminInterviewsForm";
import AdminArticlesForm from "./components/Admin/AdminArticles/AdminArticlesForm";
import Resume from "./components/User/Resume/Resume";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminEditTable from "./components/Admin/AdminDashboard/AdminEditTable/AdminEditTable";
import AdminEditForm from "./components/Admin/AdminDashboard/AdminEditTable/AdminEditForm";
import AdminDeleteTable from "./components/Admin/AdminDashboard/AdminEditTable/AdminDeleteTable";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviews" element={<InterviewsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/adlogin" element={<AdminLogin />} />

        <Route path="/adreviewsForm" element={<AdminReviewsForm />} />  
        <Route path="/adInterviewsForm" element={<AdminInterviewForm />} />
        <Route path="/adArticlesForm" element={<AdminArticlesForm />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminEditTable" element={<AdminEditTable />} />
        <Route path="/adminDeleteTable" element={<AdminDeleteTable />} />
        <Route path="/adminEditForm/:id" element={<AdminEditForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

