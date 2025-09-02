import { useState, useEffect, useMemo } from 'react';
import './AgendaEspacios.css';
import { getOcupaciones } from '../../client';


export default function AgendaEspacios() {
  const [ocupaciones, setOcupaciones] = useState([]);
  const [espacioActivo, setEspacioActivo] = useState('');
  const [loading, setLoading] = useState(true);

  // Traer ocupaciones desde Sanity
  useEffect(() => {
    (async () => {
      try {
        const data = await getOcupaciones();
        setOcupaciones(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error('Error obteniendo ocupaciones:', e);
        setOcupaciones([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Espacios únicos a partir de los datos
  const espaciosUnicos = useMemo(() => {
    return Array.from(
      new Set(
        (ocupaciones || [])
          .map((o) => o?.espacio?.nombre)
          .filter(Boolean)
      )
    );
  }, [ocupaciones]);

  // Setear el primer espacio como activo cuando haya datos
  useEffect(() => {
    if (!espacioActivo && espaciosUnicos.length > 0) {
      setEspacioActivo(espaciosUnicos[0]);
    }
  }, [espaciosUnicos, espacioActivo]);

  // Filtrado y orden como antes
  const ocupacionesFiltradas = useMemo(() => {
    return (ocupaciones || [])
      .filter((o) => o?.espacio?.nombre === espacioActivo)
      .sort((a, b) =>
        a.fecha === b.fecha
          ? a.horaInicio.localeCompare(b.horaInicio)
          : a.fecha.localeCompare(b.fecha)
      );
  }, [ocupaciones, espacioActivo]);

  if (loading) {
    return <p style={{ marginTop: '8rem', textAlign: 'center' }}>Cargando...</p>;
  }

  return (
    <section className="agenda-wrapper-espacios" style={{ marginTop: '8rem' }}>
      <h2 className="agenda-title-espacios">Ocupación de Espacios Deportivos</h2>

      <div className="espacios-scroll-wrapper">
        <p className="scroll-hint">Deslizá para ver más →</p>
        <div className="espacios-selector">
          {espaciosUnicos.map((nombre) => (
            <button
              key={nombre}
              className={nombre === espacioActivo ? 'btn-activo' : ''}
              onClick={() => setEspacioActivo(nombre)}
            >
              {nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="agenda-tabla">
        {ocupacionesFiltradas.length === 0 ? (
          <p>No hay ocupaciones registradas.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Actividad</th>
                <th>Deporte</th>
                <th>Organizador</th>
              </tr>
            </thead>
            <tbody>
              {ocupacionesFiltradas.map((o) => (
                <tr key={o.id || o._id}>
                  <td>{new Date(o.fecha).toLocaleDateString('es-AR')}</td>
                  <td>{o.horaInicio} - {o.horaFin}</td>
                  <td>{o.actividad}</td>
                  <td>{o.deporte || '-'}</td>
                  <td>{o.organizador || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
