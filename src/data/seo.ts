import {activities} from './site';

const brand = 'Antiguos Alumnos Salesianos Atocha';
export const seoPages = [
 {path:'',name:'Inicio',title:brand + ' | Asociación de Don Bosco',description:'Asociación de Antiguos Alumnos y Alumnas de Salesianos Atocha, Madrid. Descubre nuestros encuentros, actividades, historia y cómo asociarte en BoscoGest.'},
 {path:'asociacion',name:'La Asociación',title:'La Asociación | ' + brand,description:'Conoce la Asociación de Antiguos Alumnos y Alumnas de Don Bosco de Salesianos Atocha: amistad, participación y compromiso salesiano en Madrid.'},
 {path:'asociacion/historia',name:'Nuestra historia',title:'Historia de la casa de Atocha | ' + brand,description:'Recorre la historia de Salesianos Atocha desde 1901 y la memoria de sus antiguos alumnos y alumnas: aulas, talleres, encuentros y vida salesiana en Madrid.'},
 {path:'actividades',name:'Qué hacemos',title:'Actividades y encuentros | ' + brand,description:'Encuentros de antiguos alumnos, deporte, ajedrez e iniciativas solidarias de la Asociación de Antiguos Alumnos y Alumnas de Salesianos Atocha.'},
 {path:'agenda',name:'Agenda',title:'Agenda de actividades | ' + brand,description:'Consulta las próximas actividades y encuentros confirmados de los Antiguos Alumnos de Salesianos Atocha y descubre cómo participar en la Asociación.'},
 {path:'galeria',name:'Galería',title:'Galería de fotografías | ' + brand,description:'Fotografías de Salesianos Atocha, encuentros entre generaciones y archivo histórico de la casa salesiana que une a sus antiguos alumnos y alumnas.'},
 {path:'participa',name:'Forma parte',title:'Hazte socio y participa | ' + brand,description:'Únete a la Asociación de Antiguos Alumnos y Alumnas de Salesianos Atocha. Regístrate en BoscoGest, propón actividades y participa en la comunidad.'},
 {path:'contacto',name:'Contacto',title:'Contacto en Madrid | ' + brand,description:'Contacta con la Asociación de Antiguos Alumnos y Alumnas de Salesianos Atocha, Madrid. Correo, redes sociales e información para preparar una visita.'},
 {path:'fuentes',name:'Fuentes y fotografías',title:'Fuentes y fotografías | ' + brand,description:'Consulta las fuentes de la historia de Salesianos Atocha, las actividades de sus antiguos alumnos y la procedencia de las fotografías de esta web.'},
 {path:'privacidad',name:'Privacidad',title:'Privacidad | ' + brand,description:'Información sobre privacidad y funcionamiento de la web de los Antiguos Alumnos de Salesianos Atocha: servicios externos, imágenes y contacto por correo.'},
 {path:'connecting',name:'Connecting',title:'Connecting: encuentro y participación juvenil | ' + brand,description:'Conoce Connecting, el proyecto de convivencia y participación juvenil de Antiguos Alumnos Salesianos Atocha con Red InterLavapiés. Encuentros, fechas y carteles.'},
 ...activities.map(activity=>({
   path:'actividades/' + activity.slug,
   name:activity.tag,
   title:activity.tag + ' | ' + brand,
   description:activity.tag + ' en la Asociación de Antiguos Alumnos y Alumnas de Salesianos Atocha. ' + activity.text,
 })),
];
