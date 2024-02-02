import { createContext, useContext, useState } from "react";
import { ExampleContext } from "./UserContext";
import { api } from "../services/api";


export const ContactContext = createContext({})
// TechsContext
// TechsProvider
export const ContactProvider = ({ children }) => {

    const { setLista, toastSuccess, cards, getUser, toastErro } = useContext(ExampleContext)



    // ///////////////////////////////////////////////////////


    const createContact = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.post('/contacts', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // console.log(data)

            // setLista(data)
            toastSuccess('Contato criado com sucesso !', 2000)
            // cards()
            getUser()
        } catch (error) {
            console.log(error)
            // alert("já criado")
            toastErro('E-mail já vinculado em outra conta !', 5000)
        }
    }

    const pacthContacts = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        const idPost = localStorage.getItem('@ID_CONTACTS')
        // console.log(idPost)
        try {
            const { data } = await api.patch(`/contacts/${idPost}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log(data)
            toastSuccess('Contato atualizado !', 2000)
            // cards()
            getUser()
        } catch (error) {
            console.log(error)
            // toastErro('Só é possivel atualizar o Status !', 2000)
        }
    }

    const [editingContacts, seteditingContacts] = useState(null)
    // console.log(editingContacts)


    const delContacts = async (formData) => {
        const token = localStorage.getItem('@TOKEN')
        // const idPost = localStorage.getItem('@ID_CONTACTS')
        console.log(formData)

        try {
            const { data } = await api.delete(`/contacts/${formData}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log(data)
            toastSuccess('Contato Deletado !', 2000)
            // cards()
            await getUser()

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ContactContext.Provider value={{  createContact, pacthContacts, seteditingContacts, editingContacts, delContacts }}>
            {children}
        </ContactContext.Provider>
    )
}

