import React from "react";
// import ProfileImg from '../../assets/png/ben-burns-1.png'
import ProfileImg from "assets/png/ben-burns-1.png";
import "./index.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container row">
        <div className="col offset-s4 s4 sample h100">
          <div className="profile">
            <div className="profile-img">
              <img src={ProfileImg} />
            </div>
            <p className="name white-text">Ben Burns</p>
          </div>
          <div className="breadcrumbs">
            <span className="onix-gray">Select date & time</span>
            <i class="material-icons tiny onix-gray">arrow_forward</i>
            <span className="soft-gray">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
