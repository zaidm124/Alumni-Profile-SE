import React from 'react'
import "./About_us.css"
import Zaid from "./Zaid.jpeg"
import Dhruvil from "./Dhruvil.jpg"
import Tushar from "./tushar.jpg"
import Vishal from "./vishal.jpg"
import Ujjwal from "./ujjwal.jpg"
import Vedant from "./vedant.jpg"



export default function About_us() {
    return (
        <div>
            <div className="main_container">
                <div className="container">
                    <div className="about_us_text">
                        <div className="header">
                            <h1>About Us</h1>
                        </div>
                        <div className="about_us_content">
                            We are a group of students from IIIT Surat, who are passionate
                            about the world of programming.
                            <h3>Build using</h3>
                            <ul>
                                <li>React js</li>
                                <li>Node js</li>
                                <li>Mongo DB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about_us_image">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CNAu4ETzak89igslSuUgbdjJm7ex8Wp_xQ&usqp=CAU"
                            alt="about us"
                        />
                    </div>
                </div>
            </div>

            <div className="team_container">
                <div>
                    <div className="team_header">
                        <h1 className="team_title">Our Team</h1>
                    </div>
                    <div className="team_identity">
                        <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Dhruvil} alt="Dhruvil Thummar" />
                                <div className="member_details">
                                    <h3>Dhruvil Thummar</h3>
                                    <p>Frontend developer</p>
                                </div>
                            </div>
                        </a>
                        <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Vedant} alt="Vedant Shinde" />
                                <div className="member_details">
                                    <h3>Vedant Shinde</h3>
                                    <p>Frontend developer</p>
                                </div>
                            </div>
                        </a>
                        <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Zaid} alt="Zaid Bhimala" />
                                <div className="member_details">
                                    <h3>Zaid Bhimala</h3>
                                    <p>Backend developer</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="team_identity">
                    <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Tushar} alt="Tushar Verma" />
                                <div className="member_details">
                                    <h3>Tushar Verma</h3>
                                    <p>backend developer</p>
                                </div>
                            </div>
                        </a>
                        <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Ujjwal} alt="Ujwal Kumar" />
                                <div className="member_details">
                                    <h3>Ujwal Kumar</h3>
                                    <p>Frontend developer</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="team_identity">
                        <a href="http://google.com" style={{ textDecoration: 'none' }}>
                            <div className="team_member">
                                <img src={Vishal} alt="Vishal Raj" />
                                <div className="member_details">
                                    <h3>Vishal Raj</h3>
                                    <p>Frontend developer</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
