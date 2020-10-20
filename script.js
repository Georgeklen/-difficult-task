'use strict';

window.addEventListener("DOMContentLoaded", () => {
    // Плавная прокрутка
    const scrolling = (el) => {
      if (el.href === undefined) return;
      let link = el.href.split('#')[1];
      document.querySelector('#'+link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

  const scrolHead = () => {
    const btnScrolling = document.querySelector('a[href="#service-block"]');
    btnScrolling.addEventListener('click', (evt) => {
        evt.preventDefault();
        scrolling(btnScrolling);
    });
  };
  scrolHead();
});