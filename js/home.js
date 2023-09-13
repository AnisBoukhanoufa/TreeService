// scroll reviews
const scrollableArea = document.getElementsByClassName("review-container")[0];
const scrollAmount =
  document.getElementsByClassName("reviews-box")[0].offsetWidth;
const rightScrollButton = document.getElementsByClassName("fa-angle-right")[1];
const leftScrollButton = document.getElementsByClassName("fa-angle-left")[0];

rightScrollButton.addEventListener("click", () => {
  scrollableArea.scrollLeft += scrollAmount + 40;
});
leftScrollButton.addEventListener("click", () => {
  scrollableArea.scrollLeft -= scrollAmount + 40;
});
