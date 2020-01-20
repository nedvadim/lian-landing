const gridItem = document.querySelectorAll(".grid-item");
const gridItemWrapper = document.querySelectorAll(".grid-item-wrapper");

for (var i = 0; i < gridItem.length; i++) {
  (function(index) {
    gridItem[index].addEventListener("mouseover", function() {
      gridItemWrapper[index].style.opacity = "0.4";
    });
    gridItem[index].addEventListener("mouseleave", function() {
      gridItemWrapper[index].style.opacity = "0";
    });
  })(i);
}
