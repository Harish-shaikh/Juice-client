import React from "react";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="aboutus text-center mt-5">
      <h2>About Us</h2>
      <div className="aboutus-detail">
        <div className="left-aboutus">
          <img
            src="./images/frant2.jpg"
            alt="aboutus"
            className="contact-image"
          />
        </div>
        <div className="right-aboutus">
          <p>
            Welcome to JuiceSphere, where we blend the finest, freshest fruits
            to create a symphony of flavors in every sip. At JuiceSphere , we
            are passionate about providing you with a refreshing and healthy
            experience.
          </p>
          <p>
            Our commitment to quality ensures that each bottle is crafted with
            care, delivering not just a beverage, but a rejuvenating moment of
            pure indulgence.
          </p>
          <p>
            Explore our diverse range of fruit and healthy juices, meticulously
            curated to cater to your taste buds and well-being. Join us on a
            journey to discover the goodness of nature in every drop. Cheers to
            a healthier, more vibrant you!
          </p>
        </div>
      </div>
    </div>
  );
}
