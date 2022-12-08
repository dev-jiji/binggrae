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

let upper = function () {
  document.body.scrollIntoView({ behavior: 'smooth' });
};

const hamButton = document.querySelector('.mbt');
const hamMenu = document.querySelector('.hamMenu');
const bodyRoot = document.querySelector('body');  
const span1 = document.querySelector('.mbt > span:nth-child(1)');
const span2 = document.querySelector('.mbt > span:nth-child(2)');
const span3 = document.querySelector('.mbt > span:nth-child(3)');

const showMenu = function () {
  hamButton.classList.toggle('active');
  hamMenu.classList.toggle('active');
  bodyRoot.classList.toggle('active');
  span1.classList.toggle('active');
  span2.classList.toggle('active');
  span3.classList.toggle('active');
};

hamButton.addEventListener('click', showMenu);

