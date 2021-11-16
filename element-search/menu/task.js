let menuLink = Array.from(document.querySelectorAll(".menu__link"));
let menuLinkLength = menuLink.length;
for (let i = 0; i < menuLinkLength; i++) {
    menuLink[i].onclick = function() {
        let menuSub = menuLink[i].nextElementSibling;
        if (menuSub !== null) {
            menuSub.classList.toggle("menu_active");
            return false;
        }
    }
}