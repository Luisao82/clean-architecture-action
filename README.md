# clean-architecture-action
Este es un repositorio que voy a hacer pruebas con github actions

## Convenciones del proyecto

### Conventional Commits

Este proyecto sigue el estandar [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/#specification) para los mensajes de commit y el registro de cambios.

Formato del mensaje de commit:

```
<tipo>[alcance opcional]: <descripcion>
```

Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

### Changelog

Todos los cambios se registran en el fichero [`CHANGELOG.md`](./CHANGELOG.md). Cada modificacion debe tener su entrada correspondiente agrupada bajo la version en la que se incluye.

### Versionado (SemVer)

El campo `version` en `package.json` sigue [Semantic Versioning](https://semver.org/):

- **MAJOR**: cambios incompatibles con la API (breaking changes)
- **MINOR**: nueva funcionalidad compatible hacia atras
- **PATCH**: correcciones y cambios menores compatibles hacia atras

La version se actualiza con cada Pull Request.

### Estrategia de ramas (GitHub Flow)

Se utiliza **GitHub Flow**. La rama `main` es la rama de produccion y siempre debe estar estable.

Las ramas de trabajo siguen el formato:

```
<tipo>/<descripcion-corta>
```

Ejemplos: `feat/add-user-auth`, `fix/validation-error`, `docs/update-readme`.

Una vez mergeada la rama mediante Pull Request, se elimina.
