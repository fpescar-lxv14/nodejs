## Mongoose

__Biblioteca de modelado de datos de objetos (ODM)__  para MongoDB y NodeJS. Facilita la _interacción con bases de datos_ MongoDB mediante _esquemas definidos_, lo que facilita la _validación, consulta y manipulación de datos_.

* __Organización:__ Define esquemas estructurados para documentos MongoDB.
* __Reutilización:__ Permite centralizar validaciones y métodos en modelos reutilizables.
* __Mantenibilidad:__ Proporciona una API clara para manipular documentos en MongoDB.

### Características

| Característica | Descripción |
|-|-|
| __Esquemas__ | Define la estructura de los documentos, incluyendo tipos y validaciones. |
| __Modelos__ | Permiten la interacción con colecciones basándose en esquemas. |
| __Hooks (Middlewares)__ | Ejecutan lógica en diferentes etapas del ciclo de vida de un documento. |
| __Consultas avanzadas__ | Facilita operaciones CRUD y búsquedas complejas con métodos integrados. |
| __Virtuals__ | Campos computados que no se almacenan en la base de datos. |

* __Esquemas__: definen la estructura de los documentos dentro de una colección.
    ```js
    const { Schema } = require('mongoose');
    const userSchema = new Schema({
    name: String,
    age: Number,
    email: { type: String, required: true }
    });
    ```
* __Modelos__: Son constructores que permiten interactuar con documentos basados en un esquema.
    ```js
    const User = mongoose.model('User', userSchema);
    ```

## Operaciones CRUD

* __Crear Documentos__:
    ```js
    const newUser = new User({ 
        name: 'c215714n', 
        age: 33, 
        email: 'cristiandracedo@hotmail.com' 
    });
    newUser.save()
    .then(() => console.log('Usuario guardado'));
    ```
* __Leer Documentos__:
    ```js
    User.find({ age: { $gt: 18 } })
    .then(users => console.log(users));
    ```
* __Actualizar Documentos__:
    ```js
    User.updateOne({ name: 'c215714n' }, { age: 33 })
    .then(() => console.log('Usuario actualizado'));
    ```
* __Eliminar Documentos__:
    ```js
    User.deleteOne({ name: 'c215714n' })
    .then(() => console.log('Usuario eliminado'));
    ```

## Middlewares

Mongoose permite definir middlewares para ejecutar lógica antes o después de ciertas operaciones.

```js
userSchema.pre('save', function(next) {
  console.log('Documento guardado');
  next();
});
```

## Validaciones

Mongoose incluye validaciones predefinidas y personalizadas para asegurarse de que los datos cumplen con ciertos criterios.

```js
const strictSchema = new Schema({
  email: { type: String, required: true, match: /.+@.+\..+/ },
  age: { type: Number, min: 18 }
});
```

[Volver](../readme.md)