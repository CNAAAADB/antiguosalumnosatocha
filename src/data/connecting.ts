export const connecting = {
 name:'Connecting',
 instagram:'https://www.instagram.com/connecting_eu/',
 collaborator:'Red InterLavapiés',
 collaboratorUrl:'https://redinterlavapies.com/',
 funding:'Cofinanciado por la Unión Europea a través del Cuerpo Europeo de Solidaridad',
 // Carteles originales consultados en Canva. Los pies antiguos de Erasmus+ se sustituyen
 // únicamente en la composición HTML de la web; los diseños de Canva no se modifican.
 sources:{
  overview:'https://www.canva.com/design/DAHYlcNQFpU/view',
  first:'https://www.canva.com/design/DAHYlRWnlKk/view',
  second:'https://www.canva.com/design/DAHZUlOq1A4/view',
  euEmblem:'https://european-union.europa.eu/document/download/8fd15c1e-c5b8-44e7-a9eb-824609d68150_en?filename=Normal%20reproduction%20in%20colour%20-%20SVG.zip',
 },
};
export const connectingMeetings = [
 {slug:'conociendonos',number:'01',title:'Conociéndonos',subtitle:'Primer encuentro',date:'2026-10-25T17:30:00+01:00',
  location:'Sala de la Asociación · Salesianos Atocha',poster:'conociendonos.png',posterWidth:400,posterHeight:500,legacyFooter:true,
  description:'Un primer encuentro para conocernos mejor, compartir la tarde y empezar a construir comunidad.',
  format:'Dinámicas de grupo, convivencia y merienda compartida.'},
 {slug:'en-equipo',number:'02',title:'En equipo',subtitle:'Comunicación y trabajo en equipo',date:'2026-11-15T17:30:00+01:00',
  location:'Sala de la Asociación · Salesianos Atocha',poster:'en-equipo.png',posterWidth:365,posterHeight:548,legacyFooter:false,
  description:'Una tarde de deporte, dinámicas y merienda compartida.',
  format:'Un encuentro para trabajar la comunicación y compartir una experiencia en equipo.'},
];
export function nextConnectingMeeting(now=new Date()){
 return connectingMeetings.filter(meeting=>Date.parse(meeting.date)>=now.getTime())
  .sort((a,b)=>Date.parse(a.date)-Date.parse(b.date))[0];
}
