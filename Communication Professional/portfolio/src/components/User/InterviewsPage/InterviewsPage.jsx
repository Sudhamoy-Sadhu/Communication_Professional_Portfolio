import React from "react";
import Header from "../HeaderComponent/Header";
import Interviews from "../Interviews/Interviews";
import Footer from "../Footer/Footer";

function InterviewsPage() {
    return(
        <>
        <div className="IP">
            <Header/>
            <Interviews/>
            <Footer/>
        </div>
        </>
    )
}
export default InterviewsPage;