import React from "react";
import postsArray from './home-posts.json';
import HomePostItem from "./home-post-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <HomePostItem
                                       key={(post._id)} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;