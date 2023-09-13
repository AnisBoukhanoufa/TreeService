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

//navbar services
const servicesLink = document.querySelector(".navbar .container ul li.sub a");
servicesLink.onclick = (e) => {
  e.preventDefault();
};

const prev = document.querySelectorAll(".navbar ul li.sub ul li a");

// prev.forEach((element) => {
//   console.log(element)
//   element.onclick = (event) => {
//     // event.preventDefault();
//   };
// });

const servicesButton = document.querySelector(".navbar .container ul li.sub");
const arrowDown = document.querySelector(
  ".navbar .container ul li.sub .fa-angle-right"
);
const listServices = document.querySelector(
  ".navbar .container ul li .nav-serv"
);
servicesButton.addEventListener("click", () => {
  arrowDown.classList.toggle("down");
  listServices.classList.toggle("disp");
  servicesButton.classList.toggle("togled");
});

document.body.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target !== servicesLink) {
    arrowDown.classList.remove("down");
    listServices.classList.remove("disp");
    servicesButton.classList.remove("togled");
  }
});
// +++++++++++++++++++++++++++++++

const navbarButton = document.querySelector(".navbar .container>i");
const navbar = document.querySelector(".navbar .container>ul");
navbarButton.addEventListener("click", () => {
  navbar.classList.toggle("clicked");
  navbarButton.classList.toggle("clicked");
});

document.body.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target !== navbar && event.target !== navbarButton) {
    navbar.classList.remove("clicked");
    navbarButton.classList.remove("clicked");
  }
});
// document.body.addEventListener("click", (event) => {
//   console.log(event.target)
//   event.stopPropagation();
//   if (event.target !== navbar && event.target !== navbarButton) {
//     navbar.classList.toggle("clicked");
//     navbarButton.classList.toggle("clicked");
//   }
// },true);