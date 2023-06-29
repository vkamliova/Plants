document.querySelector('.header__burger').addEventListener('click', function () {
  toggleBurger();
});
document.querySelector('.header__nav-close').addEventListener('click', function () {
  toggleBurger();
});
document.querySelector('.header__navigation-active').addEventListener('click', function () {
  toggleBurger();
});
function toggleBurger() {
  let topnav = document.getElementsByClassName('navigation__list')[0];
  let btnClose = document.getElementsByClassName('header__nav-close')[0];
  topnav.classList.toggle('navigation__list_expanded');
  btnClose.classList.toggle('header__nav-close_visible');
}

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const scrollto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";

    document.querySelector(scrollto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}