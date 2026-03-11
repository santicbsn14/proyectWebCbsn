import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    provincia: "",
    localidad: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000); // se borra a los 3 seg
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_48vpef8",   // 👉 tu Service ID en EmailJS
        "template_k6x5n0i",  // 👉 tu Template ID en EmailJS
        {
          name: form.inputNombre,
          email: form.inputEmail,
          provincia: form.inputProvincia,
          localidad: form.inputLocalidad,
          message: form.inputMessage,
        },
        "hRSiJamaLq6Y7oKoj"  // 👉 tu Public Key de EmailJS
      )
      .then(
        () => {
          showNotification("Mensaje enviado con éxito ✅", "success");
          setForm({
            inputNombre: "",
            inputEmail: "",
            inputProvincia: "",
            inputLocalidad: "",
            inputMessage: "",
          });
        },
        (error) => {
          console.error(error);
          showNotification("Error al enviar ❌", "error");
        }
      );
  };

  return (
    <main className="mainContact">
      {/* Notificación */}
      {notification && (
        <div className={`custom-toast ${notification.type}`}>
          {notification.msg}
        </div>
      )}

      <section className="sectioncon container-fluid my-3">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="datosUbicacion">
              <h3>Contactanos</h3>
              <h6>Pellegrini 476,B2900 DMJ, Provincia BS AS, Argentina</h6>
              <h6>0336 445-4540</h6>
              <iframe
                className="mapaUbi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.276150747003!2d-60.223823485130204!3d-33.337734599121696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b767855bb456eb%3A0x76b58e866dc3ba09!2sClub%20Belgrano%20San%20Nicolas!5e0!3m2!1ses-419!2sar!4v1651008507071!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <form className="formularioCon" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6 mb-3">
                  <label htmlFor="inputNombre" className="form-label">Nombre y apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNombre"
                    value={form.inputNombre || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    value={form.inputEmail || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="inputProvincia" className="form-label">Provincia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputProvincia"
                    value={form.inputProvincia || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="inputLocalidad" className="form-label">Localidad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLocalidad"
                    value={form.inputLocalidad || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="inputMessage" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control message"
                    id="inputMessage"
                    rows="4"
                    value={form.inputMessage || ""}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-1 btn-container">
                  <button type="submit" className="btn btnCards">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
