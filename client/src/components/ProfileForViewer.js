import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProfileforViewer.css";

function Profile() {
  const [student, setStudent] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [batch, setBatch] = useState("");
  const [projects, setProjects] = useState("");
  const [research, setResearch] = useState("");
  const [experience, setExperience] = useState("");
  const [branch, setBranch] = useState("");
  const [position, setPosition] = useState("");
  const [worked, setWorked] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  //   const [url, setUrl] = useState("klsjalkjdsad.com");

  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const alumni = JSON.parse(localStorage.getItem("alumni"));
    console.log(alumni);
    setAdmission(alumni.admission);
    setBatch(alumni.batch);
    setBranch(alumni.branch);
    setDescription(alumni.description);
    setEmail(alumni.email);
    setExperience(alumni.experience);
    setName(alumni.name);
    setPhone(alumni.phone);
    setPosition(alumni.current);
    setProjects(alumni.projects);
    setResearch(alumni.research);
    setWorked(alumni.worked);
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    setUpdate(!update);
    axios.put(`/api/v1/alumni/update/${email}`, {
      branch,
      description,
      experience,
      research,
      projects,
      worked,
      current:position,
    });
  };

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
          <h3>
            Branch :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setBranch(e.target.value)}
                  value={branch}
                ></input>
              ) : (
                <span>{branch}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Current Position :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setPosition(e.target.value)}
                  value={position}
                ></input>
              ) : (
                <span>{position}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Research Field :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setResearch(e.target.value)}
                  value={research}
                ></input>
              ) : (
                <span>{research}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Work Experience :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                ></input>
              ) : (
                <span>{experience}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Projects During College :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setProjects(e.target.value)}
                  value={projects}
                ></input>
              ) : (
                <span>{projects}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Worked in :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setWorked(e.target.value)}
                  value={worked}
                ></input>
              ) : (
                <span>{worked}</span>
              )}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Description :{" "}
            <span>
              {update ? (
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></input>
              ) : (
                <span>{description}</span>
              )}
            </span>
          </h3>
        </div>
        {localStorage.getItem("auth") && !update ? (
          <button onClick={() => setUpdate(!update)}>Update</button>
        ) : localStorage.getItem("auth") && update ? (
          <button onClick={onsubmit}>Save</button>
        ) : null}
      </div>
    </div>
  );
}

export default Profile;
