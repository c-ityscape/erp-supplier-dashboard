import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowUp, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import "./Order.scss";

const Order = () => {
  return (
    <div className="order">
      <div className="topOrderDiv">
        <div className="orderInfo">
          <FontAwesomeIcon icon={faShoppingCart} className="shoppingCartIcon" />
          <div>
            <h2>Orders</h2>
            <span>32 orders delivered today</span>
          </div>
        </div>
        <button className="viewAllButton">View All</button>
      </div>
      <div className="bottomOrderDiv">
        <div className="order-box">
          <div>
            <span>New Orders</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="trendingIcon" />
            <span className="percentage">4.6%</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUp} className="upArrowIcon" />
            <span className="boldText">55</span>
            <span className="greyText">New Orders Received</span>
          </div>
        </div>
        <div className="order-box">
          <div>
            <span>New Orders</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="trendingIcon" />
            <span className="percentage">4.6%</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUp} className="upArrowIcon" />
            <span className="boldText">55</span>
            <span className="greyText">New Orders Received</span>
          </div>
        </div>
        <div className="order-box">
          <div>
            <span>New Orders</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="trendingIcon" />
            <span className="percentage">4.6%</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUp} className="upArrowIcon" />
            <span className="boldText">55</span>
            <span className="greyText">New Orders Received</span>
          </div>
        </div>
        <div className="order-box">
          <div>
            <span>New Orders</span>
            <FontAwesomeIcon icon={faArrowTrendUp} className="trendingIcon" />
            <span className="percentage">4.6%</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowUp} className="upArrowIcon" />
            <span className="boldText">55</span>
            <span className="greyText">New Orders Received</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
