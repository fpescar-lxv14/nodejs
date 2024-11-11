document.addEventListener("DOMContentLoaded", () => {
const d = document;
const socket = io();
const chatRoom = document.getElementById('chat-room');
const chatForm = document.getElementById('chat-form');

function createMessage({username:u, message:m}){
    const current = chatForm.username.value
    const msg = Object.assign(d.createElement('article'), {
        className: current === u ? "self" : "another",
        innerHTML: `<h2>${u}</h2><p>${m}</p>`
    })
    chatRoom.appendChild(msg)
}
// Recepcion de Mensaje
socket.on("message", createMessage)
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
    socket.on('load', (results) => results.length && results.map(createMessage))
    socket.on('userId', (id) => {
        chatForm.username.value = "user_"+id;
        chatForm.message.focus()
    })
})