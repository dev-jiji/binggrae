/** @format */

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

let arrow = document.querySelector('.upper img');
addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY == 0
    ? (arrow.style.transform = 'rotate(180deg)')
    : (arrow.style.transform = 'rotate(0deg)');
});

let upper = () => {
  let pos = 0;
  arrow.style.transform === 'rotate(180deg)'
    ? (pos = document.body.scrollHeight)
    : (pos = 0);
  window.scrollTo({
    top: pos,
    behavior: 'smooth',
  });
};

const hamMenu = document.getElementById('hamMenu');
const bodyRoot = document.querySelector('body');
const hamButton = document.getElementById('mbt');
const span1 = document.querySelector('.mbt > span:nth-child(1)');
const span2 = document.querySelector('.mbt > span:nth-child(2)');
const span3 = document.querySelector('.mbt > span:nth-child(3)');

const showMenu = function () {
  hamMenu.classList.toggle('active');
  bodyRoot.classList.toggle('active');
  hamButton.classList.toggle('active');
  span1.classList.toggle('active');
  span2.classList.toggle('active');
  span3.classList.toggle('active');
};

hamButton.addEventListener('click', showMenu);
