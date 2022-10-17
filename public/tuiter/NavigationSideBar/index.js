const NavigationSidebar = (active) => {
  const ret = `
      <div class="list-group">
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
               <a href="" class="list-group-item list-group-item-action wd-left-list-item">
                <i class="fa-solid fa-t"></i>
            </a>
             <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action wd-left-list-item ${
      active == "home" ? "active" : ""
  }">
               <i class="fa fa-home fa-1x"></i><span class="d-none d-xl-inline"> Home</span> 
             </a>
             <a href="../ExploreScreen/index.html" id="explore" class="list-group-item list-group-item-action  wd-left-list-item ${
      active == "explore" ? "active" : ""
  }">
               <i class="fa fa-hashtag fa-1x"></i> <span class="d-none d-xl-inline">Explore</span> </a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-bell fa-1x"></i> <span class="d-none d-xl-inline">Notifications</span></a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-envelope fa-1x"></i> <span class="d-none d-xl-inline">Messages</span></a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-bookmark fa-1x"></i> <span class="d-none d-xl-inline">Bookmarks</span></a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-list fa-1x"></i> <span class="d-none d-xl-inline">Lists</span></a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-user fa-1x"></i> <span class="d-none d-xl-inline">Profile</span></a
             >
             <a href="" class="list-group-item list-group-item-action wd-left-list-item">
               <i class="fa fa-ellipsis-h fa-1x"></i> <span class="d-none d-xl-inline">More</span></a
             >    
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tuit</a>
      </div>
    `;
  const needActive = $("#" + active);
  console.log(needActive);
  needActive.addClass("active");
  return ret;
};
export default NavigationSidebar;
