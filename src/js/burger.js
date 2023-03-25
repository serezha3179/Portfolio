if(document.querySelector('.header__burger')) {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const bureger = document.querySelector('.header__burger');

    bureger.addEventListener('click', () => {
        bureger.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('lock');
    })
}