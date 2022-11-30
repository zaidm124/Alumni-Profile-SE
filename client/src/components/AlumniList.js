import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AluminiList.css";
// import db from "../FireBase";

function SearchAlumni() {
  const [final, setFinal] = useState([]);

  useEffect(()=>{
    const batch=localStorage.getItem("id");
    console.log(batch);
    axios.get(`http://localhost:5000/api/v1/alumni/profile/getAlumni/${batch}`).then((res)=>{
      console.log(res);
      setFinal(res.data);
    })
  },[])
  useEffect(()=>{
    console.log(final);
  },[])

  return (
    <div>
      <div>
        <div class="Background">
          <div className="Title">
            <h2>Search Results</h2>
          </div>
          {final.map((s) => {
            return (
              <>
                <a
                  href="/profile"
                  // onClick={() =>
                  //   localStorage.setItem("admission", s.data?.admission)
                  // }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ProfileBackground">
                    <div className="Profile">
                      <div>
                        <h3>Name: {s?.name}</h3>
                      </div>
                      <div>
                        <h3>Batch: {s?.batch}</h3>
                      </div>
                      <div>
                        <h3>Admission No: {s?.admission}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </>
             ); 
           })} 
        </div>
      </div>
    </div>
  );
  // });
}

export default SearchAlumni;