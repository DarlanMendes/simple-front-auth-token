const baseURL = "http://localhost:3000"
const api ={
    getContentOnlyIfAuth: async()=>{
        const token = localStorage.getItem("token")
        return fetch(`${baseURL}/recurso-protegido`,
        {
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
    },
    postLogin: async(username, password)=>{
        console.log(username, password)
        return fetch(`${baseURL}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username:username, password:password})
        })
    }
}
export default api