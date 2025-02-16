import React, { useEffect } from "react";
import Header from "../HeaderComponent/Header";
import Reviews from "../Reviews/Reviews";
import './Home.css';
import Footer from "../Footer/Footer";
function Home(){
    useEffect(()=>{
        document.title = "Shreya Mukherjee - Reviews";
    }, []);
    return(
        <>
        <div className="HomeContainer">
            <Header/>
            <Reviews/>
            <Footer/>
        </div>
        </>
    )
}
export default Home;