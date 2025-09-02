import React, { useEffect, useState } from "react";
import './AgendaDos.css';
import { getWeeklySchedules } from "../../client";
import logoNuevo from '../imagenes/logoNuevo.webp';

function AgendaDos() {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeeklySchedules();
        setAgendas(data);
      } catch (error) {
        console.error("Error al cargar la agenda:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="agenda-wrapper" style={{ marginTop: '8rem' }}>
      <div className="agenda-title-container">
        <h2 className="agenda-title">Agenda Deportiva</h2>
        <p className="agenda-subtitle">Conocé todas las actividades programadas del club</p>
      </div>

      <div className="agenda-content">
        {agendas.map((agenda, index) => (
          <div className="agenda-block" key={agenda._id}>
            <h3 className="agenda-week-title">
              {agenda.title} ({agenda.startDate} al {agenda.endDate})
            </h3>

            {agenda.events?.length === 0 && (
              <p className="text-muted">No hay eventos esta semana.</p>
            )}

            {agenda.events?.map((event, i) => (
              <div className="agenda-event-card" key={event._id}>
                <div className="agenda-event-header">
                  <img src={logoNuevo} alt="Logo" className="agenda-logo" />
                  <div>
                    <h4 className="agenda-sport">{event.sport?.name}</h4>
                    <p className="agenda-event-title">{event.title}</p>
                  </div>
                </div>
                <div className="agenda-event-body">
                  <p className="agenda-event-date">
                    {new Date(event.date).toLocaleString('es-AR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="agenda-event-location">
                    <strong>{event.locationType}:</strong> {event.location}
                  </p>
                  {event.tournament && (
                    <p className="agenda-tournament">🏆 {event.tournament}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default AgendaDos;
