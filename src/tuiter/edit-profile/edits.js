import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile } from "../reducers/profile-reducer";

const Edits = () => {
  let profile = useSelector((state) => state.profile);

  let [oneName, setOneName] = useState("");
  let [secondName, setSecondName] = useState("");
  let [bio, setBio] = useState("");
  let [web, setWeb] = useState("");
  let [loc, setLoc] = useState("");
  let [bir, setBir] = useState("");
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    const newProfile = [oneName, secondName, bio, web, loc, bir];
    // {
    //   firstName: oneName,
    //   lastName: secondName,
    //   bio: bio,
    //   website: web,
    //   location: loc,
    //   dateOfBirth: bir,
    // };
    dispatch(editProfile(newProfile));
  };
  return (
    <div>
      <div>
        <div className="row mt-1">
          <img className="wd-banner-pic" src={profile.bannerPicture} alt="" />
          <div className="wd-save-edit-bar">
            <Link to="/tuiter/profile">
              <i className="fa fa-x wd-edit-profile-x mt-3"></i>
            </Link>{" "}
            <label className="">Edit Profile</label>
            <Link to="/tuiter/profile">
              <button
                className="mt-2 float-end wd-edit-save-btn rounded-pill"
                onClick={saveClickHandler}
              >
                Save
              </button>
            </Link>
          </div>
          <div className="col-4">
            <img
              className="ms-3 wd-profile-pic rounded-circle float-right"
              src={profile.profilePicture}
              alt=""
            />
          </div>
        </div>
        <form className="wd-edit-profile-content">
          <div className="ms-3 me-3 mb-3 wd-edit-div row">
            <div className="col-6">
              <label className="mt-2 ms-2 border-0">First Name</label>
              <input
                type="text"
                value={oneName}
                placeholder={profile.firstName}
                className="form-control border-0"
                onChange={(event) => setOneName(event.target.value)}
              ></input>
            </div>
            <div className="col-6">
              <label className="mt-2 ms-2 border-0">Last Name</label>
              <input
                type="text"
                value={secondName}
                placeholder={profile.lastName}
                className="form-control border-0"
                onChange={(event) => setSecondName(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="m-3 wd-edit-div">
            <label className="mt-2 ms-2 border-0">Bio</label>
            <textarea
              placeholder={profile.bio}
              value={bio}
              className="form-control border-0"
              onChange={(event) => setBio(event.target.value)}
            ></textarea>
          </div>
          <div className="m-3 wd-edit-div">
            <label className="mt-2 ms-2 border-0">Location</label>
            <input
              placeholder={profile.location}
              value={loc}
              className="form-control border-0"
              onChange={(event) => setLoc(event.target.value)}
            ></input>
          </div>
          <div className="m-3 wd-edit-div">
            <label className="mt-2 ms-2 border-0"> Website</label>
            <input
              placeholder={profile.website}
              value={web}
              className="form-control border-0"
              onChange={(event) => setWeb(event.target.value)}
            ></input>
          </div>
          <div className="m-3 wd-edit-div">
            <label className="mt-2 ms-2 border-0"> Date of Birth</label>
            <input
              value={bir}
              placeholder={profile.dateOfBirth}
              className="form-control border-0"
              onChange={(event) => setBir(event.target.value)}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Edits;
