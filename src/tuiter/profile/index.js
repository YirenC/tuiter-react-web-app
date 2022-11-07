import React from "react";
import "./index.css"
import {useSelector} from "react-redux";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
                <div>
                    <img className="wd-banner-pic" src={profile.bannerPicture} alt=""/>
                    <div className="row">
                        <div className="col-4"><img className="wd-profile-pic rounded-circle float-right" src={profile.profilePicture} alt=""/></div>
                        <div className="col-5"></div>
                        <div className="col-3"><button className="btn btn-primary rounded-pill wd-profile-btn">Edit profile</button></div>
                    </div>
                    <div className="wd-profile-content">
                        <div>
                            <h1 className="fw-bolder">{profile.firstName} {profile.lastName}</h1>
                            <label>{profile.handle}</label>
                        </div>
                        <div>
                            {profile.bio}
                        </div>
                        <span className="row mt-2 ms-2">
                          <label className="wd-post-icon col-4" href="">
                            <i className=" fa-regular fa-message fa-1x"></i> {profile.location}
                          </label>
                            <label className=" wd-post-icon col-4" href="">
                            <i className="fa-regular fa-share-from-square fa-1x"></i> {profile.dateOfBirth}
                            </label>
                          <label className=" wd-post-icon col-4" href="">
                            <i className="fa fa-arrow-up-from-bracket fa-1x"></i> {profile.dateJoined}
                          </label>
                        </span>
                    </div>

                </div>

    );
};
export default ProfileComponent;