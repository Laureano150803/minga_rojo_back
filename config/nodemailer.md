En el presente documento, se presenta un breve resumen de lo que en este sprint se realizó con las herramientas sugeridas.

# NODDEMAILER con GMAIL en NodeJS

Modulo de nodeJS encargado de articular el uso de la API para el envio de correos electronicos automaticos.

Se debe habilitar el acceso de apps menos seguras directamente del correo gmail que sera el remitente, 
instalar las librerias de NODEMAILER en la app de NodeJS,
importar la libreria en el script que se ejecutara, paso siguiente se construye el cuerpo del correo, añadimos las credenciales del servidor de correos que en este caso es de gmail. Procedemos con el envio de correos. 

Se recomienda que los datos sensibles sean ocultados para el manejo de informacion reservada y evitar vulnerabilidades esto se puede hacer en nuestro archivo ".env".

## Necesario
    - Activacion de la seguridad y la verificacion de dos pasos en la cuenta remitente, 
    - en el apartado de "contraseñas de aplicacion" se gestiona el tipo de aplicacion en el que se realizara la implementacion,
    - aqui ya estamos listos para generar nuetra contraseña, que tiene este formato "XXX XXXX XXXX XXXX",
    -JUNTO CON EL EMAIL REMITENTE, SON LOS DATOS QUE SE GUARDARAN EN NUESTRO ".ENV"