import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { connect } from "react-redux";
import { setShowSidebar } from "../state/actions";

import "./index.css";

const Nav = (props) => {
  const handleSidebarClick = () => {
    props.setShowSidebar(!props.showSidebar);
  };
  const handleClick = (event) => {
    event.preventDefault();
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="row w-100 d-flex align-items-end pt-4">
      <div className="col-xl-7 col-lg-7 col-md-2 col-sm-2 col-10 d-flex logo-flex align-items-center">
        <li className="nav-link col-12 pr-0 pl-0 home-link">
          <a className="nav-a pointer" href="/">
            <span className="primary">:</span>
            <span className="secondary">d</span>
            <span className="tertiary">e</span>
            <span className="success">v</span>
          </a>
        </li>
      </div>
      <div
        className="col-2 d-flex justify-content-end align-items-center hamburger-button"
        style={{ height: "100%" }}
        onClick={handleSidebarClick}
      >
        <BiMenuAltRight size={"32px"} onClick={handleSidebarClick} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <a className="nav-a pointer" href="/projects">
          <li className="nav-link secondary-link d-flex justify-content-center align-items-center">
            Projects
          </li>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger secondary"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center secondary">
          <a
            target="_blank"
            rel="noreferrer"
            className="nav-a pointer"
            href="https://drive.google.com/file/d/1qQnCIzc-hzVvmkNFHcoPKvyBykgZv5QB/view?usp=sharing"
          >
            Resume
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger tertiary"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center tertiary">
          <a className="nav-a pointer" href="https://github.com/yonatan119" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger success"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center success">
          <a
          rel="noreferrer"
            target="_blank"
            className="nav-a pointer"
            href="https://www.linkedin.com/in/yonatan119/"
          >
            Linkedin
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="1300"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <a
          href='#trigger-up'
          name='trigger-up'
          className="nav-a pointer"
          onClick={handleClick}
        >
          <li className="nav-link secondary-link d-flex justify-content-center align-items-center text-info">
            Contact
          </li>
        </a>
      </div>
    </nav>
  );
};

const mapState = (state) => {
  return {
    showSidebar: state.showSidebar,
  };
};

export default connect(mapState, { setShowSidebar })(Nav);
