const getTimer = function() {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;
    let count = parseInt(document.getElementById('timer').innerHTML, 10);
    if (count < 1) {
        clearInterval(interval);
        alert('Вы победили!!!')
    }
    console.log(timer);
    console.log(count);
}

let interval = setInterval(getTimer, 1000);



//timer = parseInt(document.getElementById('timer').innerHTML, 10);  10 - сис-ма счисления