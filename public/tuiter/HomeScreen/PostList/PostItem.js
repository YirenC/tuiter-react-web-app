const PostItem = (who) => {
  return `
    <div class="list-group-item fw-bold wd-homescreen " style="border: solid 1px rgb(87, 87, 87);">
        <div class="row mt-2">
          <div class="col-2">
            <img
              src="${who.avatarIcon}"
              class="img-fluid wd-home-icon"
              style="border-radius: 100%"
              alt="..."
            />
          </div>
          <div class="col-10">
            <span class="card-title" style="font-weight: bold; color: white">
              ${who.userName} <i class="fa fa-check-circle fa-1x"></i>
            </span>
            <label style="font-weight: 400; font-size: small; color: lightgray"
              >@${who.handle} · ${who.time}</label
            >
            <br />
            <span class="wd-post-title">${who.title}</span>
            <div class="card wd-card wd-post-card">
              <div>
                <img
                  src="${who.image}"
                  class="card-img-top wd-post-img"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="wd-post-big-title">${who.contentTitle}</h5>
                <p class="wd-post-content">
                  ${who.content}
                </p>
              </div>
            </div>
            <span class="row mt-2 ms-2">
              <a class="wd-post-icon col-3" href=""">
                <i class="fa-regular fa-message fa-1x"></i> ${who.discuss}</a
              >
               <a class="wd-post-icon col-3" href=""">
                <i class="fa-regular fa-share-from-square fa-1x"></i> ${who.forward}</a
              >
              <a class="wd-post-icon col-3" href=""">
                <i class="fa-regular fa-heart fa-1x"></i> ${who.like}</a
              >
              <a class="wd-post-icon col-3" href=""">
                <i class="fa fa-arrow-up-from-bracket fa-1x"></i></a
              ></span
              > 
          </div>
        </div>
      </div>
      `;
};
export default PostItem;
