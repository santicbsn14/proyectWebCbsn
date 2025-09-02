import React, { useEffect, useState } from "react";
import logoNuevo from "../imagenes/logoNuevo.webp";
import efiPort from "../imagenes/efi-port.webp";
import "./sports.css";
import { getSchedules } from "../../client";

function EFI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const sports = await getSchedules();

        // Soporta varias formas de nombrar el deporte en Sanity
        const TARGET_NAMES = ["EFI", "Educación Física Infantil", "Educacion Fisica Infantil"];
        const match =
          sports.find((sport) => TARGET_NAMES.includes((sport?.name || "").trim())) || null;

        setData(match);
      } catch (err) {
        console.error("Error al obtener los horarios:", err);
        setError("No se pudieron cargar los horarios. Intente más tarde.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="mainSports" style={{ marginTop: "8rem" }}>
      <img src={efiPort} className="portadaBs col-lg-12" alt="portada-efi" />

      <section className="container-fluid">
        <div className="row">
          <div className="accordion contenedor col-lg-6" id="accordionExample">
            <h4 className="">Horarios</h4>

            {loading && (
              <div className="text-center my-4">
                <p className="text-muted">Cargando horarios...</p>
              </div>
            )}

            {!loading && error && (
              <div className="text-center my-4">
                <p className="text-danger">{error}</p>
              </div>
            )}

            {!loading && !error && (!data?.categories || data.categories.length === 0) && (
              <div className="text-center my-4">
                <p className="text-muted">No se han ingresado horarios todavía.</p>
              </div>
            )}

            {data?.categories?.map((cat, index) => (
              <div className="accordion-item" key={cat._key || index}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`collapse${index}`}
                >
                  {cat.title}
                </button>

                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <img
                      src={logoNuevo}
                      style={{ height: "44px", width: "76px" }}
                      className="mx-auto"
                      alt="logo"
                    />

                    {(cat.days?.length || cat.location) && (
                      <h6>
                        Días: {cat.days?.join(" - ") ?? "---"} Sede: {cat.location ?? "---"}
                      </h6>
                    )}

                    {cat.coaches?.length > 0 && (
                      <p>Profesores: {cat.coaches.join(" - ")}</p>
                    )}

                    <ul className="list-group">
                      {cat.schedules?.map((item, i) => (
                        <li className="list-group-item" key={item._key || i}>
                          <strong>{item.group}</strong>: {item.startTime}hs a {item.endTime}hs
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="col-lg-6 row g-3 formulario mx-auto">
            <h4>Contactar con profesores</h4>
            <p>¡Obtendrá una respuesta en la dirección de correo electrónico que ingrese!</p>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{ height: "64px" }} id="inputAddress2" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="inputState" className="form-label">Categoría</label>
              <select id="inputState" className="form-select">
                {data?.categories?.map((cat, i) => (
                  <option key={i} value={cat.title}>{cat.title}</option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" id="probando" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default EFI;
