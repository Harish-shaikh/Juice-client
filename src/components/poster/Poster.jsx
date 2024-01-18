import React from "react";
import Aboutus from "../about/Aboutus";
import Contactus from "../contactus/Contactus";
import Juice from "../juice/Juice";
import "./poster.css";

export default function Poster() {
  return (
    <>
      <div className="container poster">
        <div className="poster2">
          <img
            src="./images/juicetemplate2.jpeg"
            alt="Logo"
            className="img-fluid logo"
          />
        </div>
        <div className="juices-categorys">
          <div className="juices-category">
            <img src="./images/fruit.png" alt="fruit" />
            <h3>Fruit-Juices</h3>
          </div>
          <div className="juices-category">
            <img src="./images/healthy.avif" alt="healthy" />
            <h3>Healthy-Juices</h3>
          </div>
          <div className="juices-category">
            <img src="./images/seasonal.png" alt="User Image" />
            <h3>Seasonal-Juices</h3>
          </div>
        </div>

        {/* Discription */}
        <div className="all-item">
          <div className="discription text-center mt-5">
            <h2>Discription</h2>
            <div className="discription-detail">
              <span className="text-center">
                <img
                  src="./images/discription.png"
                  alt="aboutus"
                  className="contact-image"
                />
                <p>
                  {" "}
                  At our website, we cater to orders for weddings and parties,
                  extending our services across Mumbai. We take pride in
                  offering fresh and top-quality juices at our establishment.
                  For inquiries or orders, please feel free to contact us at
                  8080641167. Our location is in Boisar
                </p>
              </span>
            </div>
          </div>
          {/* Juices */}
          <Juice />
          {/* Aboutus */}
          <Aboutus />
          {/* testimonial */}
          <div className="testimonial text-center mt-5">
            <h2>Testimonials</h2>
            <div className="testimonial-detail ">
              <small>
                Hello, my name is Harish Shaikh, and I am a devoted fan of
                juices. I highly recommend everyone to give it a try;<br></br>{" "}
                you won't be disappointed
              </small>
              <h5>
                <i className="fas fa-user"></i> Harish Shaikh
              </h5>
            </div>
          </div>
          {/* contactus*/}
          <Contactus />
        </div>
      </div>
    </>
  );
}
