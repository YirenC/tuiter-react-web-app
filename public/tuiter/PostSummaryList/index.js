import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
  return `
           ${posts
             .map((p) => {
               return PostSummaryItem(p);
             })
             .join("")}
`;
};
export default PostSummaryList;
