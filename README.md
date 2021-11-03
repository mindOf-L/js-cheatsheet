<style>
rb { background-color: Red }
ob { background-color: Orange }
gb { background-color: Green }
r { color: Red }
o { color: Orange }
g { color: Green }
w { color: White }
</style>

# **JS Moderno**

- [**JS Moderno**](#js-moderno)
  - [**Declaración de Variables**](#declaración-de-variables)
  - [**Uso de la Consola**](#uso-de-la-consola)
  - [**Prompts, Alerts y Confirms**](#prompts-alerts-y-confirms)
  - [**Primitivos**](#primitivos)
  - [**Palabras Reservadas**](#palabras-reservadas)
  - [**Funciones vs Métodos**](#funciones-vs-métodos)
  - [**Parámetros vs Argumentos**](#parámetros-vs-argumentos)
  - [**Arrays (arreglos)**](#arrays-arreglos)
  - [**Objetos**](#objetos)
  - [**Funciones**](#funciones)
    - [**Opciones para el retorno de las funciones y argumentos.**](#opciones-para-el-retorno-de-las-funciones-y-argumentos)
  - [**Arrow Functions**](#arrow-functions)
  - [**Paso por Valor y Referencia**](#paso-por-valor-y-referencia)
  - [**Fechas**](#fechas)
  - [**Ciclos, Estructuras de Control, Map e Iteradores**](#ciclos-estructuras-de-control-map-e-iteradores)
    - [_`If … Else`_](#if--else)
    - [_Operador Ternario_](#operador-ternario)
    - [_Estructura `Switch`_](#estructura-switch)
    - [_Ciclo `While`_](#ciclo-while)
    - [_Ciclo `Do … While`_](#ciclo-do--while)
    - [_Ciclo `For`_](#ciclo-for)
    - [_Ciclo `For … In`_](#ciclo-for--in)
    - [_Ciclo `For … Of`_](#ciclo-for--of)
    - [_Método `forEach`_](#método-foreach)
    - [_Método `Map`_](#método-map)
    - [_Iteradores_](#iteradores)
  - [**Manipulación del DOM**](#manipulación-del-dom)
    - [**`Event Listener`**](#event-listener)
      - [**_Evento de Click_**](#evento-de-click)
      - [**#Nota ¿Qué es '`e`'?**](#nota-qué-es-e)
      - [**_Otros eventos con el mouse_**](#otros-eventos-con-el-mouse)
      - [**_Eventos con inputs_**](#eventos-con-inputs)
      - [**_Event Bubbling_**](#event-bubbling)
      - [_Delegation_](#delegation)
      - [_LocalStorage_](#localstorage)
  - [**Función setTimeout**](#función-settimeout)
  - [**Objetos**](#objetos-1)
  - [**Prototypes**](#prototypes)
  - [**Mixins**](#mixins)
  - [**Clases**](#clases)
      - [_Propiedades Privadas_](#propiedades-privadas)
      - [_Sobrecarga de Constructores_](#sobrecarga-de-constructores)
      - [_Herencia_](#herencia)
  - [**AJAX (*A*synchronous *J*S *A*nd *X*ML)**](#ajax-asynchronous-js-and-xml)
  - [**API’s, REST API’s y Request**](#apis-rest-apis-y-request)
    - [_Peticiones HTTP_](#peticiones-http)
      - [_CRUD [`Create` `Read` `Update` `Delete`]_](#crud-create-read-update-delete)
  - [**Closures (o clausuras)**](#closures-o-clausuras)
  - [**Immediately Invoked Function Expression (IIFE)**](#immediately-invoked-function-expression-iife)
  - [**JS Asíncrono**](#js-asíncrono)
    - [**Callbacks**](#callbacks)
    - [**_Currying y Partial Application_**](#currying-y-partial-application)
  - [**Promesas**](#promesas)
  - [**Async Await**](#async-await)
  - [**Fetch API**](#fetch-api)
  - [**Asignación por Desestructuración (destructuring)**](#asignación-por-desestructuración-destructuring)
  - [**Symbols**](#symbols)
  - [**Sets**](#sets)
  - [**Maps**](#maps)
  - [**Generadores**](#generadores)
  - [**Expresiones Regulares**](#expresiones-regulares)
  - [**Módulos**](#módulos)
  - [**Higher Order Functions**](#higher-order-functions)
  - [**IndexedDB**](#indexeddb)
  - [**Novedades ES10**](#novedades-es10)
  - [**This**](#this)
  - [**Modelo de Concurrencia y Loop de Eventos**](#modelo-de-concurrencia-y-loop-de-eventos)
  - [**Webpack**](#webpack)

## **Declaración de Variables**

Una variable es un elemento que se emplea para almacenar y hacer referencia a otro valor.

```javascript
// maneras de declarar una variable en JS
// var es la forma antigua de crear variables, además su scope es global
var b = 10

// let tiene su scope delimitado
let a = 10

// es una constante y no se puede modificar su valor después de inicializarla
const c = 10

// podemos declarar más de 1 variable/constante de esta manera
let [d,e] = [10,30] // d = 10 e = 30
const [x,y] = [20,40] // x = 20 y = 40
```

## **Uso de la Consola**

Uso de la consola de JS dentro de los navegadores.

```javascript
//imprimen información en la consola, a varios niveles
//general log
console.log("Hola Mundo")

//info
console.info("Hola")

//error
console.error("Mundo")

//imprime la información en la consola a modo de tabla
console.table( { a, b, c, d, x } )
```

Podemos usar colores en la consola de esta manera:
```javascript
console.log('%c Error: el usuario no está registrado', 'background: red; color: white;')
//resultado
```
<rb><w> Error: el usuario no está registrado</w></rb>

```javascript
console.log('%c Error: el usuario no tiene dirección', 'background: orange; color: white;')
//resultado
```
<ob><w> Error: el usuario no tiene dirección</w></ob>

```javascript
console.log('%c Éxito: usuario registrado', 'background: green; color: white;')
//resultado
```
<gb><w> Éxito: usuario registrado</w></gb>

## **Prompts, Alerts y Confirms**

Todos estos son métodos que están incluidos dentro del objeto window.

1. El método `prompt` muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
2. El método `alert` muestra un diálogo de alerta con contenido opcional especificado y con un botón de aceptar.
3. El método `confirm` muestra una ventana de diálogo con un mensaje opcional y dos botones, aceptar y cancelar.

```javascript
//bloquea la ejecución del código hasta que se deseche la alerta
alert("Hola Mundo")

//es una alerta que recibe una entrada de texto y lo retorna
prompt("¿Cual es tu nombre?", "Sin Nombre")

//pide la confirmación del usuario antes de continuar la ejecución
confirm("¿Esta seguro de borrar esto?")
```

## **Primitivos**

Un primitivo en JS es un dato que no es un objeto y no tiene métodos. En este lenguaje hay seis tipos de datos primitivos.

1. `Boolean` (sólo tiene dos valores, verdadero o falso).
2. `Null` (sin valor en lo absoluto).
3. `Undefined` (es una variable declarada que aún no se le asigna un valor).
4. `Number` (son los datos numéricos como integers y floats).
5. `String` (es una variable que contiene una cadena de caracteres).
6. `Symbol` (es un valor único que no es igual a ningún otro valor).

Todos los primitivos son inmutables, o sea que no pueden ser cambiados.

A excepción de null y undefined, todos los valores primitivos tienen objetos equivalentes que se envuelven al rededor de los valores primitivos.

## **Palabras Reservadas**

Las siguientes son palabras reservadas y no pueden ser utilizadas como variables, funciones, métodos o identificadores de objetos.

|||||||
|-|-|-|-|-|-|
|`break`        |`export`    |`super` |`case`      |`extends`       |`switch`       |`
|`catch`        |`finally`   |`this`  |`class`     |`for`           |`throw`        |`
|`const`        |`function`  |`try`   |`continue`  |`if`            |`typeof`       |`
|`debugger`     |`import`    |`var`   |`default`   |`in`            |`void`         |`
|`delete`       |`instanceof`|`while` |`do`        |`new`           |`with`         |`
|`else`         |`return`    |`yield` |`let`       |                |               |

|A futuros||||
|-|-|-|-|
|`enum`         |`package`   |`public`       |`implements`|`
|`private`      |`static`    |`interface`    |`protected` |`
|`await`        |            |               |            |

|Evitar Usar ||||||
|-|-|-|-|-|-|
|`null`         |`undefined` |`true`  |`false`     |`hasOwnProperty`|`isNaN`        |`
|`Infinity`     |`isFinite`  |`Nan`   |`length`    |`Math`          |`isPrototypeOf`|`
|`prototype`    |`valueOf`   |`name`  |`Number`    |`Object`        |`String`       |`
|`toString`     |`prompt`    |`alert` |`conform`   |                |               |


## **Funciones vs Métodos**

Para definirlo de forma sencilla, las funciones son independientes de una clase/objeto, mientras que los métodos están dentro de una clase/objeto.

## **Parámetros vs Argumentos**

Los parámetros son las variables **declaradas** en una función, mientras que los argumentos son los valores que se pasan a esa función. Ej:

```javascript
function name(parameter) {
    // do something
}

name(argument);
```

## **Arrays (arreglos)**

> Documentación MDN: [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

El objeto Array de JS es un objeto global que es usado en la construcción de arrays, que son objetos de tipo lista de alto nivel.

Los arrays son objetos tipo-lista, cuyo prototipo tiene métodos para efectuar operaciones de recorrido y de mutación. Ni la longitud de una matriz, ni los tipos de sus elementos son fijos.

```javascript
//array de una dimensión
let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"]

//array de dos dimensiones
let arreglo2d = [true, false, ["Alejandra", "Mariana", "Laura"]]
```

Los arreglos se pueden manipular con los siguientes métodos:

```javascript
//obtiene la longitud total del arreglo
console.log( "Largo: ", videojuegos.length ) 

//longitud total menos uno entrega el último elemento del arreglo
let ultimoElemento = videojuegos[ videojuegos.length - 1 ] 

//agrega un elemento adicional al final del arreglo
videojuegos.push( "F-Zero" )

//agrega un elemento adicional al inicio del arreglo
videojuegos.unshift( "Fire Emblem" )

//remueve el último elemento del arreglo
videojuegos.pop()

//remover un elemento especifico del arreglo, recibe la posición desde donde se quiere borrar
videojuegos.splice( posición, 1 )

//conocer el index de un elemento
videojuegos.indexOf( "Megaman" )
```

## **Objetos**

Los objetos en JS nos ayudan a agrupar información. Un objeto no es más que un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor.

```javascript
//ejemplo de un objeto literal
let personajes = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    }
}

//obtener los valores de los objetos literales
console.log( 'Nombre:      ', personaje[ 'nombre' ] )
console.log( 'Edad:        ', personaje.edad )
console.log( 'Latitud:     ', personaje.coords.lat )
console.log( 'No. Trajes:  ', personaje.suits.length )

//eliminar una propiedad del objeto literal
delete personaje.edad

//trabajar el objeto literal como un arreglo
const entriesPares = Object.entries( personaje )

//limitar que el objeto no se pueda mutar
Object.freeze( personaje )

//obtener las llaves como un arreglo
const keyPersonaje = Object.getOwnPropiertyNames( personaje )
const valuesPersonaje = Object.values( personaje )
```

## **Funciones**

Las funciones son uno de los pilares en JS. Una función es un procedimiento en JS, un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una función, debe definirla en algún lugar del ámbito desde el cual desea llamarla.

La declaración de una función consiste de la palabra reservada function, seguida por:

* El nombre de la función (opcional).
* Una lista de argumentos para la función, encerrados entre paréntesis y separados por comas.
* Las sentencias JS que definen la función, encerradas por llaves.

```javascript
function areaCuadrado( lado ) {
    return lado * lado
}

Ejemplos de diferentes tipos de funciones:

// función anonima
const saludar = function() {
    console.log("Hola Mundo")
}

// las funciones anónimas también pueden recibir parámetros
const saludar2 = function(nombre) {
    console.log("Hola " + nombre)
}

// llamado de la función
saludar()

// llamado de una función con parámetros
saludar2("Alejandra")
```

Algunas funciones pueden tener un retorno, pero cuando no tienen esta retorna un undefinded.

```javascript
//función tradicional

function sumar(a, b) {
    return a + b //la función esta retornando la suma de a + b
}
```

### **Opciones para el retorno de las funciones y argumentos.**

```javascript
//con función de flecha retorna los elementos como un objeto literal
const crearPersona = function(nombre, apellido) { nombre, apellido }
const persona = crearPersona("Alejandra", "Camacho")
console.log(persona)

//trabajar con los argumentos en una función de flecha
const imprimeArgumentos = function(...args) {
    return args
}

imprimeArgumentos(10, true, false, "Alejandra", "Hola")

//dar nombre a cada posición retornada
const [edad, casado, vivo, nombre, saludo] = imprimeArgumentos(
    10,
    true,
    false,
    "Alejandra",
    "Hola"
)
```

## **Arrow Functions**

Las funciones de flecha se caracterizan por tener una sintaxis más compacta que una expresión de función regular, por lo que son una buena alternativa a estas últimas. Se debe aclarar que estas funciones no tienen su propio `this`, `arguments`, `super` o `new.target` y por lo tanto no son adecuadas para ser utilizadas como métodos, y no pueden ser usadas como constructores. 

```javascript
//sintaxis completa de las funciones de flecha
aprendiendo = (nombre, apellido) => {
    return `${nombre} ${apellido} esta aprendiendo JS`
}

//cuando se tiene sólo una línea de código se pueden eliminar las llaves y el return
aprendiendo = (nombre, apellido) => `${nombre} ${apellido} esta aprendiendo JS`

//cuando sólo se tiene un parámetro, se pueden omitir los parentesis
aprendiendo = nombre => `${nombre} ${apellido} esta aprendiendo JS`
```

## **Paso por Valor y Referencia**

El paso por valor se encuentra al trabajar con primitivos ya que en estos se pasan los datos por el valor que contiene la variable, sin afectar el lugar de memoria.

```javascript
let a = 10, b = a
a = 30

console.log(a, b) //a = 30 b = 10, esto sucede al ser el paso por valor
```

En el caso del paso por referencia este se encuentra al trabajar con objetos ya que todos los objetos son pasados por referencia. Esto quiere decir que los valores de un objeto apuntan a la posición en memoria donde se guarda el valor, no al valor en sí, por lo que al modificar el dato en la posición de la memoria afecta a todas las instancias del objeto.

```javascript
let juan = { nombre: "Juan" }
let ana = juan
ana.nombre = "Ana"

console.log(juan, ana) //ambos valores -> “Ana”
```

También es posible romper la referencia de un objeto utilizando el operador spread.

```javascript
let juan = { nombre: 'Juan' }
let ana = { ...juan } //uso del operador spread
```

## **Fechas**

El objeto Date permite trabajar con fechas y horas en JS.

```javascript
//objeto Date
const diaHoy = new Date()

let valor

//fecha en especifico mes, día y año
let navidad2017 = new Date('12-25-2017')

console.log(navidad2017)

//metodos obtener valores de Date
valor = diaHoy.getMonth() // mes
valor = diaHoy.getDay() // día
valor = diaHoy.getFullYear() // año
valor = diaHoy.getMinutes() // minutos
valor = diaHoy.getHours() // horas
valor = diaHoy.getTime() // milisegundos desde 1970

//metodos para modificar valores de Date
valor = diaHoy.setFullYear(2016)

console.log(valor)
```

## **Ciclos, Estructuras de Control, Map e Iteradores**

Las estructuras de control permiten alterar el flujo de línea por línea que tiene JS, mientras que los ciclos meten en un bucle la ejecución del código mientras se cumpla cierta condición.

Para evaluar la condición de las estructuras de control y ciclos se pueden utilizar los operadores lógicos ya que estos nos regresan un resultado a partir de qué se cumpla o no una cierta condición.

|Operador|Uso|Descripción|
|-|-|-|
|AND [ `&&` ]|`expr1&&expr2`|Regresa true si ambas expresiones son verdaderas|
|OR [ `\|\|` ] |`expr1\|\|expr2`|Regresa true si al menos 1 de las expresiones son verdaderas|
|NOT [ `!` ]|`!expr`|Invierte el valor de la expresión|

### _`If … Else`_

Esta es la estructura más utilizada en JS (y en la mayoría de los lenguajes de programación). Es empleada para tomar decisiones en función de una condición. Su definición es:

```javascript
if ( true ) {
    console.log( 'Es verdadero' )
}
```

Si la condición se cumple (es decir, si su valor es `true`) se ejecutan todas las instrucciones que se encuentran dentro del bloque. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida dentro del bloque y el programa continúa ejecutando el resto de las instrucciones del script. 

Si se desea tener una opción alternativa a cuando la condición no se cumple se hace uso del else.

```javascript
if ( true ) {
    console.log( 'Es verdadero' )
} else {
    console.log( 'Es falso' )
}
```

### _Operador Ternario_

Este operador tiene la particularidad de qué es el único en JS que tiene tres operandos. Este operador es usado con frecuencia como atajo par ala instrucción if.

Una forma sencilla de explicar este operador es con un ejercicio.

1. Se tiene un negocio, en este los días de semana abren a las once de la mañana, mientras que el fin de semana abren a las nueve. Un cliente entra en la página web del negocio para consultar si está abierto hoy. 

Solución con el operador ternario:

```javascript
const dia = 0
const horaActual = 10
let horaApertura
let mensaje

horaApertura = [0,6].includes( dia ) ? 9 : 11 //con el operador ternario, el primer valor lo retorna en caso de que la condición de true y el segundo valor es cuando da false

mensaje = ( horaActual >= horaApertura ) ? `Esta abierto` : `Está cerrado, hoy abrimos a las ${ horaApertura }`

console.log( horaApertura, mensaje )
```

### _Estructura `Switch`_

La declaración `switch` evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta las declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

```javascript
const dia = 5 // 0:Domingo, 1:Lunes, 2:Martes ...

switch (dia) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    default:
        console.log("No es Lunes, Martes o Domingo")
}
```

### _Ciclo `While`_

Este ciclo crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

```javascript
const carros = ["Ford", "Mazda", "Honda", "Toyota"]

let i = 0

//el ciclo se repite hasta que la condición dé falso

while ( i < carros.length ) {
    console.log(carros[i])
    i++
}
```

### _Ciclo `Do … While`_

Este ciclo crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa cómo falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

```javascript
let j = 1

//el ciclo se ejecuta al menos una vez y después evalúa la condición
do {
    console.log( carros[j] )
    j++
} while( carros[j] )
```

### _Ciclo `For`_

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas seguidas de una sentencia ejecutada en un bucle.

```javascript
const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"]

//este es el for tradicional
for (let i = 0 i < heroes.length i++) {
    console.log(heroes[I])
}
```

### _Ciclo `For … In`_

La sentencia `for … in` itera sobre todos los elementos de un objeto, en un orden arbitrario. Para cada uno de los elementos, se ejecuta la sentencia especificada.

```javascript
for ( let i in heroes ) {
    console.log( heroes[i] )
}
```

Con este ciclo también se pueden recorrer objetos, haciendo uso de la siguiente sintaxis.

```javascript
//objeto a recorrer
const automovil = {
    modelo  : 'Camaro',
    motor   : 5.1,
    anio    : 1979,
    marca   : 'Chevrolet'
}

for ( let auto in automovil ) {
    console.log(`${auto}: ${automovil[auto]}`)
    //el ${auto} imprime las llaves del objeto y el ${automovil[auto]} imprime el valor
}

console.log(automovil)
```

### _Ciclo `For … Of`_

La sentencia `for … of` se ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, TypedArray, Map, Set e itreables definidos por el usuario.

```javascript
for (let heroe of heroes) {
    console.log(heroe)
}
```

### _Método `forEach`_

El método `forEach()` ejecuta al función indicada una vez por cada elemento en el array.

```javascript
//arreglo a recorrer
const pendientes = ["Tarea", "Comer", "Proyecto", "Aprender JS"]

//recorrer el arreglo con forEach
pendientes.forEach((pendiente, index) => {
    console.log(`${index}: ${pendiente}`)

})
```

### _Método `Map`_

El método `map()` crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```javascript
//objeto para el método map
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
]

const nombreProducto = carrito.map(function( carrito ){
    return carrito.producto
})

console.log(carrito)
```

### _Iteradores_

Un iterado es un objeto que permite recorrer una colección y devolver un valor al terminar.

```javascript
const ciudades = ["Londres", "New York", "Madrid", "París"]
const ordenes = new Set([123, 231, 131, 102])
const datos = new Map()

datos.set("nombre", "Alejandra")
datos.set("profesion", "Desarrollador")

//entries interador
for (let entrada of ciudades.entries()) {
    console.log(entrada)
}

//values iterador
for (let values of ordenes.values()) {
    console.log(values)
}

//key iterador
for (let key of datos.keys()) {
    console.log(key)
}
```

## **Manipulación del DOM**

Document Object Model, usualmente abreviado como DOM es la jerarquía de objetos del navegador, porque realmente es una estructura jerárquica donde existen varios objetos y unos dependen de otros.

Los objetos del DOM modernizan tanto la ventana del navegador como el historial, la página web y todos los elementos que puedan estar dentro de la propia página web, como párrafos, tablas, formularios, etc. A través del DOM se puede acceder, por medio de JS a cualquiera de estos elementos y estos pueden ser modificados, suprimidos, crear nuevos, etc.

La jerarquía principal del DOM sería:

`Document → root (html) → elemento: <head> & elemento: <body>.`

Dentro del document se puede seleccionar los elementos de la siguiente forma:

```javascript
let elemento
elemento = document.head //regresa el contenido de la etiqueta <head>
elemento = document.body //regresa el contenido de la etiqueta <body>
elemento = document.domain //retorna el la uRL en la que se encuentra la página
elemento = document.URL //funciona igual de domain
elemento = document.forms //regresa el contenido del formulario
elemento = document.forms[0] //regresa la primera posición del formulario
elemento = document.forms[0].id //regresa el id de la primera posición del formulario
elemento = document.images //devuelve una lista de todas las imagenes del sitio
```

JS también nos permite selecciona un elemento que se encuentre dentro de document de la siguiente manera:

```javascript
elemento = document.getElementById('elemento-id') //selecciona el elemento que tiene ese id
elemento = document.getElementById('elemento-id').id //obtiene el id del elemento
elemento = document.getElementById('elemento-id').className //obtiene las clases del elemento

//obtiene el texto que hay dentro del elemento seleccionado
elemento = document.getElementById('elemento-id').textContent
elemento = document.getElementById('elemento-id').innerText

//query selector también permite seleccionar elementos con la sintaxis de CSS y selecciona el primer elemento que encuentre con esa propiedad
elemento = document.querySelector('#elemento-id') //selecciona un elemento por su id
elemento = document.querySelector('.elemento-clase') //selecciona un elemento por su clase
```

Así mismo se pueden modificar las propiedades CSS del elemento.

```javascript
elemento.style.background = '#333' //modifica el fondo
elemento.style.color = '#FFF' //modifica el color del texto
elemento.style.padding = '20px' //modifica el tamaño del padding
```

Y además permite cambiar la información contenida dentro del elemento con las propiedades textContent e innerText usado la siguiente sintaxis:

```javascript
elemento.textContent = 'Nuevo texto'
elemento.innerText = 'Nuevo texto con innerText'
console.log(elemento)
```

Existen selectores múltiples, ya que los listados hasta ahorita retornan sólo el primer elemento que encuentran, los selectores múltiples son:

```javascript
//retorna TODOS los elementos que tengan la clase especificada
const enlaces = document.getElementsByClassName('enlace')

//retorna TODOS los elementos que sean del tag especificado
const links = document.getElementsByTagName('a')

//retorna TODOS los elementos que cumplan con la condición_
const enlances = document.querySelectorAll('#enlace-id .enlace-clase')
```

Además de obtener los elementos a través de los selectores, también se pueden crear elementos nuevos haciendo uso del createElement, para usarlo la sintaxis es la siguiente:

```javascript
//crear un enlace
const enlace = document.createElement('a') //crea un elemento <a></a>
enlace.className = 'enlace' //permite asignar una clase
[`enlace.id`](http://enlace.id/) = 'nuevo-id' //permite asignar un id
enlace.setAttribute('href', '#') //asigna el atributo href
enlace.textContent = 'Nuevo enlace creado' //asigna texto al elemento

//se selecciona donde se quiere insertar el elemento y qué elemento se quiere insertar
document.querySelector('#elemento').appendChild(enlace)
```

La modificación de elementos ya existentes en el DOM se realiza:

```javascript
//creando elemento
const nuevoElemento = document.createElement('h2')
nuevoElemento.id = 'encabezado' //añadiendo id
nuevoElemento.appendChild(document.createTextNode('Texto de Encabezado'))

//elemento que se quiere reemplazar
const anterior = document.querySelector('#encabezado')

//padre del elemento que se quiere reemplazar
const elPadre = document.querySelector('#elemento-padre')

//reemplazo de elemento
elPadre.replaceChild(nuevoElemento, anterior)
```

Por último dentro de la manipulación del DOM se puede también eliminar elementos ya cargados en el document. Los elementos pueden ser eliminados desde si mismo, no es necesario hacer uso del padre.

```javascript
//eliminar un elemento desde sí mismo
const enlaces = document.querySelectorAll('.enlace')
enlaces[0].remove()

//eliminar un elemento desde el padre
const navegacion = document.querySelector('#principal')
navegacion.removeChild(enlaces[0])
```

Esto puede ser usado también para remover ya sean clases, atributos, etc. 

### **`Event Listener`**

Un eventListener es una función que espera a que ocurra algún tipo de evento cómo puede ser el click del usuario sobre un elemento de la página web. El eventListener está programado para reaccionar a los eventos hechos por el usuario.

#### **_Evento de Click_**

```javascript
//evento click con la función autoinvocada
document.querySelector('#elemento-azul').addEventListener('click', function(e) {
    e.preventDefault() //previene la acción por defecto del elemento
    alert('Diste click en el elemento azul')
})

//evento click con la función por separado
document.querySelector('#elemento-azul').addEventListener('click', seleccionarElemento)

//función que se ejecuta cuando el evento se realiza
function seleccionarElemento(e) {
    e.preventDefault()
    alert('Diste click en el elemento azul')
}
```

#### **#Nota ¿Qué es '`e`'?**

```javascript
function seleccionarElemento(e) {
    e.preventDefault()

    let elemento
    elemento = e //contiene toda la información del elemento
    elemento = e.target //muestra el elemento al que se le dio click en especifico

    //permite obtener valores especificos del elemento como su id o su clase
    elemento = e.target.id
    elemento = e.target.className
    elemento = e.target.innerText

    console.log(elemento)
}
```

#### **_Otros eventos con el mouse_**

Adicional al evento de click, existen otros tipos de eventos que se pueden activar con el uso del mouse, estos son algunos de ellos:

```javascript
const boton = document.querySelector("#boton")

//doble click
boton.addEventListener("dblclick", obtenerEvento)

//mouse enter
boton.addEventListener("mouseenter", obtenerEvento)

//mouse leave
boton.addEventListener("mouseleave", obtenerEvento)

//mouse over
boton.addEventListener("mouseover", obtenerEvento)

//mouse out
boton.addEventListener("mouseout", obtenerEvento)

//mouse down
boton.addEventListener("mousedown", obtenerEvento)

//mouse up
boton.addEventListener("mouseup", obtenerEvento)

//mouse move
boton.addEventListener("mousemove", obtenerEvento)

function obtenerEvento(e) {
    console.log(`EVENTO: ${e.type}`)
}
```

#### **_Eventos con inputs_**

Los inputs también pueden disparar sus propios tipos de eventos, estos son:

```javascript
const busqueda = document.querySelector("#buscador")

//se ejecutan cada que se presione una tecla
busqueda.addEventListener("keydown", obtenerEvento)
busqueda.addEventListener("keyup", obtenerEvento)
busqueda.addEventListener("keypress", obtenerEvento)

//se ejecuta cuando el elemento tiene el foco sobre si mismo
busqueda.addEventListener("focus", obtenerEvento)

//se ejecuta cuando el elemento pierde el foco
busqueda.addEventListener("blur", obtenerEvento)

//se ejecuta cuando se corta, copia o pega un texto
busqueda.addEventListener("cut", obtenerEvento)
busqueda.addEventListener("copy", obtenerEvento)
busqueda.addEventListener("paste", obtenerEvento)

//es un todo en uno de los elementos anteriores
busqueda.addEventListener("input", obtenerEvento)

//esta pendendiente de los cambios en un select
busqueda.addEventListener("change", obtenerEvento)

function obtenerEvento(e) {
    console.log(busqueda.value)
    console.log(`EVENTO: ${e.type}`)
}
```

#### **_Event Bubbling_**

El event bubbling quiere decir que un evento se propaga desde el elemento que ejecuto el evento hasta el elemento más lejano en la jerarquía que disponga del mismo evento, en otras palabras desde la fuente del evento hasta el ancestro más lejano.

```javascript
//event bubbling
const card = document.querySelector(".card")
const infoCurso = document.querySelector(".info-curso")
const agregarCarrito = document.querySelector(".agregar-carrito")

card.addEventListener("click", e => {
    console.log("Click en Card")
    e.stopPropagation() //detiene el event bubbling
})

infoCurso.addEventListener("click", e => {
    console.log("Click en Info-Curso")
    e.stopPropagation() //detiene el event bubbling
})

agregarCarrito.addEventListener("click", e => {
    console.log("Click en Agregar-Carrito")
    e.stopPropagation() //detiene el event bubbling
})
```

#### _Delegation_

Delegation es una alternativa para solucionar el Event Bubbling.

```javascript
//delegation

document.body.addEventListener("click", eliminarElemento)

function eliminarElemento(e) {
    e.preventDefault()
    console.log("Click")

    if (e.target.classList.contains("borrar-curso")) {
    //contains se encarga de revisar que las clase se encuentra en el target
        console.log("Si tiene la clase")
    } else {
        console.log("No tiene la clase")
    }
}
```

#### _LocalStorage_

El localStorage es una propiedad que permite acceder al objeto Storage y tiene la función de almacenar datos de manera local. Este almacena la información de forma indefinida o hasta que el usuario decida limpiar los datos del navegador.

El local storage tiene los siguientes métodos:

Agregando elementos al localStorage
```javascript
localStorage.setItem(’nombre’, ‘Juan’)
```

Eliminando elementos del localStorage
```javascript
localStorage.removeItem(‘nombre’)
```

Obtener valor del localStorage
```javascript
localStorage.getItem(‘nombre’)
```

Limpiar completamente el localStorage
```javascript
//elimina todo el contenido del localStorage
localStorage.clear()
```

---

## **Función setTimeout**

El setTimeout es una función de JS que ejecuta su contenido después de un lapso de tiempo, este lapso de tiempo está indicado en milisegundos. Su sintaxis tanto para funciones clásicas como funciones de flecha es el siguiente:

```javascript
//con función tradicional
setTimeout(function() {
  console.log("Se ejecutó un timeout")
}, 3000)

//con función de flecha
setTimeout(() => {
  console.log("Se ejecutó un timeout")
}, 3000)
```

---

## **Objetos**

En JS, los objetos son básicamente un grupo de propiedades y funciones que pueden ser accedido a través de una clave. Tanto las propiedades como los métodos pueden ser creados dinámicamente en tiempo de ejecución.

Hay dos formas de crear objetos, la primera es la creación de objetos literales.

```javascript
//crear un objeto literal en javaScript

const cliente = {
    nombre: "Alejandra",
    saldo: 200,
    tipoCliente: function() {
        let tipo
        if (this.saldo > 1000)
            tipo = "Gold"
        else
            tipo = "Silver"
        return tipo
    }
  }

console.log(cliente.tipoCliente()) //imprime el tipo de cliente que en este ejemplo sería ’Silver'
```

La segunda forma es haciendo uso de este método alternativo, que emplea el constructor para crear las propiedades del objeto. Esta sintaxis tiene la ventaja de que de forma dinámica se puede crear más clientes haciendo uso de new y nombre del constructor.

```javascript
//método alternativo

function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
    this.tipoCliente = function() {
        let tipo
        if (this.saldo > 1000)
            tipo = "Gold"
        else
            tipo = "Silver"
        return tipo
    }
}

const persona = new Cliente("Mariana", 2500)

console.log(persona) //imprime todos los valores de persona
```

**#Nota** Los tipos de datos primitivos también tienen sus constructores para crear los datos como objetos.

```javascript
//string
const nombre1 = "Pedro"
const nombre2 = new String("Pedro")

//numeros
const numero1 = 20
const numero2 = new Number(20)

//boolean
const boolean1 = true
const boolean2 = new Boolean(true)
```

Aunque el valor puede ser el mismo, al hacer un typeOf entre cualquiera de los valores el 1 va a retornar el tipo (ya sea string, number o boolean) y el segundo va a retornar Object siempre como tipo.

## **Prototypes**

En objeto en JS tiene otro objeto, llamado prototype. Cuando pedimos a un objeto una propiedad que no tiene, la busca en su prototipo. Así, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.

Prototype es una propiedad de Object (el objeto del que se derivan todos los demás objetos), y esta propiedad es, a su vez un objeto. Por tanto, el prototipo último de un objeto es Object.prototype. Este prototipo padre tiene métodos que comparten todos los objetos.

Podemos definir nuestros propios prototipos como si fuera clases abstractas de las que heredan las clases que los implementan. Por ejemplo, si tenemos 2 clases:

También, se puede saber si una clase es prototipo de otra. Por ejemplo en la cadena Object > Animal > Dog, siendo Animal una clase abstracta de la cual hereda la clase Dog, definiríamos: 

```javascript
function Animal() {
    Animal.prototype.eat = () => {
        console.log("nom nom nom")
    }
}

// or

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: () => {
        console.log("nom nom nom")
    }
}

function Dog(name) {
    this.name = name
}

let animal = Object.create(Animal.prototype)

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog("Snoopy")
beagle.eat()

console.log(Dog.prototype.isPrototypeOf(beagle)) // true
console.log(Animal.prototype.isPrototypeOf(Dog.prototype)) // true
console.log(Object.prototype.isPrototypeOf(Animal.prototype)) // true
```

¿Y qué pasa con los constructores? Si un objeto hereda su prototipo de otro objeto, también hereda el constructor y eso podría dar problemas a la hora de ejecutar el constructor de una clase particular. Por ejemplo, en el código siguiente se ve cómo podemos sobrescribir el constructor heredado declarándolo explícitamente:

```javascript
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype)
Dog.prototype = Object.create(Animal.prototype)

Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog

let duck = new Bird()
let beagle = new Dog()
```

Otra cosa a tener en cuenta es que podemos definir métodos únicos que no hereden del prototipo. Por ejemplo:

```javascript
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom") }

function Dog() { }

// el prototipo de Dog hereda del de Animal
Dog.prototype = Object.create(Animal.prototype)

// método que solo existe en Dog y no en Animal
Dog.prototype.bark = () => {
  console.log("Woof!")
}

let beagle = new Dog()
```

## **Mixins**

Los mixins son una forma de resolver una funcionalidad idéntica en 2 objetos/clases que no están relacionadas entres sí y por tanto no heredan de la misma clase padre. Por ejemplo, `Bird` y `Airplane` pueden hacer uso de una función `fly()`, pero ambas clases no se relacionan entre sí ni heredan de la misma clase padre. Para resolver esto podemos declarar una función mixta (mixin) en la que ambos objetos puedan llamar:

```javascript
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!")
  }
}
```

Y con 2 objetos creados `bird` y `plane`:

```javascript
flyMixin(bird)
flyMixin(plane)
```

## **Clases**

Las clases de JS son una mejora sintáctica sobre la herencia basada en prototipos de JS. Las clases son funciones especiales y su sintaxis tiene dos componentes:

1. Expresiones de clase
2. Declaraciones de clase

Las clases se pueden definir mediante una declaración de clase, para esto se utiliza la palabra reservada class y un nombre para la clase, en este caso Cliente, por estándar los nombres de las clases empiezan en mayusculas para ser identificados de funciones.

```javascript
//declaración de la clase

class Cliente { }
```

Así mismo la clase contiene un constructor, este es el método encargado de iniciar la clase y sus valores cuando se crea una instancia de esta.

```javascript
class Cliente {
    //constructor de la clase
    constructor(nombre, apellido, saldo) {
        this.nombre   = nombre
        this.apellido = apellido
        this.saldo    = saldo
    }
}
```

La clase también contiene métodos, estos métodos son funciones que pueden ser llamadas desde las instancias de la clase.

```javascript
//métodos dentro de la clase
imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`
}

tipoCliente() {
    let tipo

    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000) {
        tipo = 'Silver'
    } else {
        tipo = 'Normal'
    }
    return tipo
}

retirarSaldo(retiro) {
    return this.saldo -= retiro
}
```

También una clase puede contener métodos estáticos. Estos métodos no requieren de una instancia de clase para ser invocados.

```javascript
static bienvenida () {
    return `Bienvenido al cajero`
}
```

Para crear una instancia de una clase se utiliza la palabra reservada new, con la sintaxis siguiente.

```javascript
const maria = new Cliente("Alex", "Camacho", 10000)
```

#### _Propiedades Privadas_

Las propiedades privadas tienen la característica de que sólo son accesibles dentro de esa clase. Para designar una propiedad como privada se utiliza la almohadilla (#), este tipo de clases aún no es soportado por completo.

```javascript
class Rectangulo {
    #area = 0 //propiedad privada

    constructor( base = 0, altura = 0 ) {
        this.base = base
        this.altura = altura
        this.#area = base * altura
    }
}

const rectangulo = new Rectangulo(10, 5)
```

#### _Sobrecarga de Constructores_

La sobre carga de constructores en otros lenguajes de programación es tener múltiples métodos constructor con diferentes parámetros, JS como tal no tiene soporte para esto, pero gracias a las clases estáticas se pueden manejar como si fueran diferentes constructores.

```javascript
class Persona {

  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais)
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre
    this.apellido = apellido
    this.pais = pais
  }

  getInfo() {
    console.log(`${nombre}, ${apellido}, ${pais}`)
  }
}

const nombre1 = "Melisa",
  apellido1 = "Flores",
  pais1 = "Honduras"

const alex = {
  nombre: "Alejandra",
  apellido: "Camacho",
  pais: "México"
}

//se crea una instancia con el constructor
const persona1 = new Persona(nombre1, apellido1, pais1)

//se crea una instancia con el método estático
const persona2 = Persona.porObjeto(alex)
```

#### _Herencia_

La herencia puede ser entendida como una subclase de una clase que ya existe. Esta subclase, hereda todas las propiedades de la clase padre, y además puede añadir o modificar las propiedades heredadas.

Para poder heredar, se debe de tener una clase padre con sus propios atributos y métodos.

```javascript
//declaración de la clase padre

class Cliente {
    //constructor de la clase
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }

    //métodos de la clase
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    //métodos estaticos, estos no necesitan instanciarse
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}
```

En la sintaxis de JavaScrip se entiende que la clase hija extiende de la clase padre, y se utiliza la palabra reservada extends al hacer esto la clase hija tiene disponible para si tanto los atributos como los métodos de la clase padre.

```javascript
//clase hija, que hereda de la clase padre

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipoEmpresa) {
        super(nombre, saldo) //va hacia el constructor padre y lo ejecuta
        this.telefono = telefono
        this.tipoEmpresa = tipoEmpresa
    }

    //una clase hija permite reescribir métodos de la clase padre
    static bienvenida () {
        return `Bienvenido al cajero para Empresas`
    }

}
```

## **AJAX (*A*synchronous *J*S *A*nd *X*ML)**

Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona, procesando cualquier solicitud al servidor en segundo plana. Esto quiere decir que cualquier aplicación web que use AJAX puede enviar. Y recuperar datos del servidor sin la necesidad de volver a cargar toda la página.

Ejemplo de la lectura de un archivo llamado datos.txt a través de AJAX.

```javascript
document.getElementById("cargar").addEventListener("click", cargarDatos)

function cargarDatos() {

    //crear objeto XMLHttpRequest en este obj se tienen los métodos para interactuar con AJAX
    const xhr = new XMLHttpRequest()

    //abrir una conexión
    xhr.open("GET", "datos.txt", true)

    //una vez que carga la página
    xhr.onload = function() {

        // 200 : correcto | 403 : prohibido | 404 : no encontrado
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }

    //enviar el request
    xhr.send()
}
```

## **API’s, REST API’s y Request**

Una API (Application Programming Interface) es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones. Las API’s permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados. Esto simplifica el desarrollo de las aplicaciones y permite ahorrar tiempo y dinero. Las API’s otorgan flexibilidad simplifican el diseño y la administración y el uso de las aplicaciones, y proporcionan oportunidades de innovación, lo cual es ideal al momento de diseñar herramientas y productos nuevos (o gestionar los actuales).

En otras palabras son funciones, métodos que ofrece una librería para ser utilizada por otro software como una capa de abstracción.

`REST` (`Representational State Transfer`) puede ser diseñada en cualquier lenguaje de back-end. `REST` describe como deben ponerse a disposición los recursos. La API debe responder a los Request de `HTTP`: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. 

Cada API tiene sus propias reglas, métodos y estructuras.

Una `REST API` cuenta con Endpoints (Urls) para hacer operaciones `CRUD`.

### _Peticiones HTTP_

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.

Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP veras. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent, o cacheable.

1. El método `GET` solicita una representación de un recurso específico. Las peticiones que usan el método `GET` sólo deben recuperar datos.
2. El método `HEAD` pide una respuesta idéntica a la de una petición `GET`, pero sin el cuerpo de la respuesta.
3. El método `POST` se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
4. El modo `PUT` reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
5. El método `DELETE` borra un recurso en específico.
6. El método `CONNECT` establece un túnel hacia el servidor identificador por el recurso.
7. El método `OPTIONS` es utilizado para describir las opciones de comunicación para el recurso de destino.
8. El método `TRACE` realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
9. El método `PATCH` es utilizado para aplicar modificaciones parciales a un recurso.

#### _CRUD [`Create` `Read` `Update` `Delete`]_

CRUD hace referencia a un acrónimo en el que se reúnen las primeras letras de las cuatro operaciones fundamentales de aplicaciones persistentes en sistemas de bases de datos:

1. `Create`. Crea registros.
2. `Read`. Lee registros.
3. `Update`. Actualiza registros.
4. `Delete`. Borra registros.

En pocas palabras, `CRUD` resume las funciones requeridas por un usuario para crear y gestionar datos. Varios procesos de gestión de datos están basados en CRUD, en los que dichas operaciones están específicamente adaptadas a los requisitos del sistema y de usuario, ya sea para la gestión de bases de datos o para el uso de aplicaciones.

Ejemplo de un `CRUD` para crear, leer, actualizar y borrar un usuario.

**Crear un nuevo usuario.**
```javascript
const crearUsuario = async( usuario ) => {
    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await resp.json()
}
```

**Leer un usuario.**

```javascript
//url del endpoint a usar
const urlCRUD = `https://reqres.in/api/users`

const getUsuario = async( id ) => {
    const resp = await fetch(`${ urlCRUD }/${ id }`)
    const { data } = await resp.json()
    return data
}
```
Actualizar un usuario.

```javascript
const actualizarUsuario = async (id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await resp.json()
}

```
Borrar un usuario.

```javascript
const actualizarUsuario = async id => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: "DELETE"
    })

    return resp.ok ? "Borrado" : "No se pudo eliminar"
}

```
## **Closures (o clausuras)**

En JS a veces deseamos encapsular de alguna forma ciertas propiedades para que no sean accesibles directamente, algo así como hacerlas privadas. Para eso tenemos que valernos de métodos que interactúen como intermediarios entre el código fuera de la clase/objeto y las propiedades que deseamos proteger. Por ejemplo, para una propiedad que cambiaríamos/referenciaríamos así:

```javascript
function Bird() {
  this.hatchedEgg = 0
}
let ducky = new Bird()
bird.name = "Duffy"
```

Las podríamos modificar para protegerla de esta forma, encapsulándola en métodos:
```javascript
function Bird() {
  let hatchedEgg = 10

  this.getHatchedEggCount = () => {
    return hatchedEgg
  }
  
  this.setHatchedEggCount = (hatchedEgg) => {
    this.hatchedEgg = hatchedEgg
  }
}

let ducky = new Bird()
ducky.getHatchedEggCount()
```

## **Immediately Invoked Function Expression (IIFE)**

Es una función anónima que se autoejecuta inmediatamente después de ser instanciada. Por ejemplo:

```javascript
(function () {
  console.log("Chirp, chirp!")
})()
```

## **JS Asíncrono**

Hay dos tipos de código en JS el síncrono y el asíncrono.

1. _Código Síncrono (synchronous)_
2. _Código Asíncrono (asynchronous)_

La mayor parte de las veces que se escribe código asíncrono será cuando se interactúa con una API o REST API. 

`XMLHTTPRequest` y `Fetch API` son ejemplos de código asíncrono.

El lenguaje tiene a su disposición las siguiente funciones para la creación de código asíncrono:

* Callbacks.
* Promises.
* Async/Await.

### **Callbacks**

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo de uso del callback.

```javascript
const ciudades = ["Londres", "New York", "Guadalajara", "Madrid"]

//se agrega una nueva ciudad después de dos segundos
function nuevaCiudad(ciudad, callback) {
    setTimeout(() => {
        ciudades.push(ciudad)
        callback()
    }, 2000)
}

//las ciudades se muestran después de 1 segundo
function mostrarCiudades() {
    setTimeout(() => {
        let html = ""
        ciudades.forEach(ciudad => {
            html += `<li>${pais}</li>`
        })
        document.getElementById("app").innerHTML = html
    }, 1000)
}

//agregar nueva ciudad
nuevaCiudad("Ontario", mostrarCiudades)

//mostrar las ciudades
mostrarCiudades()
```

Ejemplo de creación de un callback implementando un método propio de `map()` en el prototype de la clase `Array`:
```javascript
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // this es el array 's'
  // callback es la función que se explicita más abajo: item * 2
  this.forEach(s => newArray.push(callback(s)))
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
Ejemplo de creación de un callback implementando un método propio de `filter()` en el prototype de la clase `Array`:
```javascript
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // this es el array 's'
  // callback es la función que se explicita más abajo: item % 2 === 1
  this.forEach(s => {
    if(callback(s)) newArray.push(s)
  })
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

### **_Currying y Partial Application_**
La aridad (_arity_) de una función es el número de argumentos que esta requiere (ejemplo: `function test(x, y, z)` tiene una aridad de 3, ya que requiere 3 argumentos). Hacer `currying` en una función significa convertir esta de N parámetros de entrada a N funciones anidadas (formalmente es aridad N a N funciones de aridad 1). Esto lo que hace es restructurar una función para que tome solamente un argumento

Un ejemplo de esto para mostrar una función de N parámetros (aridad N, definida como `unCurried`) convertida a N funciones anidadas (N funciones de aridad 1, definida como `curried`):

```javascript
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y
curried(1)(2)
```

También se le puede llamar así:
```javascript
const funcForY = curried(1); //llamamos a la función y nos devuelve la función anidada
console.log(funcForY(2)); // 3, funcForY es una función en sí misma, apunta a la función anidada de curried
```

En cuanto a la aplicación parcial (_partial application_), significa que llamamos a una función sin pasarle todos los argumentos que necesita en una primera llamada, y los pasamos más tarde. Ej.:

```javascript
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

## **Promesas**

Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas. Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función. 

Las promesas tienen dos parámetros particulares que son resolve y reject, el primero de estos se ejecuta cuando la promesa se resolvió correctamente y el segundo cuando hubo un error o algo no salió como se esperaba.

Ejemplo de la sintaxis de una promesa:

```javascript
//se crea una promesa y con los parámetros resolve y reject
const aplicarDescuento = new Promise((resolve, reject) => { 
    const descuento = false
    if (descuento) { //si es true, se aplica el resolve
        resolve("Descuento Aplicado")
    } else { //si no, se aplica el reject
        reject("No se puede aplicar descuento")
    }
})

aplicarDescuento //se llama a la promesa
    .then(mensaje => { //then está ligado al resolve
        console.log(mensaje)
    })
    .catch(error => { //catch está ligado al reject
        console.log(error)
    })

```
Para las promesas existen tres tipos de métodos propios que son:

1. `Then`
2. `Catch`
3. `Finally`

Existe también el promise.all que trabaja con un arreglo de las promesas y ejecuta el then hasta que todas las promesas del arreglo se hayan resuelto.
```javascript
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        //desestructuración del arreglo, para un código más limpio se pudo manejar como heroe[0]
        console.log(`Enviando a ${heroe1} y ${heroe2} a la misión`)
    })
    .catch(err => {
        //captura la ejecución cuando una promesa no se resuelve
        alert(err)
    })
    .finally(() => {
        //se ejecuta siempre después del then o el catch
        console.log("Se terminó el promise.all")
    })


```

Además está el `promise.race()` que permite ejecutar todas las promesas en conjunto y obtener el mensaje de la promesa que se resuelve más rápido.

```javascript
//promesas a ejecutar
const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa Lenta"), 2000)
})

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa Media"), 1500)
})

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa Rapida"), 1000)
})

//.race() solo toma en cuenta a la promesa que se resuelve primero e ignora los resultados de las demás promesas
Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(mensaje => {
    console.log(mensaje)
})

```
## **Async Await**

Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise rechazará con el valor generado.

Una  función async puede contener una expresión await, la cual puso la ejecución de la función asíncrona y espera la resolución de la Promise pasada, y a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

```javascript
//async await
async function obtenerClientes() {
    //crear un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Clientes descargados")
        }, 2000)
    })

    // error o no...
    const error = false

    if (!error) {
        //await detiene la ejecución hasta que la promesa termine
        const respuesta = await clientes
        return respuesta
    } else {
        await Promise.reject("Hubo un error...")
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error))

```
## **Fetch API**

La API Fetch proporciona una interfaz JS para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red. 

Este tipo de funcionalidad se consigue p

Esta funcionalidad viene a ser el reemplazo de jQuery.ajax() y difere de este en dos formas principales:

1. El objeto Promise devuelto desde `fetch()` no será rechazado con un estado de error `HTTP` incluso si la respuesta es un error `HTTP 400` o `500`. En cambio este se resolverá normalmente (con un estado ok configurado a `false`), y este sólo será rechazado ante un fallo de red o si algo impidió completar la solicitud.
2. Por defecto, `fetch()` no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantener una sesión de usuario.

Una petición básica de `fetch()` es simple y se realiza con el siguiente código:

```javascript
function cargarREST() {
    fetch("[https://picsum.photos/list](https://picsum.photos/list)")
        .then(response => response.json())
        .then(data => {
            let html = ""
            data.forEach(imagen => {
                html +=
                    `<li>
                        <a href="${imagen.post_url}">Ver imagen..</a>
                        ${imagen.author}
                    </li>`
            })
            document.getElementById("resultado").innerHTML = html
        })
}

```

## **Asignación por Desestructuración (destructuring)**

La desestructuración la podemos definir como una expresión que permite asignar valores a nombres conforme a una estructura de tabla dada.

La sintaxis de asignación desestructurante es una expresión que posibilita la extracción de datos de un array, propiedades de objetos y funciones en variables distintas.

Ejemplo del destructuring de un objeto:

```javascript
//objeto
const cliente = {
    nombre : 'Alejandra',
    tipo   : 'Premium',
    datos  : {
        ubicacion: {
            ciudad: 'Zapopan',
            estado: 'Jalisco'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

//desestructuración de los valores principales_
let { nombre, tipo } = cliente

//desestructuración de objetos dentro del objeto principal
let { datos: { ubicacion } } = cliente

//accediendo a un valor que no existe y dandole un default
let { nombre, apellido = 'NA', tipo } = cliente
```

Ejemplo del destructuring de un arreglo:

```javascript
//arreglo
const ciudades = [ "Londres", "New York", "Madrid", "Paris" ]

//va asignando valores a las variables según las posiciones en el arreglo
const [ primeraCiudad, segundaCiudad ] = ciudades

//asignar a la variable una posición especifica
const [ , , , ciudad ] = ciudades
```

Ejemplo del destructuring de una función:

```javascript
//desestructuración de una función
function reservacion(completo, opciones) {
    //se desestructura el parámetro
    let { metodoPago, cantidad, dias } = opciones
    console.log(metodoPago, cantidad, dias)
}

reservacion(true, {
    metodoPago: "tarjeta",
    cantidad  : 2000,
    dias      : 3
})

```

## **Symbols**

`Symbol` es un tipo de dato cuyos valores son únicos e inmutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

Cada símbolo que se crea es único y son considerados como propiedades privadas.

```javascript
//symbol, es considerado un primitivo de JS
let nombre = Symbol()
let apellido = Symbol()

//crear una persona
let persona = {}
persona.nombre = "Carmen" //propiedad normal
persona[nombre] = "Alejandra" //uso de symbol dentro del objeto
persona[apellido] = "Camacho"
persona.saldo = 100
persona.tipoCliente = "Normal"

console.log(persona)
```

## **Sets**

El objeto `Set` permite almacenar valores únicos (no tiene duplicados) de cualquier tipo, incluso valores primitivos y referencias a objetos.

```javascript
//inicializando un set
let carrito = new Set()
carrito.add("Camisa")
carrito.add("Disco #1")
carrito.add("Disco #2")
carrito.add("Disco #3")
carrito.add("Disco #3") //no lo añade porque el valor ya existe

//se pueden también añadir valores desde su constructor
let numeros = new Set([1, 2, 3, 4, 4, 5, 6, 7, 8])
console.log(numeros.size) //retorna el tamaño del set

//comprueba que un valor exista
console.log(carrito.has("Guitarra"))

//eliminar algo del set
carrito.delete("Camisa")

//vaciar completamente el set
carrito.clear()

//recorrer set con forEach
carrito.forEach((producto, index) => {
  console.log(`${index} : ${producto}`)
})

//convertir un set a un arrego
const arregloCarrito = [...carrito]
```

## **Maps**

El objeto `Map` almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

```javascript
//maps
let cliente = new Map()

//añadiendo valores al Map
cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

//métodos para los Maps
cliente.size //tamaño del map
cliente.has('saldo') //comprobar que un valor existe, returna true o false
cliente.get('nombre') //acceder a los valores
cliente.delete('nombre') //borrar un elemento del map
cliente.clear() //elimina todo el contenido
```

El `Map` también acepta valores por defecto.
```javascript
//pasar valores por default
const paciente = new Map([
        ['nombre', 'paciente'],
        ['habitación', 'No Definido']
    ])
```

## **Generadores**

Un generador es una función que retorna un iterado, se indican con un asterisco después de la palabra function.

```javascript
//generadores
function* crearGenerador() {
    yield 1
    yield "Nombre"
    yield 3 + 3
    yield true
}

const iterador = crearGenerador()
console.log(iterador.next().value) //imprime 1
console.log(iterador.next().value) //imprime Nombre
console.log(iterador.next().value) //imprime 6
console.log(iterador.next().value) //imprime true
console.log(iterador.next().value) //imprime undefined
```

## **Expresiones Regulares**

Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JS, las expresiones regulares también son objetos.

//Expresiones regulares

const exp1 = new RegExp('/0-9/')

console.log(exp1.text(1992)) //retorna true, porque los valores se encuentran en el rango

expReg = /\d\d-\d\d-\d\d\d\d/ //una fecha en exp regular 20-10-2018

expReg = /\d\d:\d\d/ //una hora en exp regular 10:30

expReg = /\d\d:\d\d \D\D/ //una hora en exp regular 10:30 AM

expReg = /\d+/ //el + indica que busca un número y que puede haber más

//negar la expresión con el ^

expReg = new RegExp('/[^0-9]/')

//sintaxis {1,2} significa que puede tener entre 1 y 2 caractores

expReg = /\d{1,2}-\d{1,2}-\d{4}/

expReg = /\w+/ //evaluar letras o números

expReg = /([A-Z])\w+/ //evalua texto que sean puras mayúsculas

expReg = /([a-z])\w+/ //evalua texto que sean puras minúsculas

## **Módulos**

Un módulo en programación nos va a permitir agrupar funcionalidad relacionada en un mismo archivo, de esta forma, conforme nuestro proyecto crezca, será más fácil de mantener y estará mejor organizado.  La ventaja principal de un módulo es que podremos utilizarlo únicamente donde sea requerido, dejando ele esto del programa oculto para el resto del código y también reutilizar código.

Beneficios de usar módulos:

* Dividir el código en pequeños archivos con funcionalidad relacionada.
* Un módulo puede ser utilizado fácilmente en otra aplicación.
* Dependencias.
* Evitan el conflicto con el nombre de las variables.

_¿Qué es una dependencia?_

Un módulo puede y debe estar conectado con otro módulo, esa relación se conoce como dependencia. Si un módulo requiere una pieza de otro modulo, se dice que depende de ese módulo.

Ejemplo: `Bootstrap`, que requiere `jQuery`.

Para poder hacer uso de módulos se debe crear un archivo principal en este caso es el app.js, este archivo es el que se va a declarar en el índex del sitio en el que se esta trabajando, esta declaración se hace de la siguiente manera:

```javascript
<body>
    <script src="js/app.js" type="module"></script>
</body>
```

Al declararlo como module, va a habilitar el uso de los imports y los exports en el código.

```javascript
//exportar variables
export const nombreCliente = "Alejandra"
export let ahorro = 200

//exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

//exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre
        this.ahorro = ahorro
    }
}
```

Para hacer uso de las funciones y variables que se exportan en otro archivo es necesario importarlas.

```javascript
//importaciones especificas
import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'

//importar todo el contenido el archivo
import * as cliente from './cliente.js'
```

## **Higher Order Functions**

Las `Higher Order Functions` son funciones que trabajan con otras funciones, tomándolas como argumentos o retornándolas. En palabras simples, estas funciones reciben una función como argumento o la devuelven como salida.

Algunas de estas funciones son:

1. `ForEach`. Esta función se encarga de recorrer el objeto por completo, o sea desde el primer elemento hasta el último.
    ```javascript
    autos.forEach( auto => console.log(auto) )
    ```
    
    `Map`. Esta función recorre todos los elementos y además crea un nuevo arreglo.
    ```javascript
    let resultado = autos.map(auto => auto )
    console.log(resultado)
    ```
    
    `Filter`. Esta función crea un nuevo arreglo basado en una prueba evaluada, si el elemento pasa esta prueba se agrega al nuevo arreglo.
    ```javascript
    let resultado = autos.filter(auto => {
        //return auto.marca !== 'BMW' 
        return auto.year >= 2015 && auto.year <= 2017 //prueba de evaluación
    })
    console.log(resultado)
    ```
    
    `Find`. Esta función retorna el primer elemento que pasa la evaluación indicada.
    ```javascript
    let resultado = autos.find(auto => auto.marca === "BMW")
    console.log(resultado)
    ```

    `Reduce`. Esta función toma todos los valores y retorna un valor único.
    ```javascript
    let resultado = autos.reduce((total, auto) => (total + auto.precio), 0)
    console.log(resultado)
    ```
2. `Some`. Esta función retorna un true si se cumple la condición, si no retorna un false.
    ```javascript
    let resultado = autos.some(auto => auto.marca === "BMW")
    console.log(resultado)
    ```

## **IndexedDB**

El Storage en el cliente, son los datos que se guardan en el navegador del usuario.

Se recomienda:

1. Guardar datos en el navegador con JS.
2. No usar Cookies.
3. Almacenar pocos datos, nada que sea muy importante o crítico.

¿Qué opciones hay para manejar Storage?
 - [x] Web Storage (Sencillo) → localStorage, sessionStorage
 - [x] IdenxedDB (Complejo) → IndexedDB

`LocalStorage` y `SessionStorage`, sólo pueden guardar Strings o cadenas de textos (No Objetos, no Arreglos, no Archivos). No se recomienda guardar información sensible. Ideal para productos temporales de un carrito.

`IndexedDB` puede almacenar grandes cantidades de datos estructurados, incluyendo archivos. Utiliza indexes para hacer más rápido el acceso a los datos y es recomendado para grandes cantidades de datos.

Características:

* Es una base de datos completa.
* Puede guardar arreglos, objetos, imágenes y videos.
* Datos estructurados con una clave.
* Datos con clave → valor.
* Es asíncrono.

Desventajas:

* No se puede sincronizar con el back-end.
* No se puede utilizar en modo privado (al cerrar se pierde todo).
* El límite de datos lo pone el navegador.
* Si el usuario limpia el navegador los datos se pierden.

Para utilizar `IndexedDB` lo primero que se debe de realizar es crear la base de datos. El primer valor es el nombre de la DB que se va a crear y debe de ser un String, el segundo valor es la versión de esta.

```javascript
let crearDB = window.indexedDB.open('citas', 1)
```

`IndexedDB` nos permite trabajar con acciones:

1. Se generó algún error durante la creación de la base de datos.
    ```javascript
    crearDB.onerror = function() { console.log("Hubo un error :c”) }
    ```
2. Se generó de forma correcta la base de datos.
    ```javascript
    crearDB.onsuccess = function() {
        DB = crearDB.result //asigna a la base de datos
        mostrarCitas()
    }
    ```

Además de poder trabajar con acciones especificas, tiene un método que se manda a llamar cuando la DB fue creada correctamente, eso quiere decir que este método se manda a llamar una única ocasión, lo cual es ideal para crear el _`Schema`_ de la DB.

```javascript
crearDB.onupgradeneeded = function(e) {
    //El evento es la misma base de datos 
    let db = e.target.result

    //definir el objetcstore, toma 2 parametro el nombre de la base de datos y las opciones
    let objectStore = db.createObjectStore('citas', {
        keyPath: 'key', //indice de la base de datos
        autoIncrement: true,
    })

    //crear los indices y campos de la base de datos, createIndex: 3 parametros, nombre, keypath y opciones
    objectStore.createIndex('mascota', 'mascota', { unique: false })
    objectStore.createIndex('cliente', 'cliente', { unique: false })

}
```

Para poder escribir o leer los datos en la DB se utilizan transacciones.

```javascript
let transaction = DB.transaction(['citas'], 'readwrite’) //se crea la transacción especificando el nombre de la DB y si va a poder editar o sólo será de lectura

let objectStore = transaction.objectStore('citas’) //se crea el objectStore para la DB

let peticion = objectStore.add(nuevaCita) //nuevaCita es el objeto que contiene las columnas de la DB
```

De igual forma que con las acciones al crear la base de datos, la petición también incluye sus propias acciones que son:

1. Se generó correctamente.
    ```javascript
    peticion.onsuccess = () => { form.reset() }
    ```
    Se completó correctamente.
    ```javascript
    transaction.oncomplete = () => { mostrarCitas() }
    ```
2. Hubo algún error.
    ```javascript
    transaction.onerror = () => { console.log("Hubo un error”) }
    ```

Una vez que la DB fue creada y se añadieron datos de forma correcta, se pueden realizar `queries` de consultas. Para esto se usan los cursores.

```javascript
//creamos un objectStore
let objectStore = DB.transaction('citas').objectStore('citas')

//esto retorna una petición
objectStore.openCursor().onsuccess = function(e) {

    //cursos se va a ubicar en el registro indicado, para acceder a los datos
    let cursor = e.target.result

    //se valida que el cursor (o sea la DB) tenga datos
    if (cursor) {
        //si existen se crea el template (en este ejemplo) para mostrar los datos
        let citaHTML = document.createElement('li')

        citaHTML.setAttribute('data-cita-id', cursor.value.key)
        citaHTML.classList.add('list-group-item')
        citaHTML.innerHTML = 
            `<p class="font-weight-bold">Mascota: 
                <span class="font-weight-normal">${cursor.value.mascota}</span>
            </p>

            <p class="font-weight-bold">Cliente: 
                <span class="font-weight-normal">${cursor.value.cliente}</span>
            </p>`

        //append en el padre
        citas.appendChild(citaHTML)

        //consultar los próximos registros
        cursor.continue()
    }
}
```
Por último también se puede eliminar datos de la DB haciendo uso de de las transacciones, con el método delete.

```javascript
let transaction = DB.transaction(['citas'], 'readwrite')
let objectStore = transaction.objectStore('citas')
let peticion = objectStore.delete(citaID)
```
## **Novedades ES10**

El ES10 agrega nuevos métodos a JS para el trabajo con arreglos, entre otras cosas. Entre los métodos que podemos encontrar en esta actualización al estándar están:

- `.flat()` → Este método crea una nueva matriz con todos los elementos de sub-array concatenados repulsivamente hasta la profundidad especificada.
    ```javascript
    const edades = [8, 10, 9, 11, [13, 18, 20, [18, 20, 21]]]

    console.log(edades.flat(2))
    console.log(edades.flat(Infinity)) //aplana todos los niveles del arreglo
    ```
- `.flatMap()` → Este método primero mapa cada elemento usando una función de mateo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flat de profundidad 1, pero es ligeramente más eficiente.
    ```javascript
    const productos = [
        { nombre: 'Producto 1', precio: 20 },
        { nombre: 'Producto 2', precio: 30 },
        { nombre: 'Producto 3', precio: 40 }
    ]
  
    const resultado = productos.flatMap(producto => [producto.nombre, producto.precio])
    console.log(resultado)
    ```
- `.fromEntries()` → Este método transforma una lista de pares con [clave-valor] en un objeto.
    ```javascript
    const map = new Map([
        ['nombre', 'Producto 1'],
        ['precio', 20]
    ])

    const objeto = Object.fromEntries(map)
    console.log(objeto)
    ```
- `.trim()` → Este método elimina los espacios en blanco en ambos extremos del string. 
    ```javascript
    const correo = '    correo@correo.com    '
    console.log(correo.trimStart()) //elimina los espacios en blanco al inicio
    console.log(correo.trimEnd()) //elimina los espacios en blanco al final
    console.log(correo.trim()) //elimina los espacios al inicio y al final
    ```
- `.toString()` → Este método devuelve una cadena que representa al objeto.
    ```javascript
    function sumar(a, b) { return a + b }
    console.log(sumar.toString())
    ```

## **This**

El valor de this está determinado por cómo se invoca la función. No puede ser establecida mediante una asignación en tiempo de ejecución y puede ser diferente cada vez que la función es invocada. Hay cuatro maneras de trabajarla, que son this con:

1. `Implicit Binding` → Ocurre cuando la notación de puntos se usa para invocar una función.
    ```javascript
    const usuario = {
        nombre: "Alejandra",
        edad: 26,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
        }
    }

    usuario.presentacion() //notación de puntos
    ```
2. `Explicit Binding` → Ocurre cuando se utilizan los métodos de `.call()`, `.apply()` y `.bind()` para especificar el contexto que va a tomar la función.
    ```javascript
    function persona(el1, el2) {
        console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}.`)
    }

    const informacion = {
        nombre: "Alejandra",
        trabajo: "desarrollador"
    }

    const generosMusicales = ["Rock", "Pop"]

    //explicit binding con .call(), cuando pasas arreglos, debes colocar todas las posiciones
    persona.call(informacion, generosMusicales[0], generosMusicales[1])

    //explicit binding con .apply(), si permite tomar un arreglo
    persona.apply(informacion, generosMusicales)

    //explicit binding con .bind(), te crea una nueva función
    const nuevaFn = persona.bind( informacion, generosMusicales[0], generosMusicales[1] )
    nuevaFn()
    ````
3. `New Binding` → Ocurre cuando se utiliza en un objeto. 
    ```javascript
    function Automovil(modelo, color) {
        this.modelo = modelo
        this.color = color
    }

    const auto = new Automovil('Tesla S', 'Negro')
    ```
4. `Window Binding` → Ocurre cuando no se define dónde se debe de buscar, por lo tanto realiza la búsqueda de la definición en el window.
    ```javascript
    function obtenerAuto() {
        console.log(`Mi auto es color ${this.color}`)
    }

    const color = "Negro"
    window.color = "Negro” //se guarda color en el window

    obtenerAuto()
    ```

## **Modelo de Concurrencia y Loop de Eventos**

JS posee un modelo de concurrencia basado en un “loop de eventos”. Las llamadas a función forman una pila de _`frames`_. Un Frame encapsula la información como el contexto y las variables locales de una función.

[Modelo de concurrencia y loop de eventos - JS | MDN](https://developer.mozilla.org/es/docs/Web/JS/EventLoop)

## **Webpack**

Webpack es un _`bundler`_ (paquete) de módulos para aplicaciones JS modernas. Este _`bundler`_ procesa la aplicación y mapa todas las dependencias de un módulo, con esto crea uno o varios paquetes.

Existen 4 conceptos que son necesarios para entenderlo mejor:

1. `Entry` (entrada) → Es un punto de entrada que especifica un módulo debe utilizar `Webpack` para comenzar a crear la gráfica de dependencias, `Webpack` se encargará de saber que dependencias tiene este módulo. Por lo normal el punto de entrada y la configuración se guarda en un archivo, aunque a partir de la versión 4 ya no es necesario hacer esto.
2. `Output` (salida) → La salida le dirá al `Webpack`, en que parte debe almacenar el bundle que se ha creado. Normalmente la entrada está en una carpeta que se llama `src/` y la salida en una carpeta llamada `dist/`.
3. `Loaders` (cargadores) → `Webpack` sólo entiende archivos JavaScript, pero con los loares se puede cargar otros formatos como esas, `less`, imágenes, `html`. Tiene las siguientes palabras clave:
	- `Test` → que le dice al archivo `Webpack` que archivos deben de ser transformados.
	- `Use` → que le dice al archivo `Webpack` que loare estamos utilizando para este archivo.
4. `Plugins` (complementos) → Los plugins permiten realizar tareas tales como optimizar el bundle, administrar de forma avanzada los assets, etc. Un plugin se instala vía NPM y se importa al archivo `Webpack` con la palabra `require()`.

Para trabajar con webpack se necesita tener instalado NPM y NodeJS.

Configurando un proyecto con `Webpack`:
1. Se ejecuta el comando siguiente para crear el archivo de configuración que es el package.json.
    ```javascript
    $ npm init
    ```
    Se procede a instalar webpack a través de la terminal con el comando siguiente, el cuál crear una carpeta llamada `note_modules` que contiene las dependencias que se requieren.
    ```javascript
    $ npm install webpack --save-dev
    ```
2. Instalar el `webpack-cli`.
    ```javascript
    $ npm install --save-dev webpack-cli
    ```
3. Crear un `bundle` de `webpack` con los archivos del proyecto.
    ```javascript
    $ node_modules/.bin/webpack src/index.js
    ```
4. Crear un archivo de configuración para `webpack` con el nombre de `webpack.config.js`, en este archivo se especifican los cuatro conceptos que fueron mencionados anteriormente. Con esto se puede simplificar la creación de los `bundles` del proyecto, ya que al especificar los entrys del proyecto se puede simplificar el comando del punto 4.
    ```javascript
    module.exports = {
        entry: ['./src/index.js’], //entries del proyecto
        ...
    }
    ```
5. Haciendo uso de los scripts en el `package.json` se puede llamar a la creación del `bundle` con un alias.
    ```javascript
    {
        ...
        "scripts": {
            "ejecutar": "webpack --mode development"
        },
        ...
    }
    ```
6. En este paso para crear el `bundle` se realiza a través de npm haciendo uso del alias creado.
    ```javascript
    $ npm run ejecutar
    ```
7. Se agrega `babel` al proyecto para tener compatibilidad del código con navegadores antiguos. Eso se instala a través de npm también.
    ```javascript
    $ npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/register babel-loader
    ```
8. Se crea el archivo `.babelrc` que es el archivo de configuración para `babel`, donde se especifican a que versión anterior se transpirará el código.
9. Se añaden las reglas del loader de `babel` al archivo de configuración de `webpack`.
    ```javascript
    module.exports = {
    ... 
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }]
        }
    }
    ```
10. Agregar las dependencias de `CSS` al proyecto.
    ```javascript
    $ sudo npm install --save-dev style-loader css-loader
    ```
11. Se añaden las reglas del loader de `CSS` al archivo de configuración de `webpack`.
    ```javascript
    module.exports = {
    ...
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }]
        }
    }
    ```
12. También webpack permite trabajara con `SASS`. Se agregan las dependencias de `SASS` al proyecto.
    ```javascript
    sudo npm install --save-dev style-loader css-loader sass-loader
    ```
13. Se añaden las reglas del `loader` de `SASs` al archivo de configuración de `webpack`.
    ```javascript
    module.exports = {
    ...
        module: {
            rules: [{
                test: /\.sass$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader’ },
                    { loader: ‘sass-loader' }
                ]
            }]
        }
    }
    ```