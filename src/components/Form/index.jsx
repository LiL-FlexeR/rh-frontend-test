import React, { useState } from "react";
import PayPal from "../../assets/svg/paypal.svg";
import "./index.css";

const Form = () => {
  const [isChecked, setIsChecked] = useState(1)

  return (
    <div className="row">
      <div className="col s4 offset-s4">
        <form className="form-container">
          <p className="white-text p-heading">Your info</p>
          <div className="s-input-container">
            <label className="s-input-label">Name</label>
            <input placeholder="Enter your name" className="s-input" />
          </div>
          <div className="s-input-container">
            <label className="s-input-label">Last name</label>
            <input placeholder="Enter your last name" className="s-input" />
          </div>
          <div className="s-input-container">
            <label className="s-input-label">Email</label>
            <input placeholder="Enter your email" className="s-input" />
          </div>
          <p className="white-text p-heading">Select payment</p>
          <div>
            <div className="payment">
              <div className="payment-checkbox" onClick={() => setIsChecked(1)}>
                <div className={isChecked === 1 && `payment-checkbox-checked`}></div>
              </div>
              <div className="credit-card">
                <i className="material-icons credit-icon">payment</i>
                <input className="card-number" placeholder="Card number" />
                <input className="date" placeholder="MM/YY" />
                <input className="card-cvc" placeholder="CVC" />
              </div>
            </div>
            <div className="payment-paypal">
              <div className="payment-checkbox" onClick={() => setIsChecked(2)}>
                <div className={isChecked === 2 && `payment-checkbox-checked`}></div>
              </div>
              <div className="content">
                <div>
                  <img src={PayPal} />
                </div>
                <p>You’ill be redirected to paypal.com</p>
              </div>
            </div>
          </div>
          <p className="policy">
            By pledging, you agree with Lynq <span className="lighten">Terms of Use, Privacy Policy</span> and
            <span className="lighten">Cookie Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
