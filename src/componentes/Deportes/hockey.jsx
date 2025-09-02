import React, { useEffect, useState, useMemo } from "react";
import "./sports.css";
import hockeyPort from "../imagenes/hockey_port.webp";
import logoNuevo from "../imagenes/logoNuevo.webp";
import { getSchedules } from "../../client";

function Hockey() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  // IDs únicos para este componente (evita colisiones con otros acordeones)
  const ACC_ID = "accordion-hockey";
  const collapseId = (i) => `hockey-collapse-${i}`;
  const headingId  = (i) => `hockey-heading-${i}`;

  const normalize = (s) =>
    (s || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const sports = await getSchedules();

        // Variantes comunes del nombre
        const TARGETS = [
          "hockey",
          "hockey femenino",
          "hockey sobre cesped",
          "hockey sobre césped",
          "hockey cesped",
          "hockey césped",
          "field hockey",
        ];

        const match =
          sports.find((sport) => {
            const n = normalize(sport?.name);
            return TARGETS.some((k) => n.includes(normalize(k)));
          }) || null;

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

  // Títulos únicos para el <select>
  const categoryTitles = useMemo(() => {
    const titles = data?.categories?.map((c) => c?.title).filter(Boolean) || [];
    return Array.from(new Set(titles));
  }, [data]);

  return (
    <main className="mainSports" style={{ marginTop: "0rem" }}>
      <img src={hockeyPort} className="portadaBs col-lg-12" alt="portada-hockey" />

      <section className="container-fluid">
        <div className="row">
          <div className="accordion contenedor col-lg-6" id={ACC_ID}>
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
                <h2 className="accordion-header" id={headingId(index)}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId(index)}`}
                    aria-expanded={index === 0}
                    aria-controls={collapseId(index)}
                  >
                    {cat.title}
                  </button>
                </h2>

                <div
                  id={collapseId(index)}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={headingId(index)}
                  data-bs-parent={`#${ACC_ID}`}
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
              <label htmlFor="inputNombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputNombre" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-12">
              <label htmlFor="inputMensaje" className="form-label">Mensaje</label>
              <input type="text" className="form-control" style={{ height: "64px" }} id="inputMensaje" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="inputCategoria" className="form-label">Categoría</label>
              <select id="inputCategoria" className="form-select" defaultValue="">
                <option value="" disabled>Elegí una categoría</option>
                {categoryTitles.map((title, i) => (
                  <option key={i} value={title}>{title}</option>
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

export default Hockey;
