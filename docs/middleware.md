## Middlewares

Son funciones que se ejecutan entre la __recepción de una solicitud HTTP__ por parte del servidor y el envío de una __respuesta al cliente__, permiten estructurar el _flujo de trabajo_ del servidor en _piezas modulares y reutilizables_. Este enfoque modular y flexible ayuda a mantener una __estructura clara y escalable en aplicaciones NodeJS__.

* __Organización:__ Facilitan la separación de responsabilidades.
* __Reutilización:__ Pueden implementarse en múltiples partes de la aplicación.
* __Mantenibilidad:__ Permiten centralizar lógica común, reduciendo duplicación de código.

### Caracteristicas

| Característica | Descripción |
|-|-|
| __Intermediación__ | Permiten intervenir en el flujo de procesamiento de solicitudes, realizando acciones antes de pasar a la siguiente funcion |
| __Desacoplamiento__ | Separan la lógica especifica del procesamiento central de las rutas, como por ejemplo, validación o autenticación.  |
| __Modularidad__ | Pueden definirse como funciones independientes, facilitando su reutilización y pruebas |
| __Encadenamiento__ | Se ejecutan en un orden definido, lo que permite construir flujos de trabajo personalizados al encadenarlos. |
| __Flexibilidad__ | Pueden actuar a nivel de aplicación, ruta o incluso como manejo de errores |

### Tipos de Middlewares

* __Aplicación:__ Se ejecutan por cada solicitud que llega al servidor.
    ```js
    const express = require('express');
    const app = express();
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });
    ```
* __Ruta:__ Vinculados a direcciones específicas.
    ```js
    const { Router } = require('express');
    const logger = (req, res, next) => {
        console.log(`Ruta solicitada: ${req.url}`);
        next();
    };
    router.get('/tasks/:id?', logger, (req,res) => {
        res.send('Tarea/s Obtenida/s')
    });
    module.exports = router;
    ```
* __Express:__ Proveen funcionalidades comunes para procesar datos del cuerpo de las solicitudes.
    ```js
    app.use(express.json());
    app.use(express.urlencoded());
    ```
* __Errores:__ Se encargan de manejar errores en el flujo de la aplicación.
    ```js
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Error interno del servidor');
    });
    ```