if(document.querySelector('.js-header__burger')) {
    const body = document.querySelector('body');
    const header = document.querySelector('.js-header');
    const burger = document.querySelector('.js-header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        header.classList.toggle('is-active');
        body.classList.toggle('is-lock');
    })
}