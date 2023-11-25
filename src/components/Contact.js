import React from "react";
// import { Form } from "react-bootstrap";

const Contact =()=>{
    return(
        <>
 <div className="container mt-4 ">
  <div></div> 
      <h2>Contact Us</h2>
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
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
        </>
    );
}
export default Contact;