## Babel

__Transpilador de JavaScript__ que permite utilizar características modernas del lenguaje, transformándolas en _versiones compatibles con navegadores antiguos_.

* __Organización:__ Transforma código ES6+ a ES5 para compatibilidad.
* __Reutilización:__ Permite compartir configuraciones mediante plugins y presets.
* __Mantenibilidad:__ Asegura que el código funcione en diversos entornos.

### Características

| Característica | Descripción |
|-|-|
| __Presets__ | Conjuntos de configuraciones predeterminadas para transpilación |
| __Plugins__ | Extienden las capacidades de transformación |
| __Compatibilidad__ | Soporta múltiples versiones de JavaScript y navegadores |
| __Modularidad__ | Configuraciones personalizables para proyectos específicos |
| __Integración__ | Funciona con herramientas como Webpack y Rollup |

* __.babelrc__: archivo de configuracion
    ```js
    { "presets": ["@babel/preset-env"] }
    ```
* __Compilacion__: se puede indicar manualmente del directorio de salida
    ```bash
    npx babel src -out-dir dist
    ```
