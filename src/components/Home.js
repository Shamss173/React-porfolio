import React from 'react'
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
    <div style={{backgroundColor:"black", fontStyle:"italic", color:"purple"}}>
        <h1>    Hello There!</h1>
        <p style={{fontSize:"25px"}}><b style={{fontSize:"large"}}> Shamas U Din Here</b></p>
        <p><b style={{fontSize:"25px"}}> Welcome to Home Page!</b></p>
        <p><b style={{fontSize:"25px"}}> Passionate to Coding</b></p>
        <p><b style={{fontSize:"25px"}}> Focussed to Back-end Development</b></p>

        
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
    </>
  )
}
