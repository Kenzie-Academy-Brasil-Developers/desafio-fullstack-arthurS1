import { useContext, useEffect } from "react"
import { ExampleContext } from "../../providers/UserContext"
import styles from './style.module.scss'
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { ContactContext } from "../../providers/contacts"
import { zodResolver } from "@hookform/resolvers/zod"
import { formModal } from "./formModal"


function ModalFill() {
    const { setIsOpen2, modalRef, buttonRef } = useContext(ExampleContext)
    const { atualizarPost, editingContacts, pacthContacts } = useContext(ContactContext)

    const { register, handleSubmit } = useForm({
        values: {
            name: editingContacts.name,
            email: editingContacts.email,
            phone: editingContacts.phone,
        }
    });


    const subtmit = (formData) => {
        // Não é permitido atualizar o título de uma tecnologia.
        console.log(formData)
        pacthContacts(formData)

        // atualizarPost(formData)
        setIsOpen2(false)
    }

    // const name = localStorage.getItem('@NAME')

    return (
        <>
            <div className={styles.modalOverplay}>
                <div ref={modalRef} className={styles.moadlBox}>
                    <div className={styles.div1}>
                        <p>Detalhes de Contato</p>
                        <button ref={buttonRef} onClick={() => setIsOpen2(false)}>X</button>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                        <label className="text label" htmlFor="title">Nome Completo</label>
                        {/* <input className="input" type="text" id="title" value={name}  {...register('title')} placeholder="TECNOLOGIA CLICADA" /> */}
                        <input className="input" type="text" id="title"   {...register('name')} placeholder="Nome para Contato" />
                        {/* {errors.name ? <p>{errors.name.message}</p> : null} */}

                        <label className="text label" htmlFor="title">E-mail</label>
                        <input className="input" type="text" id="title"   {...register('email')} placeholder="E-mail para Contato" />
                        {/* {errors.email ? <p>{errors.email.message}</p> : null} */}

                        <label className="text label" htmlFor="title">Número</label>
                        <input className="input" type="text" id="title"   {...register('phone')} placeholder="Número para Contato" />
                        {/* {errors.phone ? <p>{errors.phone.message}</p> : null} */}



                        <button className="atulizarBtn" type="submit">Salvar alterações</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default ModalFill
