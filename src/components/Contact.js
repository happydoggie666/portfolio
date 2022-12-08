// src/components/Contact.js

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", firstName, lastName, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative"  style={{marginTop: "5rem"}}>
      <div className="container px-3 py-10">
        <div className="row">
          <div className="col-lg-6 col-xs-12 px-5 py-10" data-aos="fade-up">
            <h3>Contact</h3>
            <p> I would love to hear from you!</p>
            <div className="row">
              <div className="col py-10" data-aos="fade-up">
                <form
                  onSubmit={handleSubmit}
                  className="row g-3">
                  <div className="col-md-6">
                    <label htmlfor="name" className="form-label">First Name</label>
                    <input 
                      type="text"  
                      id="firstName" 
                      name="firstName" 
                      className="form-control" 
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputLastName" className="form-label">Last Name</label>
                    <input
                      type="text"  
                      id="lastName"
                      name="lastName" 
                      className="form-control" 
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="...@brown.edu"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputPhoneNum" class="form-label">Phone number</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="0123456789"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputMessage" class="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control" 
                      aria-label="With textarea"
                      rows="4"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="col text-center">
                    <button
                      type="submit"
                      className="btn btn-info btnSty">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12" data-aos="fade-up">
            <div className="row " style={{height: "100%"}}>
              <div style={{height: "10%"}}><h3>Address</h3></div>
              
              <div className="text-center" style={{height: "80%", width: "100%"}}>
                <iframe
                  title="map"
                  className="absolute inset-0 mapSty"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23784.753496009555!2d-71.39518245!3d41.826269950000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1670257610751!5m2!1sen!2sus"
                  />
                  <p className="mt-1">
                  115 Waterman St. Providence, RI 02912</p>
              </div>
              
               
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}