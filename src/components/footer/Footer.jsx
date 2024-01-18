import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid text-light mt-5">
          <div className="Footer">
            <div className="left">
              <ul>
                <li> About Us</li>
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Delivery Info</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="middle  container">
              <div className="row">
                <div className="card  mt-5 ms-5" style={{ width: "18rem" }}>
                  <img
                    src="./images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body text-light mt-5">
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="right  conatiner">
              <div className="row">
                <div className="card-body text-light mt-5">
                  <h2 className="text-center">Social Media Detail</h2>
                  <ul className="text-center">
                    <li>
                      <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i className="fab fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-linkedin"></i>
                    </li>
                  </ul>
                  <p className="card-text text-center ">
                    Some quick example text to build on the
                    <br /> card title and make up the bulk of the card's
                    content.
                  </p>
                </div>
                <h2 className="text-center">Payment Method</h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
