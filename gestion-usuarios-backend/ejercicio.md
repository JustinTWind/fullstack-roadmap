# 💻 Ejercicio: Desarrollo de Sistema CRUD de Usuarios con Persistencia en JSON

### 📂 Contexto del Proyecto

Se requiere desarrollar un módulo de gestión de usuarios para una aplicación backend en **Node.js**. Debido a requisitos de arquitectura, no se utilizará una base de datos convencional; en su lugar, la persistencia de los datos debe manejarse manipulando directamente un archivo local llamado `usuarios.json`.

### 🎯 Objetivo Técnico

Implementar un conjunto de funciones que permitan realizar las operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre el archivo de datos.

---

### 📋 Especificaciones del Modelo de Datos

Cada usuario almacenado en el archivo debe respetar la siguiente estructura:

| Campo | Tipo de Dato | Descripción |
| --- | --- | --- |
| **id** | UUID | Identificador único generado automáticamente. |
| **nombre** | String | Nombre del usuario. |
| **apellido** | String | Apellido del usuario. |
| **ciudad** | String | Ciudad de residencia. |
| **edad** | Number | Edad actual. |
| **correo** | String | Dirección de correo electrónico (Email). |

---

### 🛠️ Requerimientos Funcionales (CRUD)

1. **🆕 CREATE (Crear):**
* Desarrollar una función que reciba los datos del usuario.
* Debe generar automáticamente un **id único** utilizando el paquete `uuid`.
* Debe leer el archivo actual, agregar el nuevo objeto y guardar los cambios.


2. **🔍 READ (Leer):**
* Desarrollar una función para **listar todos** los usuarios registrados.
* *(Opcional)* Desarrollar una función para buscar un usuario específico por su **id**.


3. **📝 UPDATE (Actualizar):**
* Desarrollar una función que reciba un **id** y los datos a modificar.
* Debe buscar al usuario correspondiente, actualizar sus campos (manteniendo el id original) y guardar el archivo actualizado.


4. **🗑️ DELETE (Eliminar):**
* Desarrollar una función que reciba un **id**.
* Debe eliminar al usuario correspondiente del registro y guardar los cambios en el archivo.



---

### 🚫 Restricciones y Herramientas

* **Lenguaje:** Node.js.
* **Módulo de Sistema de Archivos:** Uso estricto del módulo nativo `fs` (File System) para leer y escribir el JSON.
* **Dependencias Externas:** Únicamente se permite el paquete `uuid` para la generación de IDs.
* **Manejo de Archivos:** El sistema debe ser capaz de manejar la lectura y escritura asíncrona o síncrona, asegurando siempre la **integridad del JSON**.

---

### 📦 Entregable

Un archivo JavaScript (`app.js` o `userManager.js`) que contenga:

1. Las funciones CRUD implementadas.
2. Un **bloque de ejecución de prueba** que demuestre el flujo completo:
* *Crear un usuario  Listarlo  Editarlo  Borrarlo.*



---
