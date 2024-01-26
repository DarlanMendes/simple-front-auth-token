import api from "./../../api/index"
import { useState } from "react"
import { useContext } from "react"
import {UserContext} from "./../../context/UserContext"
import { useNavigate } from "react-router-dom"
export default function FormLogin() {
    const [data, setData] = useState({ name: "", password: "" })
    const navigation = useNavigate()
    const {signIn, user} = useContext(UserContext)
    if(user!==null ){
        navigation("/")
    }
    async function handleSubmit(e) {
        e.preventDefault()
        signIn(data.name, data.password)
        
    }
    function handleInputChanges(e) {
        setData((userPrev) => ({ ...userPrev, [e.target.name]: e.target.value }))
    }
    return (
        <form onSubmit={handleSubmit}
            className="border flex flex-col max-w-96 w-[90vw] h-[320px]
         px-12 justify-center items-center gap-4 
         bg-slate-50 rounded-xl"
        >
            <h2 className="text-2xl mb-4 text-fuchsia-900 font-semibold">Login IREDE</h2>
            <label className=" flex gap-4 justify-between items-center"> Usuário:
                <input
                    name="name"
                    className="border rounded-md px-2 py-1"
                    onChange={handleInputChanges}
                    value={data.name}
                />
            </label>
            <label className=" flex gap-7 justify-between items-center">Senha:
                <input
                    name="password"
                    className="border rounded-md px-2 py-1"
                    onChange={handleInputChanges}
                    value={data.password}
                />
            </label>
            <div className="flex flex-col items-center">
                <button
                    className="mt-8 border w-48 py-2 rounded-md bg-fuchsia-800 text-white"
                    type="submit"
                >Fazer Login</button>
                <a
                    className="text-[12px] mt-1"
                >Não tem cadastro? Clique aqui</a>
            </div>

        </form>
    )
}