import React, { useEffect, useState } from "react";
import { listarEventos} from "../servicios/grpcCliente";

const Evento = () => {
  const [evento, setEvento] = useState([]);

  useEffect(() => {
    const getListaEventos = async () => {
      try {
        const lista = await listarEventos();
        console.log("Lista de eventos desde gRPC:", lista);
        setEvento(lista);
      } catch (err) {
        console.error("Error cargando Eventos:", err);
      }
    };

    getListaEventos();
  }, []);

  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {evento.map((e) => (
          <li key={e.id}>
            <strong>{e.nombreevento}</strong> - {e.fechahoraevento} - {e.descripcion}

            <ul>
              {(e.participanteseventoList || []).map((p) => (
                <li key={p.id}>
                  {p.nombre} {p.apellido}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Evento;
