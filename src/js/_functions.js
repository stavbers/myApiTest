// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }



// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

window.addEventListener("DOMContentLoaded", (event) => {
// console.log('1');

  function fetchData() {
    fetch('https://api.stavbers.site/city')
    .then(response => response.json())
    .then(data => getElData(data))
  }
  function getElData(data){
    data.forEach(el => {
      addDataToDOM(el)
    });
  }
  function addDataToDOM(data){
    document.querySelector('.content-row').innerHTML += createDomEl(data)
  }
  
  function createDomEl(data){
    const {id, name, country_code, population, img} = data
    return `
    <div class="col s12 m6 l4">
    <div class="card" id=${id}>
      <div class="card-image">
        <img  src="${img}">
      </div>
      <div class="card-content">
        <span class="card-title">${name}</span>
        <span class="card-p">${country_code}</span>
        <p class="card-descr">${population}</p>
      </div>
    </div>
    </div>
    `
  }


  fetchData()

  var ob={name:"тест", country_code:"444", population:"555", img:"sngngssf", id:"2", };

  fetch('https://stavbers.site/city',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: 'name='+ob.name +'&country_code='+ob.country_code +'&population='+ob.population +'&img='+ob.img +'&id='+ob.id  
          }
  )
  
});
