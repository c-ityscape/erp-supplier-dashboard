import React from "react";
import { topDealUsers } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Activity.scss";

const Activity = () => {
  return (
    <div className="activity">
      <div className="header">
        <h1>Activity log</h1>
        <FontAwesomeIcon icon={faFilter} className="filterIcon" />
      </div>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="time">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
