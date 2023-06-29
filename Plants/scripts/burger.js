document.querySelector('.header__burger').addEventListener('click', function () {
  responsiveTopnav();
  console.log('1');
});
function responsiveTopnav() {
  console.log('2');
  let topnav = document.getElementsByClassName('navigation__list')[0];
  topnav.classList.toggle('navigation__list_expanded');
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