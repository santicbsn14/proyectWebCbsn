import React, { useEffect, useState } from "react";
import { getWeeklySchedules } from "../../client";
import './agendaListContainer.css';
import { Link, useNavigate } from "react-router-dom";

function AgendaListContainer() {
  const [agendas, setAgendas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAgendas() {
      const data = await getWeeklySchedules();
      setAgendas(data.slice(0, 2)); // Mostramos las 2 últimas
    }

    fetchAgendas();
  }, []);

  return (
    <section className="agenda-preview-section">
      <div className="agenda-preview-header">
        <h3 className="agenda-preview-title">Agenda deportiva</h3>
        <Link to="/agenda" className="agenda-preview-link">Ver agenda completa</Link>
      </div>

      <div className="agenda-preview-cards">
        {agendas.map((agenda) => (
          <div
            className="agenda-preview-card clickable"
            key={agenda._id}
            onClick={() => navigate(`/agenda/${agenda._id}`)}
          >
            {agenda.coverImage && (
              <img src={agenda.coverImage} alt="agenda portada" className="agenda-card-img" />
            )}

            <div className="agenda-card-body">
              <h4>{agenda.title}</h4>
              <p className="agenda-preview-dates">
                {agenda.startDate} al {agenda.endDate}
              </p>
              <p className="agenda-preview-count">{agenda.events?.length || 0} eventos programados</p>
              <div className="agenda-preview-sports">
                {[...new Set(agenda.events.map(e => e.sport?.name))].map((sport, i) => (
                  <span key={i} className="sport-badge">{sport}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgendaListContainer;
