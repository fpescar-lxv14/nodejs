### **Socket.IO**

Socket.IO es una biblioteca que permite comunicación bidireccional en tiempo real entre clientes y servidores.

**Instalación**:
```bash
npm install socket.io
```

**Configuración del Servidor**: Configuracion básica para manejar eventos.

```javascript
const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log('Cliente conectado');
  socket.on('message', msg => console.log(msg));
});
```

**Uso en el Cliente**

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
  socket.emit('message', 'Hola desde el cliente');
</script>
```

[Volver](../readme.md)