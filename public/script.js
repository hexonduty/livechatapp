const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const msg = messageInput.value;
    socket.emit('chatMessage', msg);
    messageInput.value = '';
});

socket.on('chatMessage', (msg) => {
    const div = document.createElement('div');
    div.textContent = msg;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
});
