import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";

export default function About() {

  useEffect(() => {
    // Append the chatbot configuration script to the head of the document
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "yZ79phiCArRhiVeyz4_AL",
        domain: "www.chatbase.co"
      }
    `;
    document.head.appendChild(script1);

    // Append the chatbot embed script
    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.defer = true;
    script2.setAttribute('chatbotId', 'yZ79phiCArRhiVeyz4_AL');
    script2.setAttribute('domain', 'www.chatbase.co');
    document.head.appendChild(script2);

    // Cleanup function to remove the scripts when the component is unmounted
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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

      <div className='about-class'>
        <div>
          Meet Shams, a dedicated and passionate individual currently navigating the exciting realm of computer science.
          I am currently immersed in the 5th semester of my academic journey,
          delving into the core subjects that form the backbone of my expertise.
        </div>
        <div>
          With a keen focus on honing my programming skills, I have delved into fundamental concepts, mastering the intricacies of Object-Oriented Programming.
          My academic journey also includes a deep dive into crucial areas such as Data Structures, Operating Systems, Software Engineering,
          Computer Networking, and Database Management Systems.
        </div>
        <div>
          My commitment to understanding the foundational principles of computer science is evident in my academic pursuits.
          Whether crafting efficient algorithms, developing robust software,
          or unraveling the complexities of database management,
          I approach each subject with enthusiasm and a thirst for knowledge.
        </div>
      </div>
    </>
  );
};
