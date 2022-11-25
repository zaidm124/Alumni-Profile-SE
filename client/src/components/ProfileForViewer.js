import React, { useEffect, useState } from "react";
import "./ProfileforViewer.css";

function Profile() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("Zaid bhimala");
  const [admission, setAdmission] = useState("UI20CS74");
  const [batch, setBatch] = useState("2024");
  const [projects, setProjects] = useState("Alumini web");
  const [research, setResearch] = useState("hjksahksa");
  const [experience, setExperience] = useState("bohot he");
  const [branch, setBranch] = useState("CSE");
  const [position, setPosition] = useState("69");
  const [worked, setWorked] = useState("amazon");
  const [email, setEmail] = useState("mail.com");
  const [phone, setPhone] = useState("6786786786");
  const [description, setDescription] = useState("ghjgh jhgjh ghjg jhghjg ghj gjh ");
//   const [url, setUrl] = useState("klsjalkjdsad.com");

const [update, setUpdate] = useState(false);

  console.log(localStorage.getItem("admission"));

  

  return (
    <div className="profile_page">
      <div className="profile_page_left">
        <div className="profile_dis">
          <div className="profile_name">
            <div>
              <h2>Name</h2>
              <h3>{name}</h3>
            </div>
            <div>
              <h2>Admission no.</h2>
              <h3>{admission}</h3>
            </div>
            <div>
              <h2>Passing Year</h2>
              <h3>{batch}</h3>
            </div>
            <div>
              <h2>Phone No.</h2>
              <h3>{phone}</h3>
            </div>
            <div>
              <h2>Email</h2>
              <a href="#">{email}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_page_right">
        <h2>
          <i class="fas fa-user"></i> About
        </h2>
        <div>
          <h3>Branch : <span>{update ? <input></input> : <span>{position}</span>}</span></h3>
          
        </div>
        <div>
          <h3>Current Position : <span>{position}</span></h3>
        </div>
        <div>
          <h3>Research Field : <span>{research}</span></h3>
          
        </div>
        <div>
          <h3>Work Experience : <span>{experience}</span></h3>
        </div>
        <div>
          <h3>Projects During College : <span>{projects}</span></h3>
        </div>
        <div>
          <h3>Worked in : <span>{worked}</span></h3>
        </div>
        <div>
          <h3>Description : <span>{worked}</span></h3>
        </div>
        <button onClick={() => setUpdate(!update)}>Update</button>
      </div>
    </div>
  );
}

export default Profile;