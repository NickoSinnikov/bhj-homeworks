const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
let lastClick = 0;

function clickerCookie() {

    clicker__counter.textContent++;
    if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }

    let timeNowLastClick = (new Date()).getTime();
    let timeForClick = timeNowLastClick - lastClick;
    lastClick = timeNowLastClick;
    console.log(lastClick);
    console.log(timeForClick);
}

cookie.onclick = clickerCookie;