import api from "./../../api/index"
import { useState } from "react"
export default function FormLogin({setToken}) {
    const [user, setUser] = useState({ name: "", password: "" })

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await api.postLogin(user.name, user.password)
        const result = await response.json()
        const{token} = result
        if(token){
            localStorage.setItem("token", token)
            setToken(token)
        }
    }
    function handleInputChanges(e) {
        setUser((userPrev) => ({ ...userPrev, [e.target.name]: e.target.value }))
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
                    value={user.name}
                />
            </label>
            <label className=" flex gap-7 justify-between items-center">Senha:
                <input
                    name="password"
                    className="border rounded-md px-2 py-1"
                    onChange={handleInputChanges}
                    value={user.password}
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