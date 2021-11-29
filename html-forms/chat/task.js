const chatWidget = document.querySelector(".chat-widget");
const message = document.querySelector('.chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');
const botMessage = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
'Еще спим',
'Доброе утро!',
'Чем мы можем вам помочь?',
'Мы обиделиь, до свидания'];


chatWidget.classList.add('chat-widget_active'); 
chatInput.addEventListener('keydown',function(e){
    if (e.keyCode===13){
        const dateClient = new Date();
        message.innerHTML += `<div class="message message_client">
        <div class="message__time">${dateClient.getHours()+":"+dateClient.getMinutes()}</div>
        <div class="message__text message_client ">
          ${chatInput.value}
        </div>
      </div>`   
    ;
    chatInput.value=''; //сбрасывает набранное сообщение
    let messageBot=function(){
        const randomMessage = Math.floor(Math.random() * botMessage.length);
        const dateBotMessage = new Date();
        message.innerHTML += `<div class="message">
            <div class = "message__time">${dateBotMessage.getHours() +":"+ dateBotMessage.getMinutes()}</div>
            <div class = "message__text">
            ${botMessage[randomMessage]}
            </div>
        </div>`
    }
    setTimeout(messageBot,1000)ж
    }
})

