const interest = Array.from(document.querySelectorAll('.interest'));
const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

for (let i = 0; i < interestCheck.length; i++){

    interestCheck[i].addEventListener('change', (evt)=>{

        const subTypeRadios = Array.from(evt.currentTarget.closest(".interest").querySelectorAll("li .interest__check"));

        if (subTypeRadios !== null) {
        subTypeRadios.forEach(item => item.checked = evt.currentTarget.checked);
        };

        interest.forEach(item => {
            if (Array.from(item.querySelectorAll("li .interest__check")).length > 1){
                
                let allIndeterminate = 0;
                let allChecked = 0;
                let all = 0;

                allChecked = item.querySelectorAll('[type="checkbox"]:checked').length;
                all = item.querySelectorAll('[type = "checkbox"]').length;
                allIndeterminate = item.querySelectorAll('[type = "checkbox"]:indeterminate').length;

                if ( allChecked === (all - allIndeterminate)){
                    item.querySelector('li .interest__check').checked = true;
                    item.querySelector('li .interest__check').indeterminate = false;
                }

                else if ((allChecked > 0) && (allChecked < (all - allIndeterminate))){
                    item.querySelector('li .interest__check').checked = false;
                    item.querySelector('li .interest__check').indeterminate = true;
                }

                else if (allChecked === 0){
                    item.querySelector('li .interest__check').checked = false;
                    item.querySelector('li .interest__check').indeterminate = false;
                }

                console.log( allChecked + ";" + all)
            }
        })
    })
}