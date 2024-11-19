### __Webpack__

Webpack es un empaquetador de módulos que transforma y optimiza recursos para su uso en aplicaciones web.

* __Organización:__ Gestiona recursos y dependencias en un solo archivo.
* __Reutilización:__ Permite usar loaders y plugins en múltiples configuraciones.
* __Mantenibilidad:__ Centraliza la configuración de recursos en un proyecto.

#### __Características__

| Característica         | Descripción                                                                 |
|-|-|
| __Entrada/Salida__     | Define archivos de entrada y genera un archivo de salida optimizado.        |
| __Loaders__            | Transforman recursos como CSS o imágenes en módulos utilizables.            |
| __Plugins__            | Añaden funcionalidades avanzadas como minificación o generación de HTML.    |
| __HMR (Hot Module Replacement)__ | Permite recargar módulos sin reiniciar la aplicación.             |
| __Code Splitting__     | Divide el código en partes para optimizar la carga inicial.                 |

#### __Ejemplo básico__
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
};
```