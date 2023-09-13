//navbar services
const servicesLink = document.querySelector(".navbar .container ul li.sub a");
servicesLink.onclick = (e) => {
  e.preventDefault();
};

const prev = document.querySelectorAll(".navbar ul li.sub ul li a");

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


