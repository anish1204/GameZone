import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>GET IN TOUCH</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis
          unde dolores, perspiciatis possimus quos minima facere modi labore
          vitae dicta ab cupiditate officiis atque. Molestias officia reiciendis
          sit nisi ab.
        </p>
      </div>
      <div className="form-container">
        <form action="">
          <p>Contact Form</p>
          <div className="top-sec">
            <div className="ind-field">
              <span>Name *</span>
              <input type="text" />
            </div>
            <div className="ind-field">
              <span>Email Address*</span>
              <input type="text" />
            </div>
          </div>
          <div className="btm-sec">
            <span>Message*</span>
            <input type="text" />
          </div>
          <div className="btn-sec">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
