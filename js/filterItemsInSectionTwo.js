const btns = document.querySelectorAll(".partition");
var grid = document.querySelector(".grid");

const allArticles = document.querySelectorAll(".grid-item");
const brandingArticles = document.querySelectorAll(".branding");
const logoArticles = document.querySelectorAll(".logo");
const wPressArticles = document.querySelectorAll(".wPress");
const webDesignArticles = document.querySelectorAll(".webDesign");
const uiuxArticles = document.querySelectorAll(".uiux");

const articlesList = [
  { node: allArticles, name: "all" },
  { node: brandingArticles, name: "branding" },
  { node: logoArticles, name: "logo" },
  { node: wPressArticles, name: "wPress" },
  { node: webDesignArticles, name: "webDesign" },
  { node: uiuxArticles, name: "uiux" }
];

// setting up masonry grid -------
var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true
});
imagesLoaded(grid).on("progress", function() {
  // layout Masonry after each image loads
  msnry.layout();
});

// Attaching events to each button
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    allArticles.forEach(article => {
      article.remove();
      msnry.layout();
    });
    msnry.layout();

    if (btn.id === "all") {
      allArticles.forEach(article => {
        grid.appendChild(article);
        msnry.layout();
      });
      return;
    } else {
      articlesList.forEach(article => {
        if (article.name === btn.id) {
          article.node.forEach(node => {
            grid.appendChild(node);
            msnry.layout();
          });
        }
      });
    }
  });
});
