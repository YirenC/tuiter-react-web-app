const WhoToFollowListItem = (who) => {
  return `
        <div class="list-group-item fw-bold wd-follow-list-item">
            <div class="row">
                <div class="col-3">
                    <img src="${who.avatarIcon}" class="img-fluid" style="border-radius: 100%;" alt="..." />
                </div>
                <div class="col-6">
                    <span class="card-title" style="font-size: large; font-weight: bold">
                        ${who.userName}
                        <i class="fa fa-check-circle fa-1x"></i>
                    </span>
                    <br>
                    <label style="font-weight: 400;">@${who.handle}</label>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary wd-follow-btn">Follow</button>
                </div>
            </div>
        </div>
      `;
};
export default WhoToFollowListItem;
