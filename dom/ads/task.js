const rotator = Array.from(document.querySelectorAll(".rotator__case"));
let rotatorCount = 0;



const changeRot = function(){
    
    if (rotator[rotatorCount].classList.contains('rotator__case_active')){
            rotator[rotatorCount].classList.remove('rotator__case_active');
    if (rotatorCount===rotator.length-1){
        rotatorCount = 0;
        
        } else{
        rotatorCount +=1;
        }
        rotator[rotatorCount].classList.add('rotator__case_active')
    
     timer = setTimeout(changeRot,1000);
     
}}

const timer = setTimeout(changeRot,1000);
