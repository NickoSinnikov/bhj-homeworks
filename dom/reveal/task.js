const reveal = document.querySelectorAll(".reveal");

window.onscroll = function() {
    for (let i = 0; i < reveal.length; i++) {
        let viewportHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealBottom = reveal[i].getBoundingClientRect().bottom
        let revealHeight = revealBottom - revealTop;
        if (revealTop < viewportHeight) {
            reveal[i].classList.add("reveal_active");
        }
        if (revealBottom < 0 || revealBottom > (viewportHeight + revealHeight)) {
            reveal[i].classList.remove("reveal_active")
        }
        console.log([i] + ' ' +
            revealTop +
            "  " + viewportHeight + " bottom " + revealBottom)
    }
}