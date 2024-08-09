import React from 'react';

export default function Chatbot() {
  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/yZ79phiCArRhiVeyz4_AL"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '350px',
        height: '500px',
        border: 'none',
        zIndex: 1000,
      }}
      title="Chatbot"
    ></iframe>
  );
}
