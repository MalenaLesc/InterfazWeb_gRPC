import React, { useEffect, useState } from "react";
import { listarUsuarios } from "../servicios/grpcCliente";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getListaUsuarios = async () => {
      try {
        const lista = await listarUsuarios();
        setUsuarios(lista);
      } catch (err) {
        console.error("Error cargando usuarios:", err);
      }
    };

    getListaUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} {u.apellido} - {u.rol} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
