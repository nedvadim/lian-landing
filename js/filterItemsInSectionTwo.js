const btns = document.querySelectorAll(".partition");
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

// Setting up Masonry Grid
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
  // If "all" button was clicked - append all articles and return;
  btn.addEventListener("click", () => {
    if (attachAllArticlesIfNeeded(btn.id)) {
      return; // If "all" button was clicked, then articles was attached in function above. Return from current function
    }
    deleteAllArticlesFromGrid();
    articlesSections.forEach(section => {
      appendAppropriateArticle(section, btn.id);
    });
  });
});

function attachAllArticlesIfNeeded(buttonId) {
  if (buttonId === "all") {
    allArticles.forEach(article => {
      grid.appendChild(article);
      msnry.layout();
    });
    return true;
  }
  return false;
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
