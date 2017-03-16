# **HTTP COOKIE**

Una **http cookie** (ya sea referido a web cookie, cookie en navegado,etc.) es una pequeño fragmento de datos que un servidor envía al navegador web de cualquier usuario, que puede almacenarlo y devolverlo con la siguiente solicitud al mismo servidor.
El uso de cookies en programacion tiene como objetivo saber si, dos solicitudes procedían del mismo ordenador.

 Las cookies se utiliza principalmente para tres propositos:

 - Gestion de sesesione( inicios de sesion de usuarios, carritos de compras).
 - Personalización (preferencias del usuario).
 - Seguimiento (análisis del comportamiento del usuario).

Las cookies también se han utilizado para el almacenamiento general del lado del cliente. Anteriormente era la única forma para el almacenamiento del lado del cliente, ya no es el caso hoy en día, donde los navegadores web son capaces de utilizar varias API de almacenamiento. Dado que las cookies se envían junto con cada solicitud, puede ser una carga de rendimiento adicional (especialmente para la web móvil). Las API nuevas a considerar para el almacenamiento local son la API de almacenamiento Web (localStorage y sessionStorage) y IndexedDB.


## Ceacion de cookies.

Al recibir una petición  HTTP se puedeenviar un encabezado cookie con la respuesta. La cookie normamente e almacenaen el navegador y, posteriormente, se envía el valor juntocon cadasolicitud hechaal mismo servidoque el contenido del encabezado de la Cookie.

#### Las Set-Cookie y las Cookie headers.

Las Set-Cookie HTTP son usadas para enviar cookies desde el servidor a el agente de usuario.

Una forma sencilla de configurar una cookie puede ser de la siguiente manera:

`
Set-Cookie: <cookie-name>=<cookie-value>
`

Aquí, el servidor le dice al cliente que almacene una cookie (por ejemplo, aplicaciones como PHP, Node.js, Python o Ruby on Rails).
La respuesta enviada al navegador contendrá el encabezado Set-Cookie y el navegador almacena la cookie.
