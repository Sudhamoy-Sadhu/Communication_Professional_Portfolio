import React from "react";
import Header from "../HeaderComponent/Header";
import Interviews from "../Interviews/Interviews";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
function InterviewsPage() {
    useEffect(() => {
        document.title = "Shreya Mukherjee - Interviews"
    }, [])

    return (
        <>
            <div className="IP">
                <Header />
                <Interviews />
                <Footer />
            </div>
        </>
    )
}
export default InterviewsPage;