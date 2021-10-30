const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
let lastClick = (new Date()).getTime();

function clickerCookie() {

    clicker__counter.textContent++;
    if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }

    let timeNowLastClick = (new Date()).getTime();
    const timeForClick = document.getElementById('timer__sec');
    timeForClick.textContent = (((timeNowLastClick - lastClick) / 1000).toFixed(2));
    lastClick = timeNowLastClick;
    console.log(lastClick);
    console.log(timeForClick);
}

cookie.onclick = clickerCookie;