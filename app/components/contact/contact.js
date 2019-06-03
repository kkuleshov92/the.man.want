if(document.querySelector('contact__map')) { //проверяет есть ли элемент на странице
    console.log(!document.getElementById('map'));

    ymaps.ready(initMap);

    function initMap() {
        var myMap = new ymaps.Map("map", {
                center: [55.752141, 37.592411],
                zoom: 11,
                controls: ['zoomControl']
            }),
            Placemark1 = new ymaps.Placemark([55.752141, 37.592411], {
                balloonContent: 'Балун 1',
                hintContent: 'Стандартный значок метки 1',
            }, {
                preset: 'islands#redDotIcon'
            });
        myMap.geoObjects.add(Placemark1);
        myMap.behaviors.disable('scrollZoom');
    }

    ymaps.ready(initMap2);

    function initMap2() {
        var myMap2 = new ymaps.Map("map2", {
                center: [43.575651, 39.726709],
                zoom: 11,
                controls: ['zoomControl']
            }),
            Placemark2 = new ymaps.Placemark([43.575651, 39.726709], {
                balloonContent: 'Балун 1',
                hintContent: 'Стандартный значок метки 1',
            }, {
                preset: 'islands#redDotIcon'
            });
        myMap2.geoObjects.add(Placemark2);
        myMap2.behaviors.disable('scrollZoom');
    }
}