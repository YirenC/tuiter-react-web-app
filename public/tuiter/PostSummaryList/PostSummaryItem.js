const PostSummaryItem = (who) => {
  return `
  <div class="card-body row">
    <div class="col-9">
        <h6 style="color: lightgray">${who.topic}</h6>
        <h5 class="card-title" style="font-weight: bold">
        ${who.userName}
        <i class="fa fa-check-circle fa-1x"></i>
        <label style="color: lightgray; font-weight: 500"> -${who.time} </label>
        </h5>
        <p class="card-text">
        ${who.title}
        </p>
        <label style="color: lightgray; font-weight: bold">${who.tweets}</label>
    </div>

    <div class="col-lg-2 col-xl-3">
        <img src="${who.image}" class="img-fluid d-block mt-5" style="border-radius: 10px;" alt="..." />
    </div>
  </div>
    `;
};
export default PostSummaryItem;
