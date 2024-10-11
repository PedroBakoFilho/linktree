import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { useState, FormEvent, useEffect } from "react"

import { db } from "../../services/firebaseConnection"
import { 
    setDoc,
    doc,
    getDoc,
} from "firebase/firestore"


export function Networks(){

    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")


    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")

            getDoc(docRef)
            .then( (snapshot) => {
                if(snapshot.data() !== undefined){
                    setLinkedin(snapshot.data()?.linkedin)
                    setInstagram(snapshot.data()?.linkedin)
                    setYoutube(snapshot.data()?.youtube)
                }
            })
        }

        loadLinks()
    },[])


    function handleRegister(e:FormEvent){
        e.preventDefault()

        setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            instagram: instagram,
            youtube: youtube,
        })
        .then( () => {
            console.log("cadastrado com sucesso")
        })
        .catch( (error) => {
            console.log("ERRO AO CADASTRAR" + error)
        })

    }


    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Nossas redes sociais</h1>

            <form 
            onSubmit={handleRegister}
            className="flex flex-col max-w-xl w-full"
            >
                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                    <Input
                    placeholder="digite a Url do Linkedin..."
                    type="url"
                    value={linkedin}
                    onChange={ (e) => setLinkedin(e.target.value)}
                />
                    
                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                    <Input
                    placeholder="digite a Url do instagram..."
                    type="url"
                    value={instagram}
                    onChange={ (e) => setInstagram(e.target.value)}
                />
                

                <button
                type="submit"
                className="text-white bg-blue-600 h-9 rounded-md flex items-center justify-center mb-7 font-medium"
                >
                    Salvar links
                </button>
            </form>
        </div>
    )
}