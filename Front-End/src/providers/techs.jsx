import { createContext, useContext } from "react";
import { ExampleContext } from "./UserContext";
import { api } from "../services/api";


export const TechsContext = createContext({})

export const TechsProvider = ({ children }) => {

    const { setLista, toastSuccess,cards } = useContext(ExampleContext)


    const createTech = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.post('/users/techs', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // console.log(data)

            setLista(data)
            toastSuccess('Tecnologia criada com sucesso !',2000)
            cards()
        } catch (error) {
            console.log(error)
            toastErro('Tecnologia já criada !',2000)
        }
    }


    const delPost = async () => {
        const token = localStorage.getItem('@TOKEN')
        const idPost = localStorage.getItem('@ID_POST')
        try {
            const { data } = await api.delete(`/users/techs/${idPost}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log(data)
            toastSuccess('Tech Deletada !',2000)
            cards()
        } catch (error) {
            console.log(error)
        }
    }

    
    const atualizarPost = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        const idPost = localStorage.getItem('@ID_POST')
        try {
            const { data } = await api.put(`/users/techs/${idPost}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log(data)
            toastSuccess('Status atualizado !',2000)
            cards()
        } catch (error) {
            console.log(error)
            toastErro('Só é possivel atualizar o Status !',2000)
        }
    }




    return (
        <TechsContext.Provider value={{createTech,delPost,atualizarPost}}>
            {children}
        </TechsContext.Provider>
    )
}

