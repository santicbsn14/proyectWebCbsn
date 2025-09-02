// NavbarContainer.jsx
import { useLocation } from 'react-router-dom';
import NavBar from './navbar';  // tu navbar actual


function NavbarContainer() {
  const location = useLocation();
  const isTorneoRoute = location.pathname.startsWith('/torneo-nacional-formativas');

  return (
    <>
      {isTorneoRoute ? <div> </div>: <NavBar />}
    </>
  );
}

export default NavbarContainer;