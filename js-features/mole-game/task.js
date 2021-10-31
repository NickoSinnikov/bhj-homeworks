const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const mole = document.getElementById(`hole${i}`);
    mole.onclick = function() {
        if (mole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent === '10') {
            alert("Вы победили!");
            dead.textContent = '0';
            lost.textContent = '0';
        } else if (lost.textContent === '5') {
            alert("Вы проигали");
            dead.textContent = '0';
            lost.textContent = '0';
        }
    }
}