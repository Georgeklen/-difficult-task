const btn = document.querySelector('.btn');
const head = document.querySelector('.head');
const body = document.querySelector('.body');

btn.addEventListener('click', ()=> {
  let color = '#' + (Math.random().toString(16) + '000000').substring(2,8);
  body.style.backgroundColor = color;
  head.textContent = color;
});