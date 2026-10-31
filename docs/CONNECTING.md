# Connecting

Página: /connecting/. Accesible desde la navegación, portada y Qué hacemos.

## Contenido publicado

Presentación del proyecto; público destinatario; metodología; convocatorias con fechas y carteles; entidades implicadas; financiación europea; contacto e Instagram. No se incluyen crónicas, resultados, testimonios ni bloques vacíos.

Datos de los encuentros en src/data/connecting.ts. Esa misma lista alimenta la agenda general a través de src/data/site.ts. nextConnectingMeeting y upcomingEvents filtran las fechas en la compilación, con zona Europe/Madrid. Actualizar o ejecutar de nuevo el despliegue tras cambios y después de una actividad para actualizar el estado de la agenda estática.

## Fuentes

- Cartel general: Canva DAHYlcNQFpU.
- Conociéndonos: Canva DAHYlRWnlKk; 25 de octubre, 17:30 h. El año 2026 corresponde al contexto y calendario de esta edición.
- En equipo: Canva DAHZUlOq1A4; 15 de noviembre de 2026, 17:30 h.
- Instagram del proyecto: https://www.instagram.com/connecting_eu/
- Red InterLavapiés: https://redinterlavapies.com/
- Emblema europeo: reproducción SVG oficial descargada de https://european-union.europa.eu/principles-countries-history/symbols/european-flag_en

## Financiación y carteles

El cartel más reciente, En equipo, identifica la cofinanciación de la Unión Europea a través del Cuerpo Europeo de Solidaridad. Se usa esa denominación en la página. No se publican importes, expediente, duración global ni otras condiciones sin documentación que los confirme.

Los carteles general y Conociéndonos contienen una referencia antigua a Erasmus+. ConnectingPoster.astro muestra su cuerpo original mediante una ventana SVG y compone un nuevo pie HTML con el emblema europeo oficial y la denominación del cartel más reciente. Esto conserva los archivos y diseños de Canva intactos y evita mostrar la referencia contradictoria en la página. La foto y los demás elementos del cartel En equipo se muestran íntegros. Los logotipos no se redibujan.

Las miniaturas originales se han recuperado mediante los enlaces de descarga proporcionados por Canva. Se guardan localmente; la web no depende de URLs de Canva que caducan. Se pueden sustituir por exportaciones de mayor resolución cuando estén disponibles, conservando las proporciones o actualizando sus dimensiones.

Antes de una ampliación con resultados: aportar crónicas, fotografías autorizadas y materiales reales. No anticipar resultados ni inventar cifras.
