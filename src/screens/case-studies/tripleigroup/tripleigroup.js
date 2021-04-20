import React from "react";
import TripleIHeader2 from "./components/TripleIHeader2";
import { BsLink45Deg } from "react-icons/bs";
import TripleIGif from "./assets/triple-i.webm";
import ContactCTA from "../../projects/ContactCTA";
import AutoPlaySilentVideo from "../../../g-components/AutoPlaySilentVideo";
import "./tripleigroup.css";

const TripleIGroup = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <TripleIHeader2 />
        <div
          className="row w-100 project-section-container justify-content-center align-items-center"
          id="task"
        >
          <div className="col-xl-10 col-lg-12 textblock">
            <h4><span className="primary">-</span> Task/Goal</h4>
            <h6>Teach the arts of trade in the capital market</h6>
            <p>
              Three people led a community of thousands of mostly young trade enthusiasts, this is their site.
              It is a combination of articles, lectures, social media possibilities and courses.
</p>
<div className="dropdown-divider pb-3"></div>
            <h4><span className="secondary">-</span> How it went</h4>
            <p>
              This project was quite long since the ux/ui was very important, the need to the keep the customer inside of the site for as long as possible.
              <br/>
              therefore it is needed that the site will be extremely comfortable and will contain all the potential costumer needs, Which is mostly knowledge.
  </p>
  <div className="dropdown-divider pb-3" style={{borderTop: "1px solid #FF3D57"}}></div>
            <h4><span className="tertiary">-</span>How does it work?</h4>
            <p>
              <strong>•</strong> You enter the home page and the the popular stocks live, popular courses and the last articles written.
              <br />
              <br />
              <strong>•</strong>You enter the articles page to read the rest of the articles.
              <br />
              <br />
              <strong>•</strong>You enter the lectures page to hear some lectures.
              <br />
              <br />
              <strong>•</strong>You potentially understand there is a lot to learn and buy a course or use one of the affiliated benefits.
              <br />
              <br />
              <strong>•</strong>The admins of the website upload more articles, more lectures, more benefits and more course.
              <br />
              <br />
              This is actually quite simple but has everything the customer needs.
              </p>
          </div>
          <div className="col-xl-7 col-lg-12 d-flex justify-content-center align-items-center">
            <div className="gif">
              <AutoPlaySilentVideo
                className="primary-gif"
                src1={TripleIGif}
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
                <div className="d-flex justify-content-start">
                  <h6><strong><span className="success">-</span> Approach</strong></h6>
                </div>
                <p>
                 This site was built while taking in consideration that the admins need an easy approach to upload articles, and change the site's data.
                 <br/>
                 The more convenient the use ={'>'} the more the admins change and upload, which potentially keeps the customer attached.
                 <br/>
                 Another consideration was that the website will contain many images and videos.
                 this consideration is the main reason I chose to build the site with gatsby with lazy load.
                 <br/>
                 For the back-end I used a headless CMS called Strapi, which helps the admins upload, update, change or delete data from the website.
                 <br/>
                 The front-end was mostly css. so I took a lot of styling courses and ux/ui courses to understand what this mission needs.
                 <br/> 
                  <strong>I can surely say, after much discussions, The site is a huge success, at least more then expected</strong>
                </p>
              </div>
              <div className="col-xl-12 col-md-12 d-flex flex-column justify-content-center align-items-center textblock pt-2 pb-0 mb-0">
                <h6><strong>Technologies/notable dependencies</strong></h6>
                <ul>
                  <li className="primary"><span>React</span></li>
                  <li className="secondary"><span>Gatsby</span></li>
                  <li className="tertiary"><span>GraphQL</span></li>
                  <li className="success"><span>Strapi</span></li>
                </ul>
              </div>
            </div>
            <div className="dropdown-divider pb-5" style={{borderTop: "1px solid #00D748"}}></div>
            <div className="row w-100 pb-5 justify-content-center" >
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6><strong><span className="secondary">-</span> Summary</strong></h6>
                </div>
                <p>
                  This was one of the most Css-oriented projects I developed, it was a blast working on it. 
                  <br />
                  The site was intended to ease on the costumer, with this in mind I created
                  the flow as{" "}
                  <b>
                    Stock-data {">"} Articles {">"} Lectures {">"} New uploads and all over {"↩"}
                  </b>
                  .
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
                    src1={TripleIGif}
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

export default TripleIGroup;