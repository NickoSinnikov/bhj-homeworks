const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const mole = document.getElementById(`hole${i}`);
    const resultForGame = function(text) {
        alert(text);
        dead.textContent = '0';
        lost.textContent = '0';
    }
    mole.onclick = function() {
        if (mole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent === '10') {
            resultForGame("Вы победили!");

        } else if (lost.textContent === '5') {
            resultForGame("Вы проигали");

        }
    }
}