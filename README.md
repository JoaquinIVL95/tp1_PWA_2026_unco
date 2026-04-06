# Gestor de Películas y Series

**Trabajo Práctico N°1 — Programación Web Avanzada**  
Facultad de Informática — Universidad Nacional del Comahue — 2026

---

## Integrantes

| Nombre | Email | Rol |
|--------|-------|-----|
| Joaquín Vargas | joaquinivl95@gmail.com | PM / Scrum Master |
| Gastón Llaupe | gaston.llaupe@est.fi.uncoma.edu.ar | Desarrollador |
| Alejandro Santos Claure | alejandroclaure01@gmail.com | Desarrollador |

---

## Descripción

Aplicación web desarrollada en React que funciona como un gestor personal de películas y series. Permite al usuario llevar un registro de contenido pendiente de ver y contenido ya visto.

**Funcionalidades principales:**
- Agregar, editar y eliminar películas o series
- Marcar contenido como visto para moverlo entre listas
- Dos listas separadas: _Por Ver_ y _Vistos_
- Búsqueda por título o director
- Filtros por género y tipo (película / serie)
- Ordenamiento por año y rating (ascendente y descendente)
- Contador de items por lista y por género
- Persistencia de datos con `localStorage`

---

## Archivos iniciales del proyecto

### `main.jsx`
Punto de entrada de la aplicación. Se encarga de montar el componente raíz `<App />` en el elemento `#root` del DOM definido en `index.html`. Es el primer archivo que ejecuta React al cargar la página.

### `App.jsx`
Componente raíz de la aplicación. Define la estructura general y renderiza el componente `<Home />`. Es el punto desde donde se organiza el árbol de componentes.

### `index.css`
Archivo de estilos globales. Los estilos definidos aquí aplican a toda la aplicación. Se importa directamente en `main.jsx`.

### `package.json`
Archivo de configuración del proyecto. Contiene las dependencias, las versiones de las librerías instaladas, y los scripts disponibles (como `dev`, `build`, `preview`). Es el archivo que usa `npm` para saber qué instalar al correr `npm install`.

---

## Componentes reutilizables

La aplicación está dividida en componentes independientes para evitar código duplicado y facilitar el mantenimiento:

| Componente | Descripción |
|------------|-------------|
| `Titulo` | Encabezado `<h1>` reutilizable que recibe texto por props |
| `MediaCard` | Tarjeta individual de una película o serie |
| `MediaForm` | Formulario para agregar o editar un item |
| `MediaList` | Lista de items con mensaje de estado vacío |
| `SearchBar` | Input de búsqueda por título o director |
| `Filters` | Selectores de filtro por género y tipo |
| `SortControls` | Controles de ordenamiento por año y rating |
| `Counter` | Contador de items por lista y por género |

---

## Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| [React](https://react.dev) | Librería principal para construir la interfaz |
| [Vite](https://vitejs.dev) | Herramienta de build y servidor de desarrollo |
| CSS Modules | Estilos encapsulados por componente |
| localStorage | Persistencia de datos en el navegador |

---

## Instalación y uso

### Requisitos
- Node.js v18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/<usuario>/tp1_PWA_2026_unco.git

# 2. Entrar a la carpeta del proyecto
cd tp1_PWA_2026_unco

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## Capturas de pantalla

_Proximamente..._

---

## Estrategia de Branches

```
main
 └── develop
      ├── feature/SETUP-1-init-react
      ├── feature/COMP-1-titulo
      ├── feature/FEAT-1-agregar-media
      └── ...
```

### Ramas principales

| Branch | Propósito |
|--------|-----------|
| `main` | Código estable y entregable. Solo se mergea desde `develop` cuando hay una versión lista. |
| `develop` | Rama de integración. Todo el trabajo se integra acá antes de ir a `main`. |

### Ramas de trabajo

Cada tarea del tablero = una branch. Formato:

```
feature/<ID-LINEAR>-descripcion-corta

Ejemplos:
  feature/COMP-1-titulo
  feature/FEAT-3-editar-media
  feature/DOC-1-readme
```

### Cómo crear una branch

```bash
# Siempre partir desde develop actualizado
git checkout develop
git pull origin develop

# Crear la branch con el formato acordado
git checkout -b feature/COMP-1-titulo

# Verificar en qué branch estás
git branch
```

> Si es la primera vez que subís la branch al repositorio remoto:
> ```bash
> git push -u origin feature/COMP-1-titulo
> ```
> Las veces siguientes alcanza con `git push`.

---

### Flujo de trabajo diario

```bash
# 1. Antes de empezar una tarea, actualizarse desde develop
git checkout develop
git pull origin develop

# 2. Crear branch para la tarea
git checkout -b feature/FEAT-1-agregar-media

# 3. Trabajar, hacer commits frecuentes
git add .
git commit -m "FEAT-1: agregar formulario de nueva pelicula"

# 4. Subir la branch
git push origin feature/FEAT-1-agregar-media

# 5. Abrir Pull Request a develop en GitHub
# Título del PR: [FEAT-1] Agregar pelicula/serie
# El PM hace code review antes de mergear
```

### Cómo abrir un Pull Request

1. Subir la branch al repositorio remoto:
   ```bash
   git push origin feature/COMP-1-titulo
   ```
2. Ir al repositorio en **GitHub**
3. Aparecerá un banner amarillo que dice _"Compare & pull request"_ — hacer clic ahí  
   (si no aparece, ir a **Pull requests → New pull request**)
4. Configurar el PR:
   - **base:** `develop` ← hacia dónde va el código
   - **compare:** `feature/COMP-1-titulo` ← tu branch
5. Completar el formulario:
   - **Título:** `[COMP-1] Componente Titulo`
   - **Descripción:** qué hiciste y cualquier detalle relevante
6. Asignar al PM como **Reviewer**
7. Hacer clic en **"Create pull request"**
8. Esperar la aprobación — el PM revisa y mergea a `develop`

> No mergear el PR uno mismo — siempre esperar la aprobación del PM.

---

### Reglas del equipo

- **Nunca commitear directo a `main` ni a `develop`** — siempre por PR
- Cada PR necesita al menos **1 aprobación** (el PM revisa)
- Resolver conflictos en la feature branch, no en develop
- Commits en español, consistentes en todo el equipo
- Un PR por tarea — no mezclar funcionalidades

### Mensajes de commit recomendados

```
feat: agrega componente MediaCard
fix: corrige bug en filtro de género
style: mejora diseño de la lista
docs: actualiza README con instalación
refactor: extrae lógica de localStorage a hook
```

---

## Protección de branches

Las ramas `main` y `develop` están protegidas en GitHub con las siguientes reglas:

- Todo cambio debe entrar por **Pull Request** — no se permite push directo
- Se requiere **al menos 1 aprobación** antes de mergear
- Las aprobaciones se invalidan si se pushean nuevos commits al PR
- Los **force pushes están bloqueados**

---

## Tablero de tareas

Gestión del proyecto en [Linear](https://linear.app).
