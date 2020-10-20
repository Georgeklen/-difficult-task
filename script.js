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

  // таймер
  function countTimer(deadLine){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            
            return{timeRemaining, hours, minutes, seconds};
           
    }
    
    function updateClock() {
        let timer = getTimeRemaining();

        //add zero
        let addZero = function(num){
            if (num >= 0 && num < 10) { 
                  return '0' + num;
              } else {
                  return num;
              }
          };
        
        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        if(timer.timeRemaining < 0){ 
            clearInterval(idInterval); 

            timerHours.textContent = '00'; 
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
      
    }
    
    let idInterval = setInterval(updateClock, 1000);
    
}
countTimer('21, oct , 2020');


  // меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItem = menu.querySelectorAll('ul>li');
    
    let count = 0;
    // анимация
    const animate = () => {
        let requestId = requestAnimationFrame(animate);
        count += 4;
        menu.style.transform = `translate(${count}%)`;
        if (count === 100) {
            cancelAnimationFrame(requestId);
        }
    };

    const handlerMenu = (evt) => {
        evt.preventDefault();
        if (evt.target.tagName === 'A' && evt.target.className !== 'close-btn') {
          scrolling(evt.target);
        }
        
        if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
          count = -100;
          animate();
        } else {
          if (evt.target.tagName === 'A') {
            menu.style.transform = `translate(-100%)`;
          }
        }  
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItem.forEach(el => {
        el.addEventListener('click', handlerMenu);
    });

  };
  toggleMenu();
 

 // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');

    popupBtn.forEach(el => {
        el.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
  };
  
  // togglePopup();
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });
    
    
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        }   else {
         
            target = target.closest('.popup-content');
            if(!target) {
                popup.style.display = 'none';
            }
        }
    });

    // modmenu
    popupBtn[0].addEventListener('click', ()=> {
    let count = 0;
    let menuAnimate = (function() {
      count++;
    
      if(count < 150) {
        popupContent.style.top = count + 'px';
        setTimeout(menuAnimate, 0.1)
      } 
      if (document.documentElement.clientWidth < 768) {
        popup.style.display = count = 0;
    }
    })
   
  menuAnimate()
    })
// modmenu 2
    popupBtn[1].addEventListener('click', ()=> {
        let count = 0;
        let menuAnimate = (function() {
          count++;
        
          if(count < 150) {
            popupContent.style.top = count + 'px';
            setTimeout(menuAnimate, 0.1)
          } 
          if (document.documentElement.clientWidth < 768) {
            popup.style.display = count = 0;
        }
        })
       
      menuAnimate()
        })
// modmenu 3
        popupBtn[2].addEventListener('click', ()=> {
            let count = 0;
            let menuAnimate = (function() {
              count++;
            
              if(count < 150) {
                popupContent.style.top = count + 'px';
                setTimeout(menuAnimate, 0.1)
              } 

             if (document.documentElement.clientWidth < 768) {
                   popup.style.display = count = 0;
               }
            })
           
          menuAnimate()
            })
            
                
            
           
    
  };

  togglePopUp();
  // tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

      const tooggleTabContent = (index) => {
          for(let i = 0; i < tabContent.length; i++)
          if(index === i) {
              tab[i].classList.add('active')
              tabContent[i].classList.remove('d-none')
              
          } else {
              tab[i].classList.remove('active')
              tabContent[i].classList.add('d-none')
          }
      }
      
      tabHeader.addEventListener('click', (event) => {
          let target = event.target;
              console.log(target)
              target = target.closest('.service-header-tab');
              console.log(target)
          
          if(target) {

              tab.forEach((item, i) => {
                  if(item === target) {

                      tooggleTabContent(i)
                  }
              })
              return;
          }
      });
}
tabs()

  // Плавная прокрутка
  const scrolHead = () => {
    const btnScrolling = document.querySelector('a[href="#service-block"]');
    btnScrolling.addEventListener('click', (evt) => {
        evt.preventDefault();
        scrolling(btnScrolling);
    });
  };
  scrolHead();
});
