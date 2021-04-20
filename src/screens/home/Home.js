import React from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";
import AnimatedHeader from "./AnimatedHeader";
import SecondaryText from './SecondaryText';
import "./home.css";

const Home = (props) => {
  const history = useHistory();

  const handleTourClick = () => {
    history.push("/projects");
  };

  return (
    <div className="container">
      <div className="row main-body d-flex justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
          <AnimatedHeader />
          <p data-aos="fade-up" data-aos-delay="400">Fullstack Developer</p>
          <SecondaryText desktop={false} handleTourClick={handleTourClick} />
        </div>
        <SecondaryText desktop={true} handleTourClick={handleTourClick}/>
      </div>
    </div>
  );
};

export default Home;
