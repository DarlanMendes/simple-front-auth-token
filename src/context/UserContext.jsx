// 1- Criar o contexto 
// 2 - Criar um provedor 
// 3 - Um estado para manipulação
// 4 - Método de login
// 4 - Vou persistir localmente

import { createContext, useEffect, useState } from "react";
import api from "../api";
export const UserContext = createContext()






export default function UserProvider({children}){
    async function signIn(username, password){
        const response = await api.postLogin(username, password)
        const {usename, email, avatar, token} = await response.json()
        setUser({username, email, avatar})
        localStorage.setItem("token", token)
    }


   const [ user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  
   useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user))
    
  }, [user])
    return(
        <UserContext.Provider value={{signIn, user}}>
            {children}
        </UserContext.Provider>
    )
}
