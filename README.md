# AA.AA. Salesianos Atocha

Primera versión de la web de la Asociación Antiguos Alumnos y Alumnas Salesianos Atocha. Astro estático, CSS propio y Montserrat local en toda la interfaz. Paleta marfil, azul marino y dorado provisional `#b08d44`.

## Desarrollo

Node.js 24 LTS y npm.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

La ruta inicial es `/antiguosalumnosatocha/`, compatible con un repositorio de proyecto en GitHub Pages. `npm test` valida el resultado de la compilación: enlaces y recursos locales, páginas, fuentes y estados sin eventos.

## Contenidos

- `src/data/site.ts`: enlaces oficiales, fotografías con procedencia, actividades y convocatorias.
- `src/pages/index.astro`: portada.
- `src/pages/[...page].astro`: páginas interiores y filtros de galería.
- `src/layouts/Layout.astro`: cabecera, menú móvil, pie y metadatos.
- `src/styles/global.css`: diseño responsive y variables de marca.

Consultar [la guía editorial](docs/CONTENIDOS.md) y [las fuentes y pendientes](docs/FUENTES.md).

## GitHub Pages

El workflow `Comprobar web` compila y verifica cada PR. `Publicar en GitHub Pages` compila, comprueba y despliega automáticamente cada cambio en `main`. También se puede ejecutar desde **Actions → Publicar en GitHub Pages → Run workflow**, seleccionando `main`.

En **Settings → Pages → Build and deployment → Source** debe estar seleccionado **GitHub Actions**, no publicación desde una rama con Jekyll. El workflow sube únicamente `dist/` y publica solo si la compilación y las pruebas terminan correctamente. No requiere secretos adicionales: utiliza el `GITHUB_TOKEN` con permisos de Pages y OpenID Connect.

URL inicial: https://cnaaaadb.github.io/antiguosalumnosatocha/

El despliegue obtiene automáticamente `SITE_URL` y `SITE_BASE` de la configuración de Pages, por lo que los enlaces y recursos respetan la subruta del repositorio. Para un dominio propio, configurar el dominio en GitHub y los registros DNS del proveedor y habilitar HTTPS; el siguiente despliegue utilizará ese origen y su ruta base. El desarrollo local conserva los valores por defecto de `astro.config.mjs`, que se pueden cambiar con esas mismas variables. El `.com` necesita redirección al dominio principal. No se ha comprado ni configurado ningún dominio.

## Estado de esta entrega

Versión de trabajo para revisión, sin eventos ficticios, estadísticas inventadas ni escudos generados. El escudo oficial y el código exacto del dorado siguen pendientes. El enlace público de BoscoGest no se ha supuesto: se ofrece ayuda de acceso por correo. Las imágenes remotas conservan sus créditos; hay que confirmar permisos antes del lanzamiento público. Los datos legales del titular deben completarse.

Validación local: compilación de las 14 páginas y 4 pruebas correctas. La revisión en navegador no pudo ejecutarse porque el daemon de previsualización de este entorno no está disponible. Revisar escritorio y móvil antes del lanzamiento.
