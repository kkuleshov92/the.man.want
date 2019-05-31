let openCarBtn = document.querySelectorAll('.open-car'),
    closeCarBtn = document.querySelector('.close-car'),
    openConsultBtn = document.querySelectorAll('.open-consult'),
    closeConsultBtn = document.querySelector('.close-consult'),
    carPopup = document.querySelector('.order_car'),
    consultPopup = document.querySelector('.order_consult'),
    innerCarPop = document.querySelector('.car-wrap'),
    innerConsPop = document.querySelector('.consult-wrap');

//click on outer of popup area
carPopup.addEventListener('click', function (e) {
    if(!innerCarPop.contains(e.target)){
        carPopup.classList.remove('opened');
        document.body.style.overflow = '';
    }
});

consultPopup.addEventListener('click', function (e) {
    if(!innerConsPop.contains(e.target)){
        consultPopup.classList.remove('opened');
        document.body.style.overflow = '';
    }
});

//open car pop
openCarBtn.forEach(function (el) {
   el.addEventListener('click', function () {
       carPopup.classList.add('opened');
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
        consultPopup.classList.add('opened');
        document.body.style.overflow = 'hidden';
    });
});
//close consult pop
closeConsultBtn.addEventListener('click', function () {
    consultPopup.classList.remove('opened');
    document.body.style.overflow = '';
});