const hide = document.querySelector('.dropdown-content');
const zichtbaar = document.querySelector('.dropdown');

hide.addEventListener('click', function () {
  hide.style.visibility = 'hidden';
})
zichtbaar.addEventListener('mouseover', function () {
  hide.style.visibility = 'visible';
})


//WHITE
const backW = document.querySelector('#myDropdown .h');
const white = document.querySelector('.background');

backW.addEventListener('click', function () {
  white.className = "home";
  document.querySelector('.h1').innerHTML = "The background is now White";
})


//RED
const backR = document.querySelector('#myDropdown .r');
const home = document.querySelector('.background');

backR.addEventListener('click', function () {
  home.className = 'red';
  document.querySelector('.h1').innerHTML = "The background is now Red";

})

//ORANGE
const backO = document.querySelector('#myDropdown .o');
const orange = document.querySelector('.background');

backO.addEventListener('click', function () {
  orange.className = 'orange';
  document.querySelector('.h1').innerHTML = "The background is now Orange";

})

//PURPLE
const backP = document.querySelector('#myDropdown .p');
const purple = document.querySelector('.background');

backP.addEventListener('click', function () {
  purple.className = 'purple';
  document.querySelector('.h1').innerHTML = "The background is now Purple";

})

//GREEN
const backG = document.querySelector('#myDropdown .g');
const green = document.querySelector('.background');

backG.addEventListener('click', function () {
  green.className = 'green';
  document.querySelector('.h1').innerHTML = "The background is now Green";

})

//BLUE
const backB = document.querySelector('#myDropdown .b');
const blue = document.querySelector('.background');

backB.addEventListener('click', function () {
  blue.className = 'blue';
  document.querySelector('.h1').innerHTML = "The background is now Blue";

})

//YELLOW
const backY = document.querySelector('#myDropdown .y');
const yellow = document.querySelector('.background');


backY.addEventListener('click', function () {
  yellow.className = 'yellow';
  document.querySelector('.h1').innerHTML = "The background is now Yellow";

})