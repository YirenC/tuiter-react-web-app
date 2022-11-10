import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fa fa-home fa-1x"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa-regular fa-hashtag fa-1x"></i> Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa-regular fa-bell fa-1x"></i> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa-regular fa-envelope fa-1x"></i> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa-regular fa-bookmark fa-1x"></i> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list fa-1x"></i> Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa-regular fa-user fa-1x"></i> Profile
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-ellipsis-h fa-1x"></i> More
            </a>
        </div>
);

};
export default NavigationSidebar;