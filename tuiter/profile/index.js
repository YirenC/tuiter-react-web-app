import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  let profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <>
      <div>
        <img className="wd-banner-pic" src={profile.bannerPicture} alt="" />
        <div className="row">
          <div className="col-4">
            <img
              className="wd-profile-pic ms-3 rounded-circle float-right"
              src={profile.profilePicture}
              alt=""
            />
          </div>
          <div className="col-5"></div>
          <div className="col-3">
            <Link
              to="/tuiter/edit-profile"
              className="btn btn-primary rounded-pill wd-profile-btn"
            >
              Edit profile
            </Link>
          </div>
        </div>
        <div className="wd-profile-content">
          <div>
            <h1 className="fw-bolder">
              {profile.firstName} {profile.lastName}
            </h1>
            <label className="wd-profile-handle">{profile.handle}</label>
          </div>
          <br />
          <div>{profile.bio}</div>
          <br />
          <span className="row mt-2 ms-2">
            <label className="wd-post-icon col-4" href="">
              <i class="fa fa-location-pin wd-profile-icon"></i>{" "}
              {profile.location}
            </label>
            <label className="wd-post-icon col-4" href="">
              <i className="fa fa-cake-candles wd-profile-icon"></i>{" "}
              {profile.dateOfBirth}
            </label>
            <label className="wd-post-icon col-4 " href="">
              <i className="fa fa-calendar wd-profile-icon"></i>{" "}
              {profile.dateJoined}
            </label>
          </span>
        </div>
      </div>
    </>
  );
};
export default ProfileComponent;
