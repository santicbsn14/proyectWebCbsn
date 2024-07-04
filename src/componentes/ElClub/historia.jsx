import './historia.css'
import autoridades from '../imagenes/autoridades.jpg'
import historiaMain from '../imagenes/mainHistoria.webp';
function Historia() {
  return (
    <main>
      <img src={autoridades} className="portAutoridades" alt="" />
      <section style={{ marginTop: '9rem' }} className="container-fluid sectionAuto">
        <div className="row">

          <div className="col-lg-8">
            <h4>Historia</h4>
            <p className="textoHistoria">El Club Atlético Belgrano, luego Club Belgrano y actualmente llamado Club Belgrano San Nicolás, es un típico club de barrio fundado el 30 de Mayo de 1927 en San Nicolás de los Arroyos por un grupo de jóvenes veinteañeros, con el fin de agruparse para la práctica de los deportes y en especial el fútbol.-</p>
            <p className="textoHistoria">Esa pasión deportiva se expresa en la promoción del Club Atlético Belgrano para fundar en el mismo 1927 la Liga Deportiva Nicoleña (LDN) con el fin de organizar la práctica local del fútbol, y con el apoyo de don García Núñez adquieren un predio para instalar una importante cancha de fútbol en la actual calle Urquiza. Y esa misma pasión es la que es la aglutina a las familias de los Socios Fundadores y familias amigas y conforman una importante asociación ya no deportiva sino también social, cultural y familiar. Se incorpora el ajedrez, la Biblioteca Manuel Belgrano y las bochas, y ya en el año 1932 se adquiere unas parcelas en la calle Pellegrini 476 y una importante casona en ellas. Esa es la sede, desde entonces de nuestro Club.-</p>
            <p className="textoHistoria">El Club Atlético Belgrano comienza a crecer exponencialmente con el apoyo de todos los socios y sus familias, se inicia la práctica del básquetbol, maravilloso deporte que capta el corazón de los belgranenses y lo convierten en su principal actividad. Se construyen la cancha de básquetbol de polvo de ladrillo (donde hoy se encuentra el Estadio Fortunato Bonelli, y a continuación en forma paralela, las cancha de tenis y de bochas.-</p>
            <p className="textoHistoria">En los años 1936/1937 se luce en la práctica del básquetbol un gran equipo belgranense al que se lo llamo “La Máquina Roja”, conformada por grandes deportistas que luego son dirigentes de la entidad, e incluso algunos Presidentes como Eulogio Antono Valle y  Atilio “Pirucho” Parodi.-</p>
            <p className="textoHistoria">Con el paso del tiempo, apenas unos años, el Club Atlético Belgrano con el apoyo de todos sus socios que adquieren bonos emitidos comn el fin de solventar los gastos, adquiere los lotes que conforman todo el lateral de la actual calle Roca. Y con el apoyo de los tres hermanos Córdova realiza importantes mejoras en el edificio de la casona y se construye la cancha de pelota paleta y los vestuarios. Y es allí donde se cambia el nombre por primera vez, y se saca el “Atlético” del nombre, pasando a ser solamente Club Belgrano, debido a que la entidad desarrolla actividades mucho más amplias que las deportivas.-</p>
            <p className="textoHistoria">Los festejos de las Bodas de Oro en 1952, se enlutan cuando en la cabecera de la mesa del almuerzo aniversario fallece don Cayetano Cavalli, presidente de la institución  durante 23 años y diez meses. Y a partir de ese luctuoso momento comienza a cambiar la historia de la entidad porque unos meses antes se inaugura la pileta de natación, se incorpora esa nueva disciplina, y por ello deja de ser un Club de Familias y comienza a convertirse en un club más cosmopolita conformando una base societaria mucho más populosa.-</p>
            <p className="textoHistoria">Se intensifican los deporte y la cantidad de socios y las competencias en la que el Club interviene. Durante la década de 1960 surge el mejor fruto basquetbolístico del Club Belgrano, con la conformación de un equipo que hizo época y que se conoció como la “Maquinita Roja”. </p>
            <p className="textoHistoria">Luego  se modifica notoriamente la estructura de la vieja casona de calle Pellegrini 476, se construye el Estadio Fortunato Bonelli inaugurado en 1977,  reconstruido y ampliado en el año 2000.-</p>
            <p className="textoHistoria">El patrimonio del Club Belgrano se incrementa notoriamente, primepro por donación que hacen diecisiete socios del predio de 34 hs., en la actual autopista Pedro Eugenio Aramburu; luego porque adquiere por absorción el Club Juan Bautista Azopardo en la costanera y años después el Club Argentino Oeste, de la “República de la Estación”.-</p>
            <p className="textoHistoria">Actualmente, la entidad ha modificado nuevamente su nombre, y se denomina Club Belgrano San Nicolás, debido a la necesidad de distinguir a este Club Belgrano de otros extendidos a lo largo de nuestro país en las distintas competencias deportivas en los distintos niveles amateur o profesional que realiza.-</p>
            <p className="textoHistoria">Y en la actualidad el Club Belgrano San Nicolás se ha construido un nuevo gimnasio en la sede, e importantes instalaciones en el Club de Campo Manuel Belgrano sobre la autopista Buenos Aires-Rosario caracterizado por una importante pileta de natación que congrega multitudes en el verano.-</p>
          </div>
          <div className="col-lg-4">
            <div className="mx-auto">
              <img src={historiaMain} style={{ width: '300px', height: '250px' }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>)
}
export default Historia