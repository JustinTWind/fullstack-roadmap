# API REST de Calculadora Básica con Express.js
# ​Objetivo General:
Desarrollar un servidor backend utilizando Node.js y el framework 
Express.js que exponga una API funcional para realizar operaciones
 matemáticas aritméticas básicas.
​Requerimientos Técnicos:
​1. Estructura de Endpoints (Rutas)
​Se deben implementar 4 rutas distintas utilizando el método HTTP GET. 
Cada ruta corresponderá a una operación matemática:
​Suma: /suma
​Resta: /resta
​Multiplicación: /multiplicacion
​División: /division
​2. Entrada de Datos (Query Parameters)
​La aplicación no recibirá datos por el cuerpo de la petición 
(req.body) ni por parámetros de ruta (req.params).
​Los valores se recibirán exclusivamente a través de Query Params.
​Las variables esperadas se denominarán a y b.
​Ejemplo de petición: GET /suma?a=10&b=5
​3. Middleware de Validación (Requisito Clave)
​Para garantizar la integridad de los datos y evitar repetir código en cada ruta, se debe implementar un Middleware personalizado que se ejecute al inicio de la cascada de peticiones (antes de llegar a los controladores de las rutas).
​Responsabilidades del Middleware:
​Interceptar la petición entrante.
​Verificar que los query params a y b existan.
​Validar que ambos valores sean parseables a tipo numérico (que no sean texto ni undefined).
​Si la validación falla: Responder con un error (ej. Status 400 Bad Request).
​Si la validación es exitosa: Permitir el paso a la ruta correspondiente (next()). 