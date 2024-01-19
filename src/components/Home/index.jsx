import api from "../../api"
export default function Home({setToken}){
    function handleLogout(){
        localStorage.clear()
        setToken(null)
    }
    async function handleAuthRequest(){
        const response = await api.getContentOnlyIfAuth()
        const result = await response.json()
        console.log(result)
        alert("Acesso autorizado")
    }
    return(
        <span className="flex gap-4 mt-8">
        <button 
        className="bg-yellow-400 px-2 py-2 rounded-md font-medium"
        onClick={handleAuthRequest}>
            Requisição autorizada
        </button>
        <button
        className="shadow-md bg-slate-50 px-8 py-2 rounded-md font-medium"
       onClick={handleLogout}
       >Fazer Logout</button>
        </span>
    )
}