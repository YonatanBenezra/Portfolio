import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import './home.css';

const SecondaryText = ({ handleTourClick, desktop }) => {
  const [desktopClass] = useState(desktop);


    return (
        <div data-aos="fade-up" data-aos-delay="1300" className={`${desktopClass === true ? `xl-up red` : `lg-down`} col-6`}>
          <h5>
            Take&nbsp;the&nbsp; 
            <span className="secondary link" onClick={handleTourClick}>
                tour
            </span>
          </h5>
          <BsArrowReturnRight />
        </div>
    );
};
export default SecondaryText;