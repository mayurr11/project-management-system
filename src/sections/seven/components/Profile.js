import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faHeart,
  faUsers,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/images/avatar.jpg";
import "./Profile.css";

const Profile = ({ userName, activeTab, setActiveTab }) => {
  const designation = "React Developer";

  return (
    <div className="profile-container">
      <img src={avatar} alt="user" className="profile-image" />
      <ul className="profile-info">
        <li>{userName}</li>
        <li>{designation}</li>
      </ul>
      {/* <nav className="profile-nav">
        <ul className="profile-nav-items">
          <li>
            <button
              className={activeTab === "Profile" ? "selected" : ""}
              onClick={() => setActiveTab("Profile")}
            >
              <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: "8px" }} />
              Profile
            </button>
          </li>
          <li>
            <button
              className={activeTab === "Followers" ? "selected" : ""}
              onClick={() => setActiveTab("Followers")}
            >
              <FontAwesomeIcon icon={faHeart} style={{ marginRight: "8px" }} />
              Followers
            </button>
          </li>
          <li>
            <button
              className={activeTab === "Friends" ? "selected" : ""}
              onClick={() => setActiveTab("Friends")}
            >
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px" }} />
              Friends
            </button>
          </li>
          <li>
            <button className={activeTab === "Gallery" ? "selected" : ""} onClick={() => setActiveTab("Gallery")}
            >
              <FontAwesomeIcon icon={faImages} style={{ marginRight: "8px" }} />
              Gallery
            </button>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

// Add PropTypes validation
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Profile;
