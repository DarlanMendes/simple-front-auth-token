


import FormLogin from "./components/FormLogin"
import PrivatePages from "./components/PrivatePages"
import Home from "./components/Home"
import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
   
    if (token) {

      // Decodifica o token usando a chave secreta usada no servidor
      try {
        const decoded = jwtDecode(token, 'seuSegredoSuperSecreto');
        console.log(decoded)
        setDecodedToken(decoded);
      } catch (error) {
        console.error('Erro ao decodificar o token:', error.message);
        setDecodedToken(null);
      }
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-fuchsia-800">
      {decodedToken ?
        <PrivatePages decodedToken={decodedToken}>
          <Home setToken={setToken}/>
        </PrivatePages>
        : <FormLogin setToken={setToken} />
      }


    </main>
  )
}

export default App
