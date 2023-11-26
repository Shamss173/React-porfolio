import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Projects() {
  return (
    <>
      <div className="row" style={{ backgroundColor: "black", color: "black" }}>
        <div className="col-md-6 mb-4">
          <Card style={{ width: '70%', color: "black" }} className='bg-dark text-white'>
            <Card.Body style={{fontStyle: "italic", fontFamily:"Times New Roman"}}>
              <Card.Title>Digital Clock</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Using React</Card.Subtitle>
              <Card.Text>
                Made Digital Clock using React component including useEffect
              </Card.Text>
              <Card.Link target="blank" href="https://github.com/yumii173/DigitalClock">Code</Card.Link>
              <Card.Link target="blank" href="https://digital-clock-yumii173.vercel.app/">Live Preview</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 mb-4">
          <Card style={{ width: '70%' }} className='bg-dark text-white'>
            <Card.Body style={{fontStyle: "italic", fontFamily:"Times New Roman"}}>
              <Card.Title>Login Form</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Java</Card.Subtitle>
              <Card.Text>
                Made a simple login form in java using drag and drop feature integrated with JDBC
              </Card.Text>
              <Card.Link target='blank' href="https://github.com/yumii173/Java-LoginForm-DB">Code</Card.Link>
              <Card.Link target='blank' href="#">Preview</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Second row */}
      <div className="row" style={{ backgroundColor: "black", color: "black" }}>
        <div className="col-md-6 mb-4" >
          <Card style={{ width: '70%' }} className='bg-dark text-white'>
            <Card.Body style={{fontStyle: "italic", fontFamily:"Times New Roman"}}>
              <Card.Title>Password Visibility</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Implemented in Java</Card.Subtitle>
              <Card.Text>
                This is a simple program programmed to show the password entered in the password field
              </Card.Text>
              <Card.Link target='blank' href="https://github.com/yumii173/Code">Code</Card.Link>
              <Card.Link target='blank' href="#">Preview</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 mb-4">
          <Card style={{ width: '70%' }} className='bg-dark text-white'>
            <Card.Body style={{fontSize:"18px",fontStyle: "italic", fontFamily:"Times New Roman"}}>
              <Card.Title>Queue Implementation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Data Structure</Card.Subtitle>
              <Card.Text>
                In this program, a queue is implemented containing methods: peek(), enqueue(), dequeue(), isempty(), isfull()
              </Card.Text>
              <Card.Link target='blank' href="https://github.com/yumii173/Data-Structure-Queue-Implementation">Code</Card.Link>
              <Card.Link target='blank' href="#">Preview</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
