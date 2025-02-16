import React, { useEffect } from "react";
import Header from "../HeaderComponent/Header";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

function ArticlesPage() {
    useEffect(()=>{
        document.title = "Shreya Mukherjee - Articles";
    })
    return(
        <>
            <div className="ArticlePage">
                <Header/>
                <Articles/>
                <Footer/>
            </div>
        </>
    )
}
export default ArticlesPage;