let taxiBlock = document.querySelectorAll('.taxi-main__list');

taxiBlock.forEach((e) => {
    let openSubBtn = e.querySelector('.taxi-click'),
        openSubChevron = e.querySelector('i'),
        taxiSublist = e.querySelector('.taxi-main__sublist');

    openSubBtn.addEventListener('click', () => {
        taxiSublist.classList.toggle('taxi-main__sublist_hidden');
        e.classList.toggle('showed');
    });
    openSubChevron.addEventListener('click', () => {
        taxiSublist.classList.toggle('taxi-main__sublist_hidden');
        e.classList.toggle('showed');
    });
});