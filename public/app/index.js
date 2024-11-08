document.addEventListener("DOMContentLoaded", () => {
const d = document;
const socket = io();
const chatRoom = document.getElementById('chat-room');
const chatForm = document.getElementById('chat-form');

// Recepcion de Mensaje
socket.on("message", ({username:u, message:m}) => {
    const current = chatForm.username.value
    const msg = Object.assign(d.createElement('article'), {
        className: current === u ? "self" : "another",
        innerHTML: `<h2>${u}</h2><p>${m}</p>`
    })
    chatRoom.appendChild(msg)
})
// Envio de mensaje
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const { username, message } = e.target
    socket.emit("message",{
        username: username.value,
        message: message.value,
    })
    message.value = "";
    message.focus()
})
chatForm.message.addEventListener('keyup', (e) => {
    if (!e.ctrlKey && e.code === "Enter"){
        chatForm.querySelector('button').click()
    }
})
// Carga de mensajes previos
    socket.emit("load")
})