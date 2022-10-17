import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
  return `
            <div class="card-body row"> 
           ${posts
             .map((p) => {
               return PostSummaryItem(p);
             })
             .join("")}
             </div>
`;
};
export default PostSummaryList;
