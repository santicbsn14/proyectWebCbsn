import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "../Agenda/AgendaDos.css";
import logoNuevo from "../imagenes/logoNuevo.webp";
import { client } from "../../client"; // Sanity client

// Parseo: detecta la hora y deja el resto como descripción
function parseLinea(linea) {
  if (!linea) return { descripcion: "", hora: null };

  const horaRegex = /(\b\d{1,2}[:.]\d{2}|\b\d{1,2})\s*(hs|h|HS|Hs)?\b/;
  const m = linea.match(horaRegex);

  let hora = null;
  if (m) {
    let raw = m[1].replace(".", ":");
    if (/^\d{1,2}$/.test(raw)) raw = raw.padStart(2, "0") + ":00";
    hora = raw;
  }

  // Quitar la hora del texto original para que no se repita
  let descripcion = linea.replace(horaRegex, "").trim();
  descripcion = descripcion.replace(/^[-\s]+/, "");

  return { descripcion, hora };
}

const sortByHora = (a, b) => {
  if (!a.hora && !b.hora) return 0;
  if (!a.hora) return 1;
  if (!b.hora) return -1;
  return a.hora.localeCompare(b.hora);
};

function formatDateKey(key) {
  const [year, month, day] = key.split("-");
  const fecha = new Date(Number(year), Number(month) - 1, Number(day));
  return fecha.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });
}

export default function AgendaEventos() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [agenda, setAgenda] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar agenda + eventos desde Sanity
  useEffect(() => {
    setLoading(true);
    setError(null);

    const query = `
      *[_type == "weeklySchedule" && _id == $id][0]{
        _id,
        title,
        startDate,
        endDate,
        events[]-> | order(fecha asc, condicion asc) {
          _id,
          fecha,
          titulo,
          condicion,
          lugar,
          partidos,
          notas,
          deporte->{ _id, name }
        }
      }
    `;

    client
      .fetch(query, { id })
      .then((res) => {
        setAgenda(res);
        setItems(res?.events || []);
      })
      .catch((e) => setError(e?.message || "Error al cargar"))
      .finally(() => setLoading(false));
  }, [id]);

  // Agrupar por día y separar Local/Visitante
  const grouped = useMemo(() => {
    const map = {};
    for (const ev of items) {
      const key = ev.fecha.slice(0, 10);
      if (!map[key]) map[key] = { local: [], visitante: [] };
      const side = ev.condicion === "visitante" ? "visitante" : "local";
      map[key][side].push(ev);
    }
    return Object.entries(map)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([dia, buckets]) => ({ dia, ...buckets }));
  }, [items]);

  if (loading)
    return <p style={{ marginTop: "8rem", textAlign: "center" }}>Cargando agenda…</p>;
  if (error)
    return <p style={{ marginTop: "8rem", textAlign: "center" }}>Error: {error}</p>;

  return (
    <main className="agenda-wrapper" style={{ marginTop: "8rem" }}>
      <div className="agenda-title-container">
        <h2 className="agenda-title">{agenda?.title || "Agenda deportiva"}</h2>
        {agenda && (
          <p className="agenda-subtitle">
            Semana del <strong>{agenda.startDate}</strong> al{" "}
            <strong>{agenda.endDate}</strong>
          </p>
        )}
      </div>

      <div className="agenda-content">
        <div className="agenda-block">
          {grouped.length === 0 && <p className="text-muted">No hay eventos cargados.</p>}

          {grouped.map(({ dia, local, visitante }) => (
            <section key={dia} className="agenda-day-block">
              <h3 className="agenda-week-title">
                {formatDateKey(dia)} <span className="fecha-num">({dia})</span>
              </h3>

              <div className="agenda-columns">
                {/* Local */}
                <div className="agenda-col col-local">
                  <div className="col-header">
                    <span className="col-title">Local</span>
                  </div>
                  {local.length === 0 && <p className="col-empty">—</p>}
                  {local.map((ev) => {
                    const lineas = (ev.partidos || []).map(parseLinea).sort(sortByHora);
                    return (
                      <article className="agenda-event-card card-local" key={ev._id}>
                        <div className="agenda-event-header">
                          <img src={logoNuevo} alt="Logo" className="agenda-logo" />
                          <div>
                            <h4 className="agenda-sport">{ev.deporte?.name || "Deporte"}</h4>
                            <p className="agenda-event-title">{ev.titulo}</p>
                          </div>
                        </div>
                        <div className="agenda-event-body">
                          {ev.lugar && (
                            <p className="agenda-event-location">
                              <strong>Cancha/Lugar:</strong> {ev.lugar}
                            </p>
                          )}
                          <ul className="partidos-lista">
                            {lineas.map((p, i) => (
                              <li key={i} className="partido-item">
                                <div className="partido-main">
                                  <span className="partido-desc">{p.descripcion || "—"}</span>
                                  {p.hora ? (
                                    <time className="partido-hora">{p.hora}</time>
                                  ) : (
                                    <span className="partido-hora vacio">s/hora</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                          {Array.isArray(ev.notas) && ev.notas.length > 0 && (
                            <div className="evento-notas">
                              <strong>Notas:</strong>
                              <ul>
                                {ev.notas.map((n, idx) => (
                                  <li key={idx}>{n}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Visitante */}
                <div className="agenda-col col-visitante">
                  <div className="col-header">
                    <span className="col-title">Visitante</span>
                  </div>
                  {visitante.length === 0 && <p className="col-empty">—</p>}
                  {visitante.map((ev) => {
                    const lineas = (ev.partidos || []).map(parseLinea).sort(sortByHora);
                    return (
                      <article className="agenda-event-card card-visitante" key={ev._id}>
                        <div className="agenda-event-header">
                          <img src={logoNuevo} alt="Logo" className="agenda-logo" />
                          <div>
                            <h4 className="agenda-sport">{ev.deporte?.name || "Deporte"}</h4>
                            <p className="agenda-event-title">{ev.titulo}</p>
                          </div>
                        </div>
                        <div className="agenda-event-body">
                          {ev.lugar && (
                            <p className="agenda-event-location">
                              <strong>Cancha/Lugar:</strong> {ev.lugar}
                            </p>
                          )}
                          <ul className="partidos-lista">
                            {lineas.map((p, i) => (
                              <li key={i} className="partido-item">
                                <div className="partido-main">
                                  <span className="partido-desc">{p.descripcion || "—"}</span>
                                  {p.hora ? (
                                    <time className="partido-hora">{p.hora}</time>
                                  ) : (
                                    <span className="partido-hora vacio">s/hora</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                          {Array.isArray(ev.notas) && ev.notas.length > 0 && (
                            <div className="evento-notas">
                              <strong>Notas:</strong>
                              <ul>
                                {ev.notas.map((n, idx) => (
                                  <li key={idx}>{n}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
