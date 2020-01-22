const btns = document.querySelectorAll(".partition");
var grid = document.querySelector(".grid");
const articles = document.querySelectorAll(".grid-item");

const allArticles = document.querySelectorAll(".all");
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
  { node: uiux, name: "uiux" }
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
    articles.forEach(article => {
      article.remove();
      msnry.layout();
    });
    msnry.layout();

    console.log("btn.id:  " + btn.id);

    articlesList.forEach(article => {
      if (article.name === btn.id) {
        console.log(article);
        article.node.forEach(node => {
          grid.appendChild(node);
          msnry.layout();
        });
      }
    });

    // brandingArticles.forEach(art => {
    //   grid.appendChild(art);
    //   msnry.layout();
    // });

    // appendBack needed articles and msnry.layout();
  });
});
