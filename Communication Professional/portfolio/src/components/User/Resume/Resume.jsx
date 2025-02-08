import React from "react";
import Header from "../HeaderComponent/Header";
import Footer from "../Footer/Footer";
import "./Resume.css"

function Resume() {
    return (
        <>
        <Header/>
            <div className="resumemaindiv">
                <div className="maincontentresume">
                    {/* Senior Editor Section */}
                    <div className="senioreditor">
                        <h2>SENIOR EDITOR</h2>
                        <p><strong>NewsBytes | Mar 2021 - Present</strong></p>
                        <ul>
                            <li>Leading a team of six writers, edited and published 1,200+ keyword optimized articles monthly</li>
                            <li>Conducted over 20 interviews and reviewed 90+ movies and web shows</li>
                            <li>Spearheading PR relations, published over 200 exclusive/non-exclusive articles</li>
                            <li>Started off as a journalist, subsequently promoted to the role of an editor and then senior editor within three years</li>
                        </ul>
                    </div>
                    
                    {/* Content Producer Section */}
                    <div className="contentproducer">
                        <h2>CONTENT PRODUCER</h2>
                        <p><strong>Greenhonchos | Jan 2020 - Mar 2021</strong></p>
                        <ul>
                            <li>Curated, researched and edited content contributing to 70+ articles every week for clients like Hindustan Times, News18, Firstpost etc.</li>
                            <li>Directly responsible for 50% increase in client base in a year</li>
                            <li>Overachieved targets of delivering buzz-worthy SEO optimized articles by an average of 25% every month</li>
                        </ul>
                    </div>

                    {/* Sub Editor Section */}
                    <div className="subeditor">
                        <h2>SUB EDITOR</h2>
                        <p><strong>The New Indian Express | May 2019 - Jan 2020</strong></p>
                        <ul>
                            <li>Was responsible for handling 2 local pages of the print and digital newspaper</li>
                            <li>Edited and published close to 180+ articles every week</li>
                            <li>Worked with the design team to develop the layout of the pages using QuarkXpress and InDesign</li>
                            <li>Authored 15+ travel-based and PR articles for the weekly city page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Resume;
