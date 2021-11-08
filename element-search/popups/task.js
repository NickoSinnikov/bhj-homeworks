let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');

modalMain.className = "modal modal_active";

let elementsClose = Array.from(document.getElementsByClassName("modal__close"));
let successButton = Array.from(document.getElementsByClassName("show-success"));

for (let index = 0; index < elementsClose.length; index++) {
    elementsClose[index].onclick = function() {
        elementsClose[index].closest('.modal').className = "modal";
    }
}

for (let indexSuccess = 0; indexSuccess < successButton.length; indexSuccess++) {
    successButton[indexSuccess].onclick = function() {
        modalMain.classList = 'modal';
        modalSuccess.className = "modal modal_active";

    }
}