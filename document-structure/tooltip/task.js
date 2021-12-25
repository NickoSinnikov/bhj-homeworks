const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
const toolTip = document.querySelector(".tooltip");
let positionLink = 0;
for (let i = 0; i < hasToolTip.length; i++){
    hasToolTip[i].onclick = function() {
        const tooltipActive = document.querySelector(".tooltip_active");
        
          
        if (tooltipActive !== null){
            tooltipActive.classList.remove("tooltip_active");
        } 

        const title = this.getAttribute('title');
        console.log(tooltipActive);
        positionLink = hasToolTip[i].getBoundingClientRect();
        console.log(positionLink.x +';'+ positionLink.y);
        hasToolTip[i].insertAdjacentHTML("afterend", `<div class='tooltip tooltip_active' style="left: ${positionLink.x}px ; top: ${positionLink.y + 20}px">${title}</div>`);
        
        return false;
    }
}




//${positionLink.x}
//${positionLink.y + 20}