
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = ()=>{

  return (
    <> 
    <div className='skiil-div' >
    <div >
        <ProgressBar variant="success" now={80} label={"Object-Oriented Programming"} />
        </div>    
      <div >

      <ProgressBar variant="info" now={70} label={"Java"} />
      </div>
      
      <div>
      <ProgressBar variant="warning" now={70} label={"C++"} />
      </div>
      <div>

      <ProgressBar variant="danger" now={75}  label={"JavaScript"}/>
      </div>
      <div>
      <ProgressBar variant="primary" now={20  }  label={"Reactjs"}/>

      </div>
    </div>
      
     
    </>
    
  );
  ;
}

export default Skills;
