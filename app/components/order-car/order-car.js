if(document.querySelector('.order_car')) {

    let openCarBtn = document.querySelectorAll('.open-car'),
        closeCarBtn = document.querySelector('.close-car'),
        openConsultBtn = document.querySelectorAll('.open-consult'),
        closeConsultBtn = document.querySelector('.close-consult'),
        carPopup = document.querySelector('.order_car'),
        consultPopup = document.querySelector('.order_consult'),
        innerCarPop = document.querySelector('.car-wrap'),
        innerConsPop = document.querySelector('.consult-wrap'),
        popupTitle = document.querySelector('.order__title');

//click on outer of popup area
    carPopup.addEventListener('click', function (e) {
        if (!innerCarPop.contains(e.target)) {
            carPopup.classList.remove('opened');
            document.body.style.overflow = '';
        }
    });


//open car pop
    openCarBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            carPopup.classList.add('opened');
            popupTitle.querySelector('h3').innerHTML = 'Заполните форму для бронирования автомобиля';
            document.body.style.overflow = 'hidden';
        });
    });
//close car pop
    closeCarBtn.addEventListener('click', function (e) {
        carPopup.classList.remove('opened');
        document.body.style.overflow = '';
    });

//open consult pop
    openConsultBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            carPopup.classList.add('opened');
            popupTitle.querySelector('h3').innerHTML = 'Заполните форму, наши сецмалисты предоставят Вам консультацию в ближайшее время!';
            document.body.style.overflow = 'hidden';
        });
    });


}