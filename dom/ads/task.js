const rotator = Array.from(document.querySelectorAll(".rotator__case"));

const changeRot = function(){for (let i=0; i<rotator.length;i++){
    if (rotator[i].classList.contains('rotator__case_active')){
            rotator[i].classList.remove('rotator__case_active');
    if (i===rotator.length-1){
        rotator[0].classList.add('rotator__case_active')
        } else{
        rotator[i+1].classList.add('rotator__case_active');
        }
    }
}}


const loadRot = function(){
    setTimeout=((changeRot),1000)   
}

document.addEventListener('load',loadRot);