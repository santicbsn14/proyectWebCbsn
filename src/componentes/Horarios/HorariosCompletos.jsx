import React, { useEffect, useState } from "react";
import { getSchedules } from "../../client";
import logoNuevo from "../imagenes/logoNuevo.webp";
import "./horariosCompletos.css";

function HorariosCompletos() {
  const [allSports, setAllSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSede, setSelectedSede] = useState("todas");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchAllSchedules() {
      try {
        setLoading(true);
        const sports = await getSchedules();
        // Filtrar deportes que tengan al menos una categoría
        const sportsWithSchedules = sports.filter(
          (sport) => sport.categories && sport.categories.length > 0
        );
        setAllSports(sportsWithSchedules);
      } catch (err) {
        console.error("Error al obtener los horarios:", err);
        setError("No se pudieron cargar los horarios. Intente más tarde.");
      } finally {
        setLoading(false);
      }
    }
    fetchAllSchedules();
  }, []);

  // Filtrar deportes por sede y búsqueda
  const filteredSports = allSports.filter((sport) => {
    // Filtro por búsqueda
    const matchesSearch = sport.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Filtro por sede
    if (selectedSede === "todas") {
      return matchesSearch;
    }

    // Verificar si alguna categoría del deporte tiene la sede seleccionada
    const hasSede = sport.categories?.some((cat) =>
      cat.location?.toLowerCase().includes(selectedSede.toLowerCase())
    );

    return matchesSearch && hasSede;
  });

  // Obtener todas las sedes únicas
  const getAllSedes = () => {
    const sedes = new Set();
    allSports.forEach((sport) => {
      sport.categories?.forEach((cat) => {
        if (cat.location) {
          sedes.add(cat.location);
        }
      });
    });
    return Array.from(sedes).sort();
  };

  return (
    <div className="horarios-completos-page">
      {/* Header */}
      <div className="horarios-header">
        <div className="header-content">
          <img src={logoNuevo} alt="Club Belgrano" className="header-logo" />
          <div className="header-text">
            <h1>Horarios de Actividades</h1>
            <p>Todos los deportes y categorías del Club Belgrano San Nicolás</p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="horarios-filters">
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="search">
              <i className="bi bi-search"></i> Buscar deporte
            </label>
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Ej: Fútbol, Básquet, Natación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="sede">
              <i className="bi bi-geo-alt"></i> Filtrar por sede
            </label>
            <select
              id="sede"
              className="form-select"
              value={selectedSede}
              onChange={(e) => setSelectedSede(e.target.value)}
            >
              <option value="todas">Todas las sedes</option>
              {getAllSedes().map((sede, idx) => (
                <option key={idx} value={sede}>
                  {sede}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="horarios-content">
        {loading && (
          <div className="loading-state">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p>Cargando horarios...</p>
          </div>
        )}

        {!loading && error && (
          <div className="error-state">
            <i className="bi bi-exclamation-triangle"></i>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && filteredSports.length === 0 && (
          <div className="empty-state">
            <i className="bi bi-search"></i>
            <p>No se encontraron deportes con esos criterios.</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                setSearchTerm("");
                setSelectedSede("todas");
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {!loading && !error && filteredSports.length > 0 && (
          <div className="sports-grid">
            {filteredSports.map((sport, sportIdx) => (
              <div key={sport._id || sportIdx} className="sport-card">
                <div className="sport-header">
                  <h2 className="sport-name">{sport.name}</h2>
                  <span className="categories-count">
                    {sport.categories?.length || 0}{" "}
                    {sport.categories?.length === 1 ? "categoría" : "categorías"}
                  </span>
                </div>

                <div className="accordion" id={`accordion-${sportIdx}`}>
                  {sport.categories?.map((cat, catIdx) => {
                    const collapseId = `collapse-${sportIdx}-${catIdx}`;
                    const isFirst = catIdx === 0;

                    return (
                      <div className="accordion-item" key={cat._key || catIdx}>
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${!isFirst ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isFirst}
                            aria-controls={collapseId}
                          >
                            <span className="category-title">{cat.title}</span>
                          </button>
                        </h3>

                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                          data-bs-parent={`#accordion-${sportIdx}`}
                        >
                          <div className="accordion-body">
                            {/* Info general */}
                            <div className="category-info">
                              {cat.days && cat.days.length > 0 && (
                                <div className="info-item">
                                  <i className="bi bi-calendar-week"></i>
                                  <span>
                                    <strong>Días:</strong> {cat.days.join(" - ")}
                                  </span>
                                </div>
                              )}

                              {cat.location && (
                                <div className="info-item">
                                  <i className="bi bi-geo-alt-fill"></i>
                                  <span>
                                    <strong>Sede:</strong> {cat.location}
                                  </span>
                                </div>
                              )}

                              {cat.coaches && cat.coaches.length > 0 && (
                                <div className="info-item">
                                  <i className="bi bi-person-badge"></i>
                                  <span>
                                    <strong>Profesores:</strong> {cat.coaches.join(", ")}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Horarios */}
                            {cat.schedules && cat.schedules.length > 0 && (
                              <div className="schedules-list">
                                <h4 className="schedules-title">Horarios</h4>
                                <ul className="list-group">
                                  {cat.schedules.map((schedule, idx) => (
                                    <li
                                      className="list-group-item"
                                      key={schedule._key || idx}
                                    >
                                      <span className="schedule-group">
                                        {schedule.group}
                                      </span>
                                      <span className="schedule-time">
                                        {schedule.startTime}hs - {schedule.endTime}hs
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {(!cat.schedules || cat.schedules.length === 0) && (
                              <p className="text-muted small">
                                No se han cargado horarios para esta categoría.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer informativo */}
      <div className="horarios-footer">
        <div className="footer-content">
          <p>
            <i className="bi bi-info-circle"></i> 
            Para más información sobre inscripciones y aranceles, contactate con
            la secretaría del club o visitá nuestra sección de{" "}
            <a href="/contacto">Contacto</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HorariosCompletos;