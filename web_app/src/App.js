import React, { useState } from "react";
import Login from "./components/Login";
import Menu from "./components/Menu";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
      {!usuario ? (
        <Login onLoginSuccess={setUsuario} />
      ) : (
          <div>
            <Menu user={usuario} />
          </div>       
      )}
    </div>
  );
}

export default App;
