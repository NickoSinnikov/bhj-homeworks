const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
const toolTip = document.querySelector(".tooltip");

for (let i = 0; i < hasToolTip.length; i++){
    hasToolTip[i].onclick = function() {
        const tooltipActive = document.querySelector(".tooltip_active");
        
        if (tooltipActive !== null){
            tooltipActive.classList.remove("tooltip_active");
        }

        const title = this.getAttribute('title');
        console.log(tooltipActive);
        hasToolTip[i].insertAdjacentHTML("afterend", `<div class='tooltip tooltip_active'>${title}</div>`);

        return false;
    }
}