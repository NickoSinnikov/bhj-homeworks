const progress = document.getElementById("progress");
const button = document.getElementById("send");

button.onclick = function(e) {
    e.preventDefault();


    const form = document.getElementById("form");
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    }


    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
}