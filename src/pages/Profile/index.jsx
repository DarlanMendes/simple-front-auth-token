import api from "../../api"
export default function Profile() {
    async function reqInfo() {
        const response = await api.getContentOnlyIfAuth()
        const result = await response.json()
        console.log(result)
    }
    reqInfo()
    return (
        <main>
            Perfil
        </main>
    )
}