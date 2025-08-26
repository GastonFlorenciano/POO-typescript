## 1. ¿Qué diferencia hay entre `extends` e `implements`?

- `extends` → sirve para **heredar de otra clase** (una clase puede heredar métodos y propiedades de otra).  
- `implements` → sirve para **cumplir un contrato de una interfaz** (la clase se asegura de tener todos los métodos y propiedades que dice la interfaz).  

---

## 2. Ventajas del tipado fuerte

- Te ayuda a **no mandar cualquier cosa** a las funciones o clases.  
- Detecta errores **antes de ejecutar** el código.  
- Hace que tu código sea **más legible y mantenible**.  

---

## 3. ¿Qué significa que una clase sea abstracta?

- No podés crear objetos directos de esa clase.  
- Sirve como **plantilla base** para otras clases.  
- Puede tener métodos concretos y métodos abstractos que las hijas **deben implementar**.  

---

## 4. ¿Por qué usar getters y setters?

- Permite **controlar cómo se lee o escribe una propiedad**.  
- Protege datos importantes con **encapsulamiento**.  
- Podés agregar **validaciones o lógica extra** al asignar o leer valores.  

---

## 5. Ejemplos de tipado

### a. Función con parámetros obligatorios y opcionales

```ts
function saludar(nombre: string, apellido?: string) {
  if (apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
  } else {
    console.log(`Hola ${nombre}`);
  }
}

saludar("Gastón"); // Hola Gastón
saludar("Gastón", "Florenciano"); // Hola Gastón Florenciano
```
### b. funcion que devuelve una Promise

```ts
function obtenerDatos(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Datos cargados"), 1000);
  });
}

obtenerDatos().then((res) => 
console.log(res)); // "Datos cargados" (despues de 1 segundo)

```