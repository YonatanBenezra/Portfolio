import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ProjectsHeader from "./components/ProjectsHeader";
import "./projects.css";

const Hero = () => {
  const handleClick = (event) => {
    event.preventDefault();
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="row d-flex w-100">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center mid-margin-bottom-padding-top">
        <div className="row w-100">
          <ProjectsHeader />
        </div>
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-center">
            <a
              href="#fullstack-course"
              name="fullstack-course"
              className="caret-a"
              onClick={handleClick}
            >
              <AiFillCaretDown className="floating" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
        <ul className="big-list-ul">
          <li className="big-list">
            <a
              href="#fullstack-course"
              name="fullstack-course"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              Full <span className="secondary-projectpage">Stack</span> Cours
              <span className="">e</span>
            </a>
          </li>
          <li className="big-list">
            <a
              href="#goolo-tk"
              name="goolo-tk"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              Goolo{" "}
              <span className="secondary-projectpage">
                t<span className="">k</span>
              </span>
            </a>
          </li>
          <li className="big-list">
            <a
              href="#triple-i"
              name="triple-i"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              Triple-i <span className="secondary-projectpage">Group</span>
            </a>
          </li>
          <li className="big-list">
            <a
              href="#shaalilach"
              name="shaalilach"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              Shaali Lach <span className="secondary-projectpage">Kelim</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
