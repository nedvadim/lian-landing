const btns = document.querySelectorAll(".filter-button");
var grid = document.querySelector(".grid");

const allArticles = document.querySelectorAll(".grid-item");
const articlesSections = [
  { node: allArticles, name: "all" },
  { node: document.querySelectorAll(".branding"), name: "branding" },
  { node: document.querySelectorAll(".logo"), name: "logo" },
  { node: document.querySelectorAll(".wPress"), name: "wPress" },
  { node: document.querySelectorAll(".webDesign"), name: "webDesign" },
  { node: document.querySelectorAll(".uiux"), name: "uiux" }
];

// Setting up Masonry Grid ----
var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true
});
imagesLoaded(grid).on("progress", function() {
  // layout Masonry after each image loads
  msnry.layout();
});
//-----------------------------

// Attaching events to each button
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.id === "all") {
      attachAllArticles();
      return;
    }
    deleteAllArticlesFromGrid();
    articlesSections.forEach(section => {
      appendAppropriateArticle(section, btn.id);
    });
  });
});
function attachAllArticles() {
  allArticles.forEach(article => {
    grid.appendChild(article);
    msnry.layout();
  });
}
function deleteAllArticlesFromGrid() {
  allArticles.forEach(article => {
    article.remove();
    msnry.layout();
  });
}
function appendAppropriateArticle(section, buttonId) {
  if (section.name === buttonId) {
    section.node.forEach(node => {
      grid.appendChild(node);
      msnry.layout();
    });
  }
}
