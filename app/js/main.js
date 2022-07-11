// menu burger
const menuBurger =  document.querySelector('.header__menu_mob');

if (menuBurger) {
    const menuBody = document.querySelector('.header__navigation');
    menuBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    menuBody.querySelectorAll('.navigation__link').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('_lock');
            menuBurger.classList.remove('_active');menuBody.classList.remove('_active');
        });
    });
}
// popup
const openPopup = document.getElementById('popup-login_open');
const closePopup = document.querySelectorAll('.popup__close');
const popupLogin = document.getElementById('popup-login');
const popups = document.querySelectorAll('.popup');

openPopup.addEventListener('click', function(e) {
    popupLogin.classList.add('_active');
}); 

if(closePopup.length>0) {
    for (let index = 0; index < closePopup.length; index++) {
        const close = closePopup[index];
        
    }
}