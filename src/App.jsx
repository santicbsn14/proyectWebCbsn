import 'bootstrap/dist/css/bootstrap.css';
//Componentes
import NavBar from './componentes/NavBar/navbar.jsx';
import Home from './componentes/Home/home.jsx';
import Footer from './componentes/Footer/footer.jsx';
import Autoridades from './componentes/ElClub/autoridades.jsx';
import Basquet from './componentes/Deportes/basquet.jsx';
import Futbol from './componentes/Deportes/futbol.jsx';
import ModalEstadioUnico from './componentes/Galerias/estadioUnico.jsx';
import './App.css';
import Contacto from './componentes/Contacto/contacto.jsx';
//
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainSports from './componentes/Deportes/mainDeportes.jsx';




function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mainSports' element={<MainSports/>}/>
      <Route path='/estadioUnico' element={<ModalEstadioUnico/>}/>
      <Route path="/elclub" element={<Autoridades/>}/>
      <Route path="/basquet" element={<Basquet/>}/>
      <Route path="/futbol" element={<Futbol/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
