let menuLink = Array.from(document.querySelectorAll(".menu__link"));
let menuLinkLength = menuLink.length;
for (let i = 0; i < menuLinkLength; i++) {
    menuLink[i].onclick = function() {
        let menuSub = menuLink[i].nextElementSibling;
        menuSub.classList.toggle("menu_active");
        if (menuLink[i].closest('.menu_main')) {
            return false;
        };
    }
}