export const site = {
 name:'Asociación Antiguos Alumnos y Alumnas Salesianos Atocha',
 email:'antiguosalumnos@salesianosatocha.es',
 signup:'https://boscogest.com/register',
 instagram:'https://www.instagram.com/antiguosalumnosatocha/',
 facebook:'https://www.facebook.com/AAAADBAtocha/',
 official:'https://salesianosatocha.es/asociacion-de-antiguos-alumnos/',
};
export const sources = {
 association:site.official,
 history:'https://salesianos.info/blog/foto-con-historia-salesianos-atocha-1960-1970/',
 anniversary:'https://salesianos.info/blog/salesianos-atocha-abre-su-125-aniversario-con-el-compromiso-de-seguir-educando-con-alma/',
 circle:'https://salesianos.info/blog/foto-con-historia-el-circulo-domingo-savio-de-atocha/',
 sports:'https://aula.salesianosatocha.es/mod/forum/discuss.php?d=3269',
 solidarity:'https://www.confedebosco.es/wp-content/uploads/2024/03/Hoja-Atocha-313-Final.pdf',
};
export const photos = [
 {src:'https://studeo-images-bucket.s3.amazonaws.com/campus-images/251cd4b15285ff7e657e98aafb1036b7d679234db3cfd0c97f1cf552c9ca15e3.jpg',alt:'Entrada real del Colegio Salesianos Atocha, con el nombre del centro y el número 27',title:'Nuestra casa, Atocha',category:'Atocha',credit:'Ficha de Salesianos Atocha en Stuveo',source:'https://app.stuveo.com/public/es/degree/impresion-grafica-salesianos-atocha-410603143'},
 {src:'https://salesianos.info/wp-content/uploads/2026/10/Salesianos-Atocha-abre-su-125-aniversario-con-el-compromiso-de-seguir-educando-con-alma2.jpg',alt:'Participantes en el acto inaugural del 125 aniversario de Salesianos Atocha',title:'Un encuentro entre generaciones',category:'Encuentros',credit:'Salesianos Comunicación · octubre 2026',source:sources.anniversary},
 {src:'https://salesianos.info/wp-content/uploads/2026/02/212-ATOCHA-salesianos.jpeg',alt:'Vista aérea histórica de Salesianos Atocha entre 1960 y 1970',title:'Atocha desde el aire, 1960–1970',category:'Archivo',credit:'Centro Patrimonio Salesiano SSM · Salesianos España',source:sources.history},
];
// Solo convocatorias públicas confirmadas. Fechas ISO con zona horaria.
export const events: {title:string;date:string;location:string;url:string;published:boolean}[] = [];
export const activities = [
 {slug:'encuentros',number:'01',title:'Volver a encontrarnos',tag:'Encuentros y convivencia',text:'Mantener el vínculo con quienes compartieron nuestra etapa en Atocha y abrir espacio a nuevas generaciones.',detail:'La Asociación es un punto de encuentro para antiguos alumnos y alumnas. Las jornadas de convivencia permiten volver al colegio, compartir experiencias y seguir formando parte de la comunidad salesiana.',source:sources.association},
 {slug:'deporte-y-ajedrez',number:'02',title:'Compartir la partida',tag:'Deporte y ajedrez',text:'El patio y el tablero siguen siendo lugares para compartir tiempo y hacer comunidad.',detail:'La jornada de bienvenida del 26 de septiembre de 2026, organizada por la sección joven, convocó torneos de fútbol, baloncesto, voleibol y ajedrez, además de un aperitivo de convivencia. Es una actividad celebrada, no una próxima convocatoria.',source:sources.sports},
 {slug:'solidaridad',number:'03',title:'Estar cerca de los demás',tag:'Compromiso solidario',text:'Dar continuidad a la educación recibida también significa acompañar a quienes necesitan apoyo.',detail:'La Hoja Atocha de febrero de 2024 documenta la creación de la Beca Don Higinio Arce. La Asociación aportó ayuda para que dos alumnos de FP Básica pudieran participar en el Camino de Santiago. Esta referencia describe aquella iniciativa; no implica que exista una convocatoria abierta.',source:sources.solidarity},
];
export function upcomingEvents(now = new Date()) { return events.filter(e=>e.published && new Date(e.date)>=now).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date)); }
