# Posicionamiento de AA.AA. Salesianos Atocha

## Implementado

- Títulos y descripciones específicos para cada página.
- Nombre de la Asociación, relación con Salesianos Atocha y localización en Madrid en el contenido visible.
- URL canónica y metadatos Open Graph con el escudo original.
- Datos estructurados Organization, WebSite, WebPage y BreadcrumbList. No se declara a la Asociación como si fuera el colegio ni se inventan fechas de fundación, reseñas o valoraciones.
- Sitemap estático generado desde el mismo catálogo que las rutas interiores, sin la página 404.
- Página 404 con noindex.
- Montserrat local, contenido estático y navegación mediante enlaces HTML.
- Pruebas del sitemap, metadatos, URLs canónicas, datos estructurados y enlaces.
- Origen y subruta derivados de la configuración de Pages, compatibles con un cambio de dominio.

## Alta en Google Search Console

1. Entrar en https://search.google.com/search-console/ con una cuenta que controle la Asociación.
2. Crear una propiedad de **prefijo de URL** para https://cnaaaadb.github.io/antiguosalumnosatocha/ (incluyendo la barra final).
3. Elegir **Etiqueta HTML** como método de verificación. Copiar el valor público de content de la etiqueta google-site-verification.
4. Guardar ese valor en googleSiteVerification, dentro de src/data/site.ts. Tras el despliegue, volver a Search Console y verificar. Conservar el código después de verificar.
5. En Sitemaps, enviar https://cnaaaadb.github.io/antiguosalumnosatocha/sitemap.xml.
6. En Inspección de URLs, inspeccionar la portada y solicitar su indexación. La solicitud no garantiza la indexación ni una posición determinada.
7. Revisar Indexación de páginas y Rendimiento para conocer páginas indexadas, consultas, impresiones y clics. No juzgar los resultados por búsquedas personales aisladas.

Si se conecta un dominio propio, hay que dar de alta su propiedad correspondiente y reenviar su sitemap. Para una propiedad de dominio se necesita acceso al DNS; para el prefijo actual basta la etiqueta HTML.

## Enlaces y contenidos que debe impulsar la Asociación

- Pedir al colegio que enlace la nueva web desde su página de Antiguos Alumnos, manteniendo los contenidos institucionales de esa página útiles y vigentes.
- Añadir la URL en los perfiles sociales propios y solicitar su incorporación a los directorios de la Federación y la Confederación, cuando corresponda.
- Publicar actividades reales, crónicas y fotografías con contexto propio: título, fecha, lugar y una descripción útil.
- Conservar datos de contacto coherentes entre los canales.
- Si ya está decidido el dominio definitivo, conectarlo antes de consolidar la difusión y Search Console. Un dominio propio mejora la identidad y el control; no garantiza mejor posición por sí mismo.

## Sobre robots.txt

La web actual vive bajo /antiguosalumnosatocha/ en github.io. Google solo consulta robots.txt en la raíz del host, no en una subcarpeta. Por eso no se añade un robots.txt ineficaz dentro del proyecto. No es obligatorio tenerlo para indexarse: el sitemap se presenta directamente en Search Console. Al cambiar a un dominio propio, se podrá generar un robots.txt en su raíz que indique la ubicación del sitemap.

## Expectativas

La prioridad es responder bien a búsquedas específicas de antiguos alumnos de Salesianos Atocha. Para Salesianos Atocha sin más contexto, la web del colegio responde a otra intención. Las consultas genéricas antiguos alumnos y antiguos alumnos salesianos abarcan muchas asociaciones. No hay promesa de primeras posiciones ni un plazo garantizado; las mejoras pueden tardar semanas o meses en reflejarse.

## Documentación de referencia

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://support.google.com/webmasters/answer/9008080?hl=es
- https://support.google.com/webmasters/answer/9012289?hl=es
- https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
