import React from 'react'
import "./About_us.css"

export default function About_us() {
  return (
    <div>
      <div class="main_container">
        <div class="container">
          <div class="about_us_text">
            <div class="header">
              <h1>About Us</h1>
            </div>
            <div class="about_us_content">
              We are a group of students from IIIT Surat, who are passionate
              about the world of programming. We are a group of students from
              IIIT Surat, who are passionate about the world of programming.
              <h3>Build using</h3>
              <ul>
                <li>React js</li>
                <li>Node js</li>
                <li>.... </li>
              </ul>
            </div>
          </div>
          <div class="about_us_image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CNAu4ETzak89igslSuUgbdjJm7ex8Wp_xQ&usqp=CAU"
              alt="about us"
            />
          </div>
        </div>
      </div>

      <div class="team_container">
        <div>
          <div class="team_header">
            <h1 class="team_title">Our Team</h1>
          </div>
          <div class="team_identity">
            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Dhruvil_Thummar.jpg" alt="Dhruvil Thummar" />
                <div class="member_details">
                  <h3>Dhruvil Thummar</h3>
                  <p>Frontend developer</p>
                </div>
              </div>
            </a>

            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Tushar_Verma.jpg" alt="Tushar Verma" />
                <div class="member_details">
                  <h3 class="member_details">Tushar Verma</h3>
                  <p>Backend developer </p>
                  <p class="Ramesh_chandra_pola_p">Designer</p>
                </div>
              </div>
            </a>

            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Ujwal_Kumar.jpg" alt="Ujwal kumar" />
                <div class="member_details">
                  <h3>Ujwal Kumar</h3>
                  <p>Frontend developer</p>
                </div>
              </div>
            </a>

            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Vishal_Raj.jpg" alt="Vishal Raj" />
                <div class="member_details">
                  <h3>Vishal Raj</h3>
                  <p>Frontend developer</p>
                </div>
              </div>
            </a>

            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Zaid_Bhimala.jpg" alt="Zaid_Bhimala" />
                <div class="member_details">
                  <h3>Zaid Bhimala</h3>
                  <p>Backend developer</p>
                </div>
              </div>
            </a>

            <a href="http://google.com" style="text-decoration: none;">
              <div class="team_member">
                <img src="Vedant_Shinde.jpg" alt="Vedant Shinde" />
                <div class="member_details">
                  <h3>Vedant Shinde</h3>
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
