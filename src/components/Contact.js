import React from "react";
// import { Form } from "react-bootstrap";

const Contact =()=>{
    return(
      <div className="container mt-4">
        <div className="row">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          {/* Form Column */}
          <div className="col-md-6 bg-dark text-light">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Enter Name:" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Enter email:" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" className="form-control" placeholder="Enter subject:" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" className="form-control" placeholder="Enter message:" rows="4" required></textarea>
              </div>

              <br />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information Column */}
          <div className="col-md-6 bg-dark text-light">
            <div className="row">
              <div className="col" >
                <br/> <br/>
                <p style={{border:"2px solid purple", borderStyle:"solid", borderRadius:"25px"}}>Email: shamasuahman.bscsf21@iba-suk.edu.pk</p>
                <p style={{border:"2px solid purple", borderStyle:"solid", borderRadius:"25px"}}>Email: shamsdinsoomro36@gmail.com</p>
                <p style={{border:"2px solid purple", borderStyle:"solid", borderRadius:"25px"}}>Contact #: 0315-2277173</p>
                <p style={{border:"2px solid purple", borderStyle:"solid", borderRadius:"25px"}}>Contact #: 0307-2277173</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contact;