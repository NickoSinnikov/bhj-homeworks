let tab = Array.from(document.getElementsByClassName("tab"));
let tabContent = Array.from(document.getElementsByClassName('tab__content'))
let tabIndex = 0;
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', (event) => {
        for (let i = 0; i < tab.length; i++) {
            tab[i].className = 'tab';
        }
        event.currentTarget.className = 'tab tab_active';
        tabIndex = tab.indexOf(tab[i]);
        console.log(tabIndex);

        for (let index = 0; index < tabContent.length; index++) {
            tabContent[index].className = 'tab__content';
        }
        tabContent[tabIndex].className = "tab__content tab__content_active";
    });
}