## Express

Framework minimalista para construir aplicaciones web y APIs con NodeJS rápidas y escalables.

* __Organización:__ Facilita la creación de rutas y controladores.
* __Reutilización:__ Permite usar middlewares personalizados o integrados.
* __Mantenibilidad:__ Estructura aplicaciones en componentes modulares.

### Características

| Característica | Descripción |
|-|-|
| __Simplicidad__ | API ligera y flexible para manejar solicitudes y respuestas HTTP. |
| __Middlewares__ | Permiten interceptar y procesar solicitudes antes de enviar respuestas. |
| __Ruteo__ | Soporta rutas dinámicas y controladores de rutas. |
| __Extensibilidad__ | Integración con otros módulos y herramientas del ecosistema Node.js. |
| __Seguridad__ | Facilita la implementación de medidas como CORS y autenticación. |

### Implementacion

* __Instalación__: Utilizando cualquier gestor de paquetes
    ```sh
    npm install express
    ```
* __Servidor Basico__: Procesa las peticiones HTTP y devuelve un objeto de  respuesta
    ```js
    const express = require('express');
    const app = express();
    app.get('/', (req, res) => res.send('Bienvenido al sitio'));
    app.listen(3000, () => console.log('Servidor Ejecutandose'));
    ```
* __Middleware__: Funciones que manejan solicitudes entre el cliente y las rutas del servidor.
    ```js
    app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
    });
    ```
* __Rutas__: Se pueden gestionar parametros en la url de manera dinamica
    ```js
    app.get('/users/:id', (req, res) => {
    res.send(`ID del usuario: ${req.params.id}`);
    });
    ```

[Volver](../readme.md)