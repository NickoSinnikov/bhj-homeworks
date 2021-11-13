let dropdownList = document.querySelector(".dropdown__list");
let dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"))
let dropdownValue = document.querySelector(".dropdown__value");

let dropdownLinkLength = dropdownLink.length;

dropdownValue.addEventListener('click', () => {

    dropdownList.classList.add("dropdown__list_active");

});

for (let i = 0; i < dropdownLinkLength; i++) {
    dropdownLink[i].closest(".dropdown__item").onclick = function() {
        dropdownLink[i].closest(".dropdown").querySelector(".dropdown__value").textContent = dropdownLink[i].innerText;
        dropdownLink[i].closest(".dropdown__list").className = 'dropdown__list';
        return false;
    };
}