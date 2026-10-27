# Editar desde GitHub

1. Abrir el archivo, crear una rama y editar con el lápiz de GitHub.
2. Crear un pull request, revisar el resultado de `Comprobar web` y aprobar el cambio.
3. Tras la revisión institucional, integrar y publicar con el workflow manual.

## Agenda

En `src/data/site.ts`, añadir a `events` objetos con este formato (ejemplo de estructura, no copiar como evento real):

```ts
{ title: 'Título confirmado', date: 'AAAA-MM-DDT18:00:00+01:00', location: 'Lugar confirmado', url: 'https://enlace-oficial', published: true }
```

Usar una fecha ISO real con offset de Madrid: `+01:00` en invierno, `+02:00` en verano. `published: false` oculta una convocatoria. La web se genera de manera estática: los eventos se filtran por fecha al compilar; recompilar tras cambios y al caducar una convocatoria. Sin eventos futuros, aparece un mensaje de espera y acceso a Instagram.

## Fotografías

La primera selección usa imágenes remotas verificadas, sin generación por IA. Antes del lanzamiento, sustituirlas por copias autorizadas optimizadas en `public/images/` y adaptar `src` respetando el prefijo `BASE_URL` de GitHub Pages. Mantener `alt`, fecha, fuente y créditos. No utilizar el escudo de otra entidad ni recrear el oficial.

## BoscoGest y enlaces

El formulario y los perfiles de redes proceden de la página institucional consultada en el buscador. Verificar con la Ejecutiva que continúan vigentes. Cuando se facilite una URL pública de BoscoGest, incorporarla en `site` y añadir el acceso en Participa. No usar enlaces de invitación personales ni tokens.
