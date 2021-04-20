import React from "react";
import GooloHeader2 from "./components/GooloHeader2";
import { BsLink45Deg } from "react-icons/bs";
import GooloGif from "./assets/Goolo-preview.mp4";
import ContactCTA from "../../projects/ContactCTA";
import AutoPlaySilentVideo from "../../../g-components/AutoPlaySilentVideo";
import "./Goolo.css";

const Goolo = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <GooloHeader2 />
        <div
          className="row w-100 project-section-container justify-content-center align-items-center"
          id="task"
        >
          <div className="col-xl-10 col-lg-12 textblock">
            <h4>- Task/Goal</h4>
              <h6>Buy a new jeans</h6>
            <p>
              After coming back from my 6 month trip to south america, I understood that the one Jeans
              I had the whole trip, is my only one jeans.
            </p>
            <h4>- How it went</h4>
            <p>
            So, what happens when the winter comes and you have only one jeans in the closet,
              but all the clothing stores are closed because a world-wide pandemic is loose?
              <br/>
              <br/>
              You search online! Thats what I thought too.
              <br/>
              I went from one site to another in order to double the amount of jeans I own, and not only
              that I didn't succeed, I mostly got exhausted from the continuos transfer between sites and categories.
              <br/>
              <br/>
              At this point I had a revelation, I am not good at buying clothes (I guess you figured that out already), especially online,
              but luckily for me in writing code, I am.
              <br/>
              <br/>
              Together with My friend Doron, We developed Goolo - A feature that learns your taste in clothings,
              and connects with existing online clothing shops to find you the clothes best suited for you.
              <br/>
              <br/>
              It did wonders for me, and helped me not only double but triple the amount of jeans I own :)
            </p>
              
              <h4>How does it work?</h4>
              <p>
              <strong>•</strong> You see a picture of a specific clothing and you swipe right if you like it or left if you don't (I know what your thinking, how didn't anyone think of this earlier, huh?).
              <br/>
              <br/>
              <strong>•</strong>The platform learns your preferences and saves it inside a database.
              <br/>
              <br/>
              <strong>•</strong>The platform suggests clothing based on your preferences thanks to our complex back-end algorithm.
              <br/>
              <br/>
              <strong>•</strong>You choose what you like, click on the picture and buy the product straight from the online shop. 
              <br/>
              <br/>
              I actually learned a lot from this building this application. 
              <br/>
              What I learned was not be afraid to do things your own way, and if no one did it before you, be the first!
              <br/>
              p.s - I do not really think I am the first to do this, don't worry, And am not trying to be cocky, but it was a first for me :)
              </p>
          </div>
          <div className="col-xl-7 col-lg-12 d-flex justify-content-center align-items-center">
            <div className="gif">
              <AutoPlaySilentVideo
                className="primary-gif"
                src1={GooloGif}
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
                  <h6><strong>- Approach</strong></h6>
                </div>
                <p>
                  We did not have much time, because laundry day was getting near and it was getting pretty cold outside.
                  <br/>
                  so the main approach was to work a lot, in this project I discovered the fun of working at night.
                  <br/>
                  besides just working a lot we had to be very efficient, our first steps were:
                  <br/>
                  <br/>
                  • think of the architecture of the application
                  <br/>
                  • open a <a traget="_blank" href="https://trello.com">trello</a> board and start organizing missions.
                  <br/>
                  <br/>
                  The first step for me was to get the data, and by that I mean to scrape more than seven thousand different products from a known site clothing site so our algorithm would have enough choices to choose from.
                  <br/>
                  The next steps were to:
                  <br/>
                  <br/>
                  • build the front end
                  <br/>
                  • develop the recommendations algorithm
                  <br/>
                  • create the login/registration pages
                  <br/>
                  • connect everything together.
                  <br/>
                  <br/>
                  It was actually simpler than we thought it would be, and super fun.
                  <br/>
                  The organization of the architecture and specific missions was one of the key points in my opinion, something that at least for me, gets lost in some projects.
                  <br></br>
                  <strong>I can surely say, this approach was a success</strong>
                </p>
              </div>
              <div className="col-xl-12 col-md-12 d-flex flex-column justify-content-center align-items-center textblock pt-2 pb-0 mb-0">
                <h6><strong>Technologies/notable dependencies</strong></h6>
                <ul>
                  <li>React</li>
                  <li>Mobx</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Sql</li>
                  <li>Sequelize</li>
                </ul>
              </div>
            </div>
            <div className="row w-100 pb-5 d-flex align-items-center no-gutters justify-content-center">
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6><strong>- AI/Machine learning/Recommendations algorithm</strong></h6>
                </div>
                <p>
                  This was my first time to handle any kind of AI algorithm, although it is not complex.
                  <br/>
                  The approach to writing the algorithm simply is something like this:
                  <br/>
                  <br/>
                  • Each user has weights
                  <br/>
                  • each weight has a key and value
                  <br/>
                  • Each clothing has attributes, for example: color: red, season: winter, Type: hoodie... and more.
                  <br/>
                  <br/>
                  Every time a user liked a specific clothing, the clothing's attributes would be added to the users weights.
                  <br/>
                  <br/> 
                  <b>For example:</b> if a user liked 10 shirts with the following attribute: "color: red", and 3 shirts with the attribute "color: yellow", then this specific user's "color" weight would look something like this: userID: 512, ColorWeight: &#123; red: 10, yellow: 3 &#125;
                  <br/>
                  <br/>
                  With this information the algorithm loops through the clothing data looking for clothings with at least 3 similar attributes.
                  <br/>
                  <br/>
                  Every time the algorithm finds a fit it subtracts the attributes used in the run, and keeps going until bringing enough clothings to recommend.
                  <br/>
                  If there are no more attributes because of the subtraction, the function runs once more.
                  <br/>
                  Thanks to this part of the functions, the amount of clothes with the color red will be 9/13
                  <br/>
                  and the amount of clothes with the color yellow will be 2/13.
                  <br/>
                  The missing two is because or random clothings the algorithm recommends to keep the recommendations more diverse.
                  <br/>
                  <br/>
                  After choosing the correct clothings for the specific user, a url to the original buying page of the product is attached to the photo so, when clicked, you are directed straight to the buying page.
                </p>
              </div>
            </div>
            <div className="row w-100 pb-5 justify-content-center" >
              <div className="col-xl-10 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6><strong>- Purpose/Pages/Screens</strong></h6>
                </div>
                <p>
                  The back-end offered a rich Database with more than 7,000 products, a recommendation's algorithm/function and a learning mechanism.
                  <br />
                  The site was intended to ease on the costumer, with this in mind I created
                  the flow as{" "}
                  <b>
                    Swipe {">"} Recommendations {">"} Buy
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
                    src1={GooloGif}
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

export default Goolo;