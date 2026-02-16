# Changelog

## [1.1.0] - 2026-02-16

### feat: agregar funcionalidad de eliminar usuario

Se implementa la opcion de eliminar usuarios desde la interfaz y el backend, incluyendo DeleteUserUseCase, endpoint DELETE /api/users/:id, boton de eliminacion en la UI y confirmacion antes de borrar.

### chore: agregar version de la app en la interfaz

Se muestra la version actual de la aplicacion en el footer de la pagina principal, obtenida dinamicamente desde el servidor para mantener consistencia con package.json.

## [1.0.1] - 2026-02-15

### docs: agregar convenciones del proyecto al README.md

Se actualiza el README.md con la documentacion sobre Conventional Commits, Changelog, versionado SemVer y la estrategia de ramas GitHub Flow para informar a los desarrolladores.

### docs: crear AGENT.md y CHANGELOG.md

Configuracion inicial del fichero AGENT.md con las instrucciones del agente y creacion del CHANGELOG.md para el registro de cambios del proyecto.

## [1.0.0] - 2026-02-15

- Version inicial del proyecto con Clean Architecture y Express.
