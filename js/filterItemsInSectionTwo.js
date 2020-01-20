const btns = document.querySelectorAll(".partition");
const articles = document.querySelectorAll(".grid-item");
var grid = document.querySelector(".grid");
var brandingArticles = document.getElementsByClassName(".brandings");
console.log("brandingArticles " + brandingArticles[0]);
var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true
});
imagesLoaded(grid).on("progress", function() {
  // layout Masonry after each image loads
  msnry.layout();
});

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    articles.forEach(article => {
      article.remove();
      console.log("removed: " + article);
      msnry.layout();
    });
    msnry.layout();
    brandingArticles.forEach(art => {
      console.log("appended: " + art);
      grid.appendChild(art);
      msnry.layout();
    });

    // appendBack needed articles and msnry.layout();
  });
});
