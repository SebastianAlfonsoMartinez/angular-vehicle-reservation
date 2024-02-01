
# Revisión de Proyecto: VehiGo

## ¿Qué es VehiGo y cómo funciona?

VehiGo es un proyecto desarrollado en Angular, diseñado como un sistema de reservas de vehículos. Esta aplicación permite a los usuarios seleccionar un vehículo de su elección y asociarlo a su cuenta. Una vez logueados, los usuarios pueden realizar múltiples reservas y revisarlas en una página dedicada a listar todas las reservas existentes. Además, VehiGo ofrece páginas de login, registro, y home para una navegación intuitiva y accesible.

## Funcionalidades Actuales y Planificadas

### Hasta Ahora
- **Selección y Reserva de Vehículos:** Los usuarios pueden elegir vehículos y asociarlos a su cuenta para reservas.
- **Gestión de Reservas:** Una página para visualizar todas las reservas realizadas por el usuario.
- **Autenticación y Registro:** Páginas dedicadas para el login y registro de nuevos usuarios.
- **Uso de Token:** Implementación de un sistema que utiliza tokens (guardados en cookies) para realizar peticiones, utilizando la librería JWT Decode para obtener información del usuario como nombre e ID, necesario para las reservas.
- **Guardián de Sesión:** Restricción de acceso a ciertas partes de la aplicación, como la reserva de vehículos, exclusivamente a usuarios autenticados.
- **Lazy Loading:** Mejora en la carga de la página gracias a la implementación de carga perezosa para las rutas.

### Planificadas
- **Vistas por Roles:** Implementación de diferentes vistas según el rol del usuario, incluyendo un rol de administrador con capacidades para agregar, modificar, eliminar o listar vehículos, usuarios, y reservas.
- **Facturación:** (Si el tiempo lo permite) Desarrollo de un sistema de facturación para las reservas realizadas.

## Tema Favorito del Último Sprint

Lo que más me ha gustado del último sprint ha sido el manejo de los módulos con componentes, la capacidad de aplicar lazy loading para optimizar la carga de la aplicación, el trabajo con formularios reactivos, y la integración de herramientas de diseño como Bootstrap y Angular Material. Estos aprendizajes no solo han enriquecido mi proyecto, sino que también han ampliado mi comprensión del desarrollo front-end, permitiéndome crear interfaces más eficientes y atractivas.

---

Este documento ofrece una visión general de VehiGo, sus funcionalidades actuales, futuras, y los aspectos destacados de mi experiencia de aprendizaje durante el último sprint. VehiGo está en constante evolución, y espero seguir implementando nuevas características que mejoren la experiencia del usuario y amplíen la funcionalidad de la aplicación.
