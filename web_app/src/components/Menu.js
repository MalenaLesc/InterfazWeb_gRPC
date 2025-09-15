import React from "react";
import Usuarios from "./Usuarios";
import Inventario from "./Inventario";
import Evento from "./Evento";


function Menu({ user, onLogout }) {
  return (
    <div>
      <h2>
        Bienvenido, {user.nombreUsuario} ({user.rol})
      </h2>
      <button onClick={onLogout}>Cerrar sesión</button>

      <hr />
      {user.rol === "PRESIDENTE" && (
        <>
          <Usuarios />
          <Inventario />
          <Evento />
        </>
      )}
      {user.rol === "VOCAL" && <Inventario />}
      {user.rol === "COORDINADOR" && <Evento />}
      {user.rol === "VOLUNTARIO" && <Evento />}
    </div>
  );
}

export default Menu;
