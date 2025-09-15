import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
      {!usuario ? (
        <Login onLoginSuccess={setUsuario} />
      ) : (
        <div>
          <h2>Bienvenido {usuario.nombre}</h2>
          <p>Email: {usuario.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
