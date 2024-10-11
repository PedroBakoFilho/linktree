import { BiLogOut } from "react-icons/bi" 
import { Link } from "react-router-dom"

import { auth } from "../../services/firebaseConnection"
import { signOut } from "firebase/auth"

export function Header(){

    async function handleLogOut(){
        await signOut(auth)
    }

    return(
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
                <div className="flex gap-3 font-medium">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/admin">
                        Link
                    </Link>
                    <Link to="/admin/social">
                        Redes
                    </Link>
                </div>

                <button onClick={handleLogOut}>
                    <BiLogOut size={28} color="#db2629" />
                </button>
            </nav>
        </header>
    )
}