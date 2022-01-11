const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

        const title = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers')
        title.innerText = JSON.parse(xhr.responseText).data.title;

        const answers = JSON.parse(xhr.responseText).data.answers;
        answers.forEach(item => {
            pollAnswers.insertAdjacentHTML('beforeEnd',
                `<button class = "poll__answer"> ${item} </button>`)


            const buttons = Array.from(document.querySelectorAll('.poll__answer'));
            buttons.forEach(i => {
                i.onclick = function() {
                    alert('Спасибо, ваш вопрос засчитан!');
                    window.location.reload();
                }
            });
        });
    }
}

xhr.send();