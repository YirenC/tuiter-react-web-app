import React from "react";
import  '@fortawesome/fontawesome-free/css/all.min.css'
const HomePostItem = (
    {
        post = {
            "avatar":"",
            "userName": "SpaceX",
            "handle":"SpaceX",
            "time": "2h",
            "content": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "comment":"",
            "retuit":"",
            "like":"",
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={40} className="rounded-5" src={`${post.avatar}`}/>
                </div>
                <div className="col-11">
                    <div><label className="wd-home-post-title">{post.userName}</label> <label className="wd-home-post-handle">@{post.handle} · {post.time}</label> </div>
                    <div>{ post.content}</div>
                    <div className="card rounded-3">
                        <img width={100} className="rounded-3 card-img-top" src={`${post.image}`}/>
                    </div>
                    <span className="row mt-2 ms-2">
                        <a className="col-3 wd-home-icon" href="">
                            <i className=" fa-regular fa-message fa-1x"></i> {post.comment}
                        </a>
                        <a className="col-3 wd-home-icon" href="">
                            <i className="fa-regular fa-share-from-square fa-1x"></i> {post.retuit}
                        </a>
                        <a className="col-3 wd-home-icon" href="">
                            <i className="fa-regular fa-heart fa-1x"></i> {post.like}
                        </a>
                        <a className="col-3 wd-home-icon" href="">
                            <i className="fa fa-arrow-up-from-bracket fa-1x"></i>
                        </a>
                    </span>
                </div>
            </div>
        </li>
    );
};
export default HomePostItem;