let taxiBlock = document.querySelectorAll('.taxi-main__list');


taxiBlock.forEach((e) => {
    let taxiSublist = e.querySelector('.taxi-main__sublist');
    e.addEventListener('click', () => {
        taxiSublist.classList.toggle('taxi-main__sublist_hidden');
        e.classList.toggle('showed');
    })
});