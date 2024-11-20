## Socket.IO

Es una biblioteca que permite comunicación bidireccional en tiempo real entre clientes y servidores.
En caso que la conexión WebSocket se interrumpa, Socket.IO incluye un mecanismo de latido, que verifica periódicamente el estado de la conexión, y cuando el cliente finalmente se desconecta, se vuelve a conectar automáticamente con un retraso exponencial, para no abrumar al servidor.

* __Instalación__:
    ```bash
    npm install socket.io
    ```
* __Servidor WebSocket__: Configuracion básica para manejar eventos.
    ```js
    const io = require('socket.io')(3000);
    io.on('connection', socket => {
      console.log('Cliente conectado');
      socket.on('message', msg => console.log(msg));
    });
    ```
* __Cliente WebSocket__: Configuracion de eventos de cliente
  ```html
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    socket.emit('message', 'Solicitud para conectarse al Servidor');
  </script>
  ```

[Volver](../readme.md)