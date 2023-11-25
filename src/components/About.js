import React from 'react'
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
    <Typewriter
      options={{
        strings: [
          "Below is the description About Me"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      className="me"
    />

    <div className='about-class' >
      <div >
        Meet Shams, a dedicated and passionate individual currently navigating the exciting realm of computer science. 
        I am currently immersed in the 5th semester of my academic journey, 
        delving into the core subjects that form the backbone of my expertise.
      </div>
      <div >
        With a keen focus on honing my programming skills, I have delved into fundamental concepts, mastering the intricacies of Object-Oriented Programming. 
        My academic journey also includes a deep dive into crucial areas such as Data Structures, Operating Systems, Software Engineering, 
        Computer Networking, and Database Management Systems.
      </div>
      <div  >
        My commitment to understanding the foundational principles of computer science is evident in my academic pursuits. 
        Whether crafting efficient algorithms, developing robust software,
         or unraveling the complexities of database management, 
        I approach each subject with enthusiasm and a thirst for knowledge.
      </div>
    </div>
    </>
  );
};
