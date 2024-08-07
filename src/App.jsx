import 'bootstrap/dist/css/bootstrap.css';
//Componentes
import NavBar from './componentes/NavBar/navbar.jsx';
import Home from './componentes/Home/home.jsx';
import Footer from './componentes/Footer/footer.jsx';
import Autoridades from './componentes/ElClub/autoridades.jsx';
import Basquet from './componentes/Deportes/basquet.jsx';
import Futbol from './componentes/Deportes/futbol.jsx';
import './App.css';
import Contacto from './componentes/Contacto/contacto.jsx';
//
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainSports from './componentes/Mains/mainDeportes.jsx';
import RenderNewsRequests from './componentes/NewsRequests/renderNewsRequests.jsx';
import MainInstalaciones from './componentes/Mains/mainInstalaciones.jsx';
import NewsDetailContainer from './componentes/NewsDetail/NewsDetailContainer.jsx';
import MainEscuelas from './componentes/Mains/mainEscuelas.jsx';
import Ajedrez from './componentes/Deportes/ajedres.jsx';
import GimnasiaAcuatica from './componentes/Deportes/gimnasiaAcuatica.jsx';
import Camping from './componentes/Instalaciones/camping.jsx';
import SedePellegrini from './componentes/Instalaciones/sedePellegrini.jsx';
import MainElClub from './componentes/Mains/mainElCLub.jsx';
import EFI from './componentes/Deportes/efi.jsx';
import GimnasiaArtistica from './componentes/Deportes/gimnasiaArtistica.jsx';
import Zumba from './componentes/Deportes/zumba.jsx';
import Futsal from './componentes/Deportes/futsal.jsx';
import Jardin from './componentes/Escuela/jardin.jsx';
import Primaria from './componentes/Escuela/primario.jsx';
import LoginPanelAdmin from './componentes/PanelAdministrador/loginForAdmin.jsx';
import PanelAdmin from './componentes/PanelAdministrador/panelAdmin.jsx';
import MainAreaSalud from './componentes/Mains/mainAreaSalud.jsx';
import Morteo from './componentes/Instalaciones/morteo.jsx';
import Rugby from './componentes/Deportes/rugby.jsx';
import Gimnasio from './componentes/Deportes/gimnasio.jsx';
import Voley from './componentes/Deportes/voley.jsx';
import Handball from './componentes/Deportes/handball.jsx';
import Yoga from './componentes/Deportes/yoga.jsx';
import Hockey from './componentes/Deportes/hockey.jsx';
import Judo from './componentes/Deportes/judo.jsx';
import Natacion from './componentes/Deportes/natacion.jsx';
import Historia from './componentes/ElClub/historia.jsx';
import Secundaria from './componentes/Escuela/secundario.jsx';




function App() {
  const keyPanel = import.meta.env.VITE_REACT_APP_KEY_PANEL

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={`/loginForAdmin/${keyPanel}`} element={<LoginPanelAdmin />} />
          <Route path={'/panelAdmin'} element={<PanelAdmin />} />
          <Route path='/' element={<Home />} />
          <Route path="/newsRequests/:word" element={<RenderNewsRequests />} />
          <Route path="/newsdetail/:id" element={<NewsDetailContainer />} />
          <Route path='/mainSports' element={<MainSports />} />
          <Route path='/mainInstalaciones' element={<MainInstalaciones />} />
          <Route path='/camping' element={<Camping />} />
          <Route path='/sedePellegrini' element={<SedePellegrini />} />
          <Route path='/morteo' element={<Morteo />} />
          <Route path="/mainEscuelas" element={<MainEscuelas />} />
          <Route path="/mainElCLub" element={<MainElClub />} />
          <Route path="/mainAreaSalud" element={<MainAreaSalud />} />
          <Route path="/autoridades" element={<Autoridades />} />
          <Route path="/basquet" element={<Basquet />} />
          <Route path="/judo" element={<Judo />} />
          <Route path="/futbol" element={<Futbol />} />
          <Route path="/ajedrez" element={<Ajedrez />} />
          <Route path="/natacion" element={<Natacion />} />
          <Route path="/handball" element={<Handball />} />
          <Route path="/rugby" element={<Rugby />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/voley" element={<Voley />} />
          <Route path="/gimnasio" element={<Gimnasio />} />
          <Route path="/gimnasiaAcuatica" element={<GimnasiaAcuatica />} />
          <Route path="/gimnasiaArtistica" element={<GimnasiaArtistica />} />
          <Route path="/zumba" element={<Zumba />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/futsal" element={<Futsal />} />
          <Route path="/EFI" element={<EFI />} />
          <Route path="/jardin" element={<Jardin />} />
          <Route path="/primaria" element={<Primaria />} />
          <Route path="/secundaria" element={<Secundaria />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
