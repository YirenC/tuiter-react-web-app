import PostItem from "./PostItem.js";
import posts from "./posts.js";
const PostList = () => {
  return `
            <div class="card-body row"> 
           ${posts
             .map((p) => {
               return PostItem(p);
             })
             .join("")}
             </div>
`;
};
export default PostList;
