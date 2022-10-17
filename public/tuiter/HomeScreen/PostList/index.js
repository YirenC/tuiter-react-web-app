import PostItem from "./PostItem.js";
import posts from "./posts.js";
const PostList = () => {
  return `
           ${posts
             .map((p) => {
               return PostItem(p);
             })
             .join("")}
`;
};
export default PostList;
