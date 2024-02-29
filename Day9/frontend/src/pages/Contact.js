// components/Contact.js
import React from 'react';
import '../App.css'; 

function Contact() {
  return (
    <section id="contact-section" className="container text-center text-black mt-5">
      <div>
        <h1 className="display-4">Contact</h1>
        <h4>Visit me at my Address and Send me a Message</h4>
        <div className="map-container container-mt-5">
          {/* Google Maps iframe */}
        </div>
        <div className="container-fluid">
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control form-control-lg" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control form-control-lg" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
