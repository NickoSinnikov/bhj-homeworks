const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
let positionLink = 0;
let currentElem = "";


const addTooltip = function(event) {
    event.preventDefault();

    const toolTip = document.querySelector(".tooltip");
    const title = this.getAttribute('title');
    let positionX = positionLink.x;
    let positionY = positionLink.y;

    positionLink = event.currentTarget.getBoundingClientRect();

    if (toolTip !== null) {
        if (currentElem === event.currentTarget) {
            toolTip.classList.remove("tooltip_active");
            currentElem = "";
        } else {
            toolTip.classList.add("tooltip_active")
            toolTip.setAttribute('style', `left: ${positionX}px; top: ${positionY + 20}px `);
            toolTip.innerText = `${title}`;
            currentElem = event.currentTarget;
        }
    } else {
        event.currentTarget.insertAdjacentHTML("afterend", `<div class='tooltip tooltip_active' style="left: ${positionX}px ; top: ${positionY + 20}px">${title}</div>`);
        currentElem = event.currentTarget;
    }

    return false;
}

hasToolTip.forEach(item => item.addEventListener('click', addTooltip));



//${positionLink.x}
//${positionLink.y + 20}