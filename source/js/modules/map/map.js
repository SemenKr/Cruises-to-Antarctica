/* eslint-disable no-undef */
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

const MY_LATITUDE = '59.938635';
const MY_LONGITUDE = '30.323118';
const myZoomMap = '16';
const initMap = function () {

  ymaps.ready(init);
  function init() {
    // Создание карты.
    const myMap = new ymaps.Map('map', {
      center: [MY_LATITUDE, MY_LONGITUDE],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: myZoomMap,
    });

    const placeMark = new ymaps.Placemark([MY_LATITUDE, MY_LONGITUDE], {
      hintContent: '<div class="map__hint"><address>Большая&nbsp;Конюшенная, 19/8</address></div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<h3>Круизы в Антарктику</h3>',
        '<p>Волшебный мир айсбергов и пингвинов</p>',
        '</div>'
      ].join(''),
    }, {
      iconLoyout: 'defoult#image',
      iconImageHref: './img/svg/location.svg',
      iconImageSize: [18, 22],
    });

    myMap.geoObjects.add(placeMark);
  }
};

export {initMap};
