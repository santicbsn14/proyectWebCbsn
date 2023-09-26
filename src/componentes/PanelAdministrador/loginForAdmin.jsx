import React, { useState } from "react";
import { loginForAdmin, current } from "../MockService/Auth.js";
import { useNavigate } from 'react-router-dom';

function LoginPanelAdmin() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let loginSuccess = await loginForAdmin(email, password)
      if (loginSuccess.status === 'success') {
        navigate(`/panelAdmin`);
      }
    } catch (error) {
      setErrorMessage('Clave o correo electrónico incorrecto.')
      console.error(error);
    }

    // Agrega esta línea para depurar
  }
 

  return (
    <section className="container-fluid" style={{ marginTop: '10rem' }}>
      <h1 style={{ color: 'rgb(203, 0, 0)' }} className="mx-auto">Panel de administradores</h1>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleFormSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Usuario</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" />
              </div>
            </div>

            {/* Mostrar el mensaje de error */}
            {errorMessage && (
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <p style={{ color: 'red' }}>{errorMessage}</p>
                </div>
              </div>
            )}

            <button style={{ backgroundColor: 'rgb(203, 0, 0)', color: 'white' }} type="submit" className="btn ">Sign in</button>
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default LoginPanelAdmin;
