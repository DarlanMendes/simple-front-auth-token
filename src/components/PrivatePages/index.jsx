import { useEffect, useState } from "react"

export default function PrivatePages({ decodedToken, children }) {
    const[user, setUser] = useState()

    useEffect(()=>{
        const{username, email, avatar} = decodedToken
        if(username&& email&& avatar){
            setUser({name:username, email:email, avatar:avatar})
        }
        
    },[])
    return (
    <>
        <header className="flex  py-2 text-white justify-around items-center w-full shadow-md">
            IREDE
            <div className="flex items-center gap-4 ">
            <img src={user?.avatar} alt={user?.name}
            className="rounded-full h-10 w-10 object-cover"
            />
            Olá, {user?.name}
            </div>
            
        </header>
        <main className="h-full">
            {children}
        </main>
    </>

    )
}