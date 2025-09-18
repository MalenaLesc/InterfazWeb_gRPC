import React from "react";
import Usuarios from "./Usuarios";
import Inventario from "./Inventario";
import Evento from "./Evento";


function Menu({ usuarios, onLogout }) {

  return (
    <div>
      <h2>
        Bienvenido, {usuarios.nombre} ({usuarios.rol})
      </h2>
      <button onClick={onLogout}>Cerrar sesión</button>

      <hr />
      {usuarios.rol === "PRESIDENTE" && (
        <>
          <Usuarios />
          <Inventario />
          <Evento />
        </>
      )}
      {usuarios.rol === "VOCAL" && <Inventario />}
      {usuarios.rol === "COORDINADOR" && <Evento />}
      {usuarios.rol === "VOLUNTARIO" && <Evento />}
    </div>
  );
}

export default Menu;
