## TypeScript

Superconjunto tipado de JavaScript que compila a código JavaScript puro.

* __Organización:__ Introduce tipado estático para mejorar la robustez.
* __Reutilización:__ Facilita la creación de tipos y interfaces reutilizables.
* __Mantenibilidad:__ Detecta errores antes de ejecutar el código.

### Características

| Característica | Descripción |
|-|-|
| __Tipado estático__ | Añade tipos a variables, funciones y objetos |
| __Interfaces__ | Define contratos de estructura para objetos |
| __Modularidad__ | Compatible con módulos de ES6 y CommonJS |
| __Compatibilidad__ | Convierte TypeScript a JavaScript para ejecutarse en cualquier entorno |
| __Herramientas__ | Proporciona autocompletado y detección de errores en editores modernos |

### Ejemplo básico
```typescript
interface User {
 name: string;
 age: number;
}

const greet = (user: User): string => {
 return `Hello, ${user.name}, you are ${user.age} years old.`;
};

console.log(greet({ name: 'Alice', age: 30 }));
```
* __tsconfig.json__: archivo de configuracion tsc
    ```json
    {
    "compilerOptions": {
        "target": "ES2020", 
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true
    },
    "exclude": ["node_modules"],
    "include": ["src/**/*"]
    }
    ```