const d = document;
const socket = io();
const chatRoom = document.getElementById('chat-room');
const chatForm = document.getElementById('chat-form');

socket.on("message", ({username:u, message:m}) => {
    const msg = Object.assign(d.createElement('article'), {
        className: chatForm.username.value === username ? "self" : "another",
        innerHTML: `<h2>${u}</h2><p>${m}</p>`
    })
    chatRoom.appendChild(msg)
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit("message",{
        username:"usuario",message:"algun texto, escrito por alguien"
    })
})