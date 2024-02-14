# VehiGo

VehiGo es un proyecto desarrollado en Angular, diseñado como un sistema de reservas de vehículos. Esta aplicación permite a los usuarios seleccionar un vehículo de su elección y asociarlo a su cuenta. Una vez logueados, los usuarios pueden realizar múltiples reservas y revisarlas en una página dedicada a listar todas las reservas existentes. Además, VehiGo ofrece páginas de login, registro, y home para una navegación intuitiva y accesible, donde podemos también usar roles para diferentes tipos como son un usuario convencional o un usuario administrador el cual podrá agregar vehículos, eliminarlos, modificarlos, así mismo gestionar los usuarios, roles de usuarios, verificar reservas, estados.

## Funcionalidades Implementadas

- Implementación de librería servi cookies para guardar el token en las cookies y, de esta manera, por medio de un interceptor usar este token para las peticiones al back que requieren de este para poder autorizar la petición.
- Manejo de guards para restringir el acceso a nivel de front según si está autenticado y el rol. También esta parte está protegida desde el back en java por medio de los roles y la autenticación.
- Implementación de pipe de ordenamiento para la lista de reservas el cual ordena de manera ascendente o descendente.
- Uso de LifeCycle Hooks de onInit y OnDestroy en componente de reservation-list.
- Implementación de pruebas unitarias en componentes de login, register, directiva ImgBroken, pipe order-list, Service AuthService. Esta en proceso el resto de pruebas, ya que son bastantes y para llegar al 80% de cobertura es extenso, esto lo estoy verificando por medio del code coverage el cual ya está implementado en el proyecto.

## Planes Futuros

Como el proyecto back ya está desplegado en AWS, se realizaron pruebas con la IP pública y funciona correctamente.

## Tema Favorito

El tema que más me ha gustado es el uso de la librería de cookies y cómo implementar seguridad a través de tokens y guards en Angular, proporcionando una capa adicional de protección y una experiencia de usuario más segura.