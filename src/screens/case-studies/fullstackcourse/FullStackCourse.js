import React from "react";
import FullStackCourseHeader2 from "./components/FullStackCourseHeader2";
import { BsLink45Deg } from "react-icons/bs";
import FullStackGif from "./assets/Presentense-fullstack-Preview.mp4";
import ContactCTA from "../../projects/ContactCTA";
import AutoPlaySilentVideo from "../../../g-components/AutoPlaySilentVideo";
import "./FullStackCourse.css";

const FullStackCourse = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <FullStackCourseHeader2 />
        <div
          className="row w-100 project-section-container justify-content-center align-items-center"
          id="task"
        >
          <div className="col-xl-10 col-lg-12">
            <h4>- Task/Goal</h4>
              <h6>Teach students to be fullstack developers in 24 hours</h6>
            <p>
              A small explanation: 
              <br/>
              Not long ago, I started building a course for 13 asylum seekers and this is how it went.
            </p>
            <h4>- How it went</h4>
            <p>
            <strong>stage 1: optimism</strong>
            <br/>
              "All I need is to teach them the technologies needed! I got this"
              A few moments later..
              <br/>
              <br/>
              <strong>stage 2: realism (that was quick.)</strong>
              <br/>
              "Oh wait, there is html, css, js, node,js, express, mongoDB, react, mobx...
              thats alot to learn!
              Ok, so I will start with the basic html/css afterwards ge to the back end and then teach them the react framework because it is comparily easy to understand.
              sounds logical.
              I have only 2 hours a week for three months.
              <br/>
              <br/>
              <strong>stage 3: optimism!</strong>
              <br/>
              thats ok, because who can not learn how to build a fullstack application in 24 hours right?
              <br/>
              <br/>
              <strong>stage 4: back to realism, yet again.. pretty quick huh?</strong>
              <br/>
              Ok, maybe this wont be so easy after all.
              I start teaching in two weeks and 24 hours is not really enough.
              so what do I do?
              Google it! The correct answer to all the questions."
              <br/>
              I found out about an awesome learning platforms called lms, or lxp.
              the problem is that the course is run by a non-profit organization so buying an lxp is not in the budget.
              <br/>
              <br/>
              <strong>stage 5: Rationalism</strong>
              <br/>
              "Well.. maybe I could build a simple lxp in one week and write the content on the second?
              that sounds rational!"
              I know.. I tend to think that a lot of things are rational.
            </p>
              
              <h4>How does it work?</h4>
              <p>
              <h6>There are 3 important pages</h6>
              <strong>"lessons" -</strong> which in it you can learn about each technology.
              <br/>
              <br/>
              <strong>"projects" - </strong>After every subject you need to complete the project as well, because I believe in learning through projects.
              <br/>
              <br/>
              <strong>"Links" - </strong>for whenever you just don't get it, or want to exercise.
              <br/>
              <br/>
              The students started using it on tuesday and its a hit :)
              <br/>
              I hope you enjoyed being in my mind for a minute :)
              </p>
          </div>
          <div className="col-xl-7 col-lg-12 d-flex justify-content-center align-items-center">
            <div className="gif">
              <AutoPlaySilentVideo
                className="primary-gif"
                src1={FullStackGif}
                />
            </div>
          </div>
        </div>
        <div className="row w-100 d-flex justify-content-center pt-5">
          <div className="col-xl-12 d-flex justify-content-center align-items-center pb-2 pt-3 mb-2">
            <h3>Strategy</h3>
          </div>
          <div className="col-12">
            <div className="row w-100 pb-5 d-flex align-items-center no-gutters justify-content-center">
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-center">
                  <h6><strong>- Approach</strong></h6>
                </div>
                <p>
                  Since I had only a sum of 24 hours to be with the students, the approach was to help them learn by their own.
                  <br/>
                  Dont worry, I didn't leave them hanging with just the tip "learn by yourself" because,
                  <br/>
                  that won't be very smart or nice or "me doing the job I was paid for".
                  <br/>
                  <br/>
                  I built an e-learning platform with material that covers everything they need.
                  <br/>
                  With a project based on each set of materials learned, exercises and helpful links.
                  <br/>
                  Along with the e-learning platform was a mentor attached to each student.
                  <br></br>
                  <strong>I can surely say, this approach was a success</strong>
                </p>
              </div>
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-center textblock pt-2 pb-0 mb-0">
                <h6><strong>Technologies/notable dependencies</strong></h6>
                <ul>
                  <li>React</li>
                  <li>Python</li>
                  <li>Self-made Api</li>
                  <li>Material-Ui</li>
                  <li>Styled Components</li>
                </ul>
              </div>
            </div>
            <div className="row w-100 pb-5 d-flex align-items-center no-gutters justify-content-center">
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6><strong>- Color Palette</strong></h6>
                </div>
                <p>
                  The site was meant for long reading at day or night so I
                  took that into mind with the design,
                  <br/>
                  deciding that it would be best to keep a simple but arousing palette with, of course, 
                  a dark theme(For night time) and a bright theme(For day time).
                  <br/>
                  This would allow The students to learn throughout the whole day and not get bored.
                  <br/>
                  <br/>
                  The navbar is on the side with an option to expand or collapse for better reading.
                  <br/>
                  <b>
                    Ideally, users would be able to navigate through the site and use it
                    without any instructions.
                  </b>
                </p>
              </div>
            </div>
            <div className="row w-100 pb-5 justify-content-center" >
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6><strong>- Purpose/Pages/Screens</strong></h6>
                </div>
                <p>
                  The back-end offered a rich self-made api with all the material, lessons, projects, important links, students and mentors.
                  <br />
                  The course was intended to be very ease to use, with this in mind I created
                  the flow as{" "}
                  <b>
                    Lesson {">"} Project {">"} Links (for help and exercises)
                  </b>
                  .
                  <br/>
                  every lesson and project has a date, lessons for starting and projects for finishing
                </p>
              </div>
            </div>
            <div className="row w-100 mt-3 pb-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <h4>
                  <a
                    rel="noreferrer"
                    target="blank"
                    href={"https://presentense-fullstack.netlify.com/"}
                    className="link-primary-color"
                  >
                    View live{" "}
                    <span className="secondary animated-underline-2 underline-base pseudo-link">
                      Demo
                    </span>
                    <BsLink45Deg />
                  </a>
                </h4>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center ">
                <div className="gif">
                  <AutoPlaySilentVideo
                    className="primary-gif"
                    src1={FullStackGif}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <ContactCTA />
      </div>
    </>
  );
};

export default FullStackCourse;
