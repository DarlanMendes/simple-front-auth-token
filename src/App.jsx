
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from "./context/UserContext"


function App() {
  const {user} = useContext(UserContext)



  return (
    <main className="flex flex-col items-center justify-center h-screen bg-fuchsia-800">

      <BrowserRouter>
        <Routes>
          { 
          user &&
            //Condição para renderização de rotas privadas
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>

          }
          <Route path="/login" element={<Login />} />



        </Routes>

      </BrowserRouter>

    </main>
  )
}

export default App
