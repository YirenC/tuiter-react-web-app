import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    // const todos
    //     = useSelector(state => state.todos);
    // const [todo, setTodo] = useState({do: ''});
    // const dispatch = useDispatch();
    // const toggleTodoDone = (todo) => {
    //     dispatch(todoDoneToggle(todo))
    // }
    //
    // const deleteTodoClickHandler = (index) => {
    //     dispatch(deleteTodo(index))
    // }
    //
    // const createTodoClickHandler = () => {
    //     dispatch(addTodo(todo))
    // }
    //
    // const todoChangeHandler = (event) => {
    //     const doValue = event.target.value;
    //     const newTodo = {
    //         do: doValue
    //     };
    //     setTodo(newTodo);
    // }
    return(
        <div>
            <span className="wd-edit-span">Edit profile <button className="wd-edit-btn">Save</button></span>
            <img className="wd-banner-pic" src={profile.bannerPicture} alt=""/>
            <div className="row">
                <div className="col-4"><img className="wd-profile-pic rounded-circle float-right" src={profile.profilePicture} alt=""/></div>
                <div className="col-5"></div>
            </div>
            <div className="wd-edit-profile-content">
                <div>
                    <div>
                        <div className="input-group">
                            <span className="input-group-text">Name</span>
                            <br/>
                            <input
                                value={`${profile.firstName} ${profile.lastName}`}
                                className="form-control"/>
                        </div>

                    </div>
                    <br/>
                    <div>
                        <div className="input-group">
                            <span className="input-group-text">Bio</span>
                            <input
                                value={`${profile.bio}`}
                                className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="input-group">
                        <span className="input-group-text">Location</span>
                        <input
                            value={`${profile.location}`}
                            className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="input-group">
                        <span className="input-group-text">Website</span>
                        <input
                            value={`${profile.website}`}
                            className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="input-group">
                        <span className="input-group-text">Date of birth</span>
                        <input
                            value={`${profile.dateOfBirth}`}
                            className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default EditProfileComponent;