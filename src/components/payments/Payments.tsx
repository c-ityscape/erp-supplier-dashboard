import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import "./Payments.scss";

const Payments = () => {
  return (
    <div className="payments">
      <div className="topPaymentDiv">
        <div className="paymentInfo">
          <FontAwesomeIcon icon={faDollarSign} className="dollarIcon" />
          <div>
            <h2>Payments</h2>
            <p>10000 orders Received today</p>
          </div>
        </div>
      </div>
      <div className="bottomPaymentDiv">
        <div className="payment-box-1">
          <div className="recieved">
            <span>Amount Received</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="trendingIconUp" />
            <span className="percentage up" >4.6%</span>
          </div>
          <div className="limeGreenBox">
            <span>120,000 INR</span>
            <p>Credited</p>
          </div>
        </div>
        <div className="payment-box-2">
          <div className="balance">
            <span>Total Balance</span>
            <FontAwesomeIcon icon={faArrowTrendDown} className="trendingIconDown" />
            <span className="percentage down">25.6%</span>
          </div>
          <div className="tomatoBox">
            <span>320,000 INR </span>
            <p>Debited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
