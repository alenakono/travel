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
            menuBurger.classList.remove('_active');
            menuBody.classList.remove('_active');
        });
    });
}
// popup
const openPopupLogin = document.querySelectorAll('.popup-login__open');
const openPopupRegister = document.querySelector('.popup-register__open');
const closePopup = document.querySelectorAll('.popup__close');
const popupLogin = document.getElementById('popup-login');
const popupRegister = document.getElementById('popup-register');
const popups = document.querySelectorAll('.popup');
console.log(popupLogin);

if (popups) {
    openPopupLogin.forEach(button => {
        button.addEventListener('click', () => {
            popupLogin.classList.add('_active');
        });
    });
    openPopupRegister.addEventListener('click', () => {
        popupRegister.classList.add('_active');
    });
    closePopup.forEach(close => {
        close.addEventListener('click', () => {
            popups.forEach(popup => {
                popup.classList.remove('_active');
            });
        });
    });
}
if(popupRegister){
    const registerClose = popupRegister.querySelector('.popup-login__open');
    registerClose.addEventListener('click', () => {
        popupRegister.classList.remove('_active');
    });
}
 

