import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const TripleIHeader2 = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="row w-100 padding-top-mobile d-flex justify-content-center align-items-center">
      <div className="col-12 case-study-header-container d-flex justify-content-center align-items-end">
        <div className="row w-100 d-flex flex-column justify-content-end">
          <div className="col-12 d-flex justify-content-center align-items-end" id="full-stack-title">
            <span
              data-aos="fade-up"
              data-aos-delay="25"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              T
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              r
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              i
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              p
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              l
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              e
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center pt-4">
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              i
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              g
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              r
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              o
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              u
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
              data-aos-anchor=".nav-a"
            >
              p
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <a
              href="#full-stack-title"
              name="task"
              className="caret-a pt-2 pb-2"
              onClick={handleClick}
            >
              <AiFillCaretDown className="floating d-flex justify-content-center m-0 p-0 mb-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleIHeader2;
