import React from 'react';
import Typewriter from "typewriter-effect";
import myImage from "../which-development-job-is-right-for-you.jpg"; // Import your image

export default function Home() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black", fontStyle: "italic", color: "purple", padding: "20px" }}>
        <div className="row">
          {/* Text Content Column */}
          <div className="col-md-6">
            <h1>Hello There!</h1>
            <p style={{ fontSize: "25px" }}><b style={{ fontSize: "large" }}>Shamas U Din Here</b></p>
            <p><b style={{ fontSize: "25px" }}>Welcome to Home Page!</b></p>
            <p><b style={{ fontSize: "25px" }}>Passionate to Coding</b></p>
            <p><b style={{ fontSize: "25px" }}>Focussed on Back-end Development</b></p>

            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Freelancer",
                  "Java Developer",
                  "Passionate",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Image Column */}
          <div className="col-md-6">
            <img src={myImage} alt="My " style={{ width: "100%", height:"100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
