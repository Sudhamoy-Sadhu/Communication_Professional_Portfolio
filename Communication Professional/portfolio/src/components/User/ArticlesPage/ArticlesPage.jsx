import React from "react";
import Header from "../HeaderComponent/Header";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";

function ArticlesPage() {
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