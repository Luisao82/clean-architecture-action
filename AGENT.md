# AGENT.md

Instrucciones obligatorias para el agente en cada iteracion de trabajo.

## 1. Registro de cambios (CHANGELOG)

Cada vez que el agente realice un cambio en el codigo, debe registrar dicho cambio en el fichero `CHANGELOG.md` ubicado en la raiz del proyecto.

### Formato

El fichero `CHANGELOG.md` sigue el estandar [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/#specification).

Cada entrada debe usar la siguiente estructura:

```
### <tipo>[alcance opcional]: <descripcion>
```

Los tipos permitidos son:

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Correccion de errores |
| `docs` | Cambios en documentacion |
| `style` | Formato, sin cambios de logica |
| `refactor` | Refactorizacion de codigo |
| `perf` | Mejoras de rendimiento |
| `test` | Agregar o modificar tests |
| `build` | Cambios en sistema de build o dependencias |
| `ci` | Cambios en configuracion de CI/CD |
| `chore` | Tareas de mantenimiento |

### Estructura del CHANGELOG.md

```markdown
# Changelog

## [version] - YYYY-MM-DD

### tipo: descripcion breve

Descripcion detallada del cambio (opcional).
```

### Reglas

- Toda modificacion de codigo debe tener su entrada correspondiente en el CHANGELOG.
- Las entradas se agrupan bajo la version correspondiente.
- La version mas reciente aparece primero (orden descendente).
- Cada entrada debe ser clara y concisa.

## 2. Versionado (package.json)

Cada vez que se genere un Pull Request, se debe actualizar el campo `version` en `package.json` siguiendo [Semantic Versioning (SemVer)](https://semver.org/):

| Incremento | Cuando |
|------------|--------|
| **MAJOR** (X.0.0) | Cambios incompatibles con la API (breaking changes) |
| **MINOR** (0.X.0) | Nueva funcionalidad compatible hacia atras (`feat`) |
| **PATCH** (0.0.X) | Correcciones de errores compatibles hacia atras (`fix`, `docs`, `refactor`, etc.) |

### Reglas

- Antes de crear el PR, actualizar la version en `package.json`.
- El CHANGELOG debe reflejar la nueva version con la fecha del dia.
- Si un PR contiene multiples cambios, la version se incrementa segun el cambio de mayor impacto.

## 3. Nomenclatura de ramas (GitHub Flow)

Se utiliza **GitHub Flow** como estrategia de branching. Las ramas deben seguir esta nomenclatura:

### Rama principal

- `main` — Rama de produccion. Siempre debe estar estable y deployable.

### Ramas de trabajo

El formato de las ramas de trabajo es:

```
<tipo>/<descripcion-corta>
```

Ejemplos:

| Rama | Descripcion |
|------|-------------|
| `feat/add-user-authentication` | Nueva funcionalidad de autenticacion |
| `fix/user-creation-validation` | Correccion en validacion de creacion de usuario |
| `docs/update-readme` | Actualizacion de documentacion |
| `refactor/clean-user-controller` | Refactorizacion del controlador de usuarios |
| `chore/update-dependencies` | Actualizacion de dependencias |
| `ci/add-github-actions` | Configuracion de CI/CD |
| `test/add-user-tests` | Agregar tests de usuario |

### Reglas

- Los nombres de las ramas usan **kebab-case** (palabras separadas por guiones).
- El tipo de la rama debe coincidir con el tipo de Conventional Commits.
- Las ramas se crean desde `main` y se fusionan de vuelta a `main` mediante Pull Request.
- Una vez mergeada, la rama de trabajo se elimina.

## 4. Flujo de trabajo del agente

En cada iteracion, el agente debe:

1. Crear una rama de trabajo desde `main` con la nomenclatura correcta.
2. Realizar los cambios solicitados.
3. Registrar cada cambio en `CHANGELOG.md` bajo la version correspondiente.
4. Actualizar la version en `package.json` antes de crear el PR.
5. Hacer commit de los cambios siguiendo Conventional Commits.
6. Crear el Pull Request hacia `main`.
