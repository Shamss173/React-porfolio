import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='mb-3'>
          <ProgressBar variant="success" now={90} label={"Object-Oriented Programming"} />
        </div>

        <div className='mb-3'>
          <ProgressBar variant="info" now={80} label={"Java"} />
        </div>

        <div className='mb-3'>
          <ProgressBar variant="warning" now={80} label={"C++"} />
        </div>

        <div className='mb-3'>
          <ProgressBar variant="danger" now={75} label={"JavaScript"} />
        </div>

        <div className='mb-3'>
          <ProgressBar variant="primary" now={50} label={"Reactjs"} />
        </div>
        {/* Add more ProgressBar components as needed */}
      </div>
    </>
  );
}

export default Skills;
