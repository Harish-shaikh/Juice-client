import React from "react";
import "./Contactus.css";
export default function Contactus() {
  return (
    <>
      {/* contactus */}

      <div className="contactus mt-5">
        <h2 className="text-center">Contact Us</h2>
        <div className="contactus-detail">
          <div className="left-contactus-detail">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location:</h3>
                  <p>123 Main Street, City, Country</p>
                </div>
              </div>

              <div className="info-item">
                <i className="far fa-clock"></i>
                <div>
                  <h3>Our Timing:</h3>
                  <p>Monday - Friday: 9 AM - 5 PM</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-info-circle"></i>
                <div>
                  <h3>General Inquiries:</h3>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Call Us:</h3>
                  <p>+123 456 7890</p>
                </div>
                <div className="contact-img ms-5">
                  {" "}
                  <img
                    src="./images/fruit.png"
                    alt="Contact"
                    className="contact-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right-contactus-detail">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
