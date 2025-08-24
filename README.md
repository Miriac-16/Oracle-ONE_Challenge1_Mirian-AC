# CHALLENGE AMIGO SECRETO
ORACLE ONE/alura LATAM

Este repositorio implementa el Challenge Amigo Secreto (Alura) con foco en la lógica en JavaScript, a continuación presento una breve descripción de lo que puedes encontrar:
En app.js se maneja un arreglo amigos y las funciones agregarAmigo() (captura el valor del input #amigo, valida que no esté vacío y evita duplicados simples, lo añade con .push(), limpia el campo y actualiza la lista en #listaAmigos) y sortearAmigo() (verifica que existan nombres, elige un índice al azar con Math.random() + Math.floor() y muestra el resultado en #resultado, limpiándose al agregar nuevos nombres); el HTML (index.html) y los estilos (style.css) vienen provistos, y los recursos opcionales van en assets/. Para ejecutar no hay dependencias: basta con abrir index.html en el navegador (o usar Live Server); también se habilitó agregar con la tecla Enter para mejor usabilidad. 

Tecnologías: HTML5/CSS3 y JavaScript. Se considera correcto si permite agregar nombres, valida entradas vacías, visualiza la lista y realiza el sorteo aleatorio mostrando el amigo secreto.
