adaptiveMenu();

function adaptiveBurger() {
    const menu = document.querySelector('.menu__list');
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.querySelectorAll('.menu__link');

    if (window.innerWidth = '1137px' || window.innerWidth < '1137px') {
        const toogleClassOpen = () => {
            hamburger.classList.toggle('hamburger_open');
            menu.classList.toggle('menu__list_open');
        }
   
        const addClassOpen = () => {
            toogleClassOpen();
        }
    
        hamburger.addEventListener('click', addClassOpen);
    
        const removeClassOpen = (event) => {
            if (event.target.classList.contains('menu__link')) {
                toogleClassOpen();
            }
        }
    
        menuLinks.forEach(link => link.addEventListener('click', removeClassOpen));
    }
}

adaptiveBurger();