/** @format */

let upper = function () {
  document.body.scrollIntoView({ behavior: 'smooth' });
};

const header = document.querySelector('.header');
let scTop = 0;
window.addEventListener('scroll', function () {
  scTop = document.documentElement.scrollTop;
  if (scTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
