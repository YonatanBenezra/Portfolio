import React from "react";
import "./projects.css";
// import { FaGithub } from "react-icons/fa";
// import { IconContext } from "react-icons";

const ContactCTA = () => {
  return (
    <div className="row w-100 fluid m-0 contact-cta-container d-flex justify-content-center">
      <div
        className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center white-text"
        id="trigger-up"
      >
        <h2 className="white-text">
          <span
            // data-aos="fade-up"
            // data-aos-delay="25"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            C
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="100"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            o
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="125"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            n
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="50"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            t
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            a
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="20"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            c
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="hover-up white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            t
          </span>
        </h2>
        <p className="stat-center m-0">
          <a
            target="blank"
            href="www.linkedin.com/in/yonatan119"
            className="animated-underline-3 underline-base white-link"
            id="trigger-up"
          >
            LinkedIn
          </a>
          <span className="secondary"> | </span>
          <a
            target="blank"
            href="https://github.com/yonatan119"
            className="animated-underline-3 underline-base white-link"
          >
            Github
          </a>
          <span className="secondary"> | </span>
          <a
           target="blank"
            href="https://drive.google.com/file/d/1IygjsoECAc5GHHvfGNyu393tzPc7V72E/view?usp=sharing"
            className="animated-underline-3 underline-base white-link"
          >
            Resume
          </a>
          <span className="secondary"> | </span>
          <a
            target="blank"
            href="https://wa.me/+972534355700"
            className="animated-underline-3 underline-base white-link"
          >
            Contact
          </a>
        </p>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
        <br />
        <h5
          className="white-text m-0"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          <span className="secondary">|</span> Yonatan Benezra, 2021.
        </h5>
      </div>
    </div>
  );
};

export default ContactCTA;
