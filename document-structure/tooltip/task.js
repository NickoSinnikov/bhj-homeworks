const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));

let positionLink = 0;
for (let i = 0; i < hasToolTip.length; i++) {
    hasToolTip[i].onclick = function() {
        const tooltipActive = document.querySelector(".tooltip_active");
        const toolTip = document.querySelector(".tooltip");
        console.log(toolTip);
        if (tooltipActive !== null) {
            tooltipActive.classList.remove("tooltip_active");
        } else {

            const title = this.getAttribute('title');
            positionLink = hasToolTip[i].getBoundingClientRect();
            console.log(positionLink.x + ';' + positionLink.y);
            hasToolTip[i].insertAdjacentHTML("afterend", `<div class='tooltip tooltip_active' style="left: ${positionLink.x}px ; top: ${positionLink.y + 20}px">${title}</div>`);
        }
        return false;
    }
}




//${positionLink.x}
//${positionLink.y + 20}