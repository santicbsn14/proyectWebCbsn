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
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainSports from './componentes/Mains/mainDeportes.jsx';
import RenderNewsRequests from './componentes/NewsRequests/renderNewsRequests.jsx';
import MainInstalaciones from './componentes/Mains/mainInstalaciones.jsx';
import NewsDetailContainer from './componentes/NewsDetail/NewsDetailContainer.jsx';
import MainEscuelas from './componentes/Mains/mainEscuelas.jsx';
import Ajedrez from './componentes/Deportes/ajedres.jsx';




function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/newsRequests/:word" element={<RenderNewsRequests />} />
      <Route path="/newsdetail/:id" element={<NewsDetailContainer/>}/>
      <Route path='/mainSports' element={<MainSports/>}/>
      <Route path='/mainInstalaciones' element={<MainInstalaciones/>}/>
      <Route path="/mainEscuelas" element={<MainEscuelas/>}/>
      <Route path="/elclub" element={<Autoridades/>}/>
      <Route path="/basquet" element={<Basquet/>}/>
      <Route path="/futbol" element={<Futbol/>}/>
      <Route path="/ajedrez" element={<Ajedrez/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
