import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
  <div class="input-group">
    <div class="col-10">
            <i class="fa fa-search fa-1x wd-icon"></i>
            <input
                    id = "input"
                    type="text"
                    class="form-control m-2 wd-input"
                    placeholder="   Search Tuiter"
                    style="border-radius: 20px"
            >

    </div>
    <a href="" class="ms-2 wd-cog" style="text-decoration:none;"><i class="fa fa-cog fa-1x "></i></a
        ></a> 
  </div>
  <ul class="nav nav-tabs mb-2">
    <li class="nav-item wd-selected">
      <a class="nav-link " href="for-you.html">For you</a>
    </li>
    <li class="nav-item wd-not-selected">
      <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item wd-not-selected">
      <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item wd-not-selected">
      <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item wd-not-selected">
      <a class="nav-link d-xxl-block d-none" href="entertainment.html">Entertainment</a>
    </li>
  </ul>
  <div class="card wd-card">
      <div>
          <img src="https://images2.alphacoders.com/112/thumb-1920-1128971.jpg" class="card-img-top" alt="..." />
          <span class="wd-img-title">SpaceX's Starship</span>
      </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
           </div>
    `;
};
export default ExploreComponent;
