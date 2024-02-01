import { useContext, useEffect } from "react"
import { ExampleContext } from "../../providers/UserContext"
import styles from './style.module.scss'
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { TechsContext } from "../../providers/techs"


function ModalFill() {
    const { setIsOpen2, modalRef, buttonRef } = useContext(ExampleContext)
    const { atualizarPost } = useContext(TechsContext)

    const { register, handleSubmit } = useForm();

    const subtmit = (formData) => {
        // Não é permitido atualizar o título de uma tecnologia.
        atualizarPost(formData)
        setIsOpen2(false)
    }

    const name = localStorage.getItem('@NAME')

    return (
        <>
            <div className={styles.modalOverplay}>
                <div ref={modalRef} className={styles.moadlBox}>
                    <div className={styles.div1}>
                        <p>Tecnologia Detalhes</p>
                        <button ref={buttonRef} onClick={() => setIsOpen2(false)}>X</button>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                        <label className="text label" htmlFor="title">Nome</label>
                        <input className="input" type="text" id="title" value={name}  {...register('title')} placeholder="TECNOLOGIA CLICADA" />

                        <label className="text label" htmlFor="status">Selecionar status</label>
                        <select id="status"  {...register('status')} >
                            <option value="" >Status</option>
                            <option value="Iniciante" >Iniciante</option>
                            <option value="Intermediário" >Intermediário</option>
                            <option value="Avançado" >Avançado</option>
                        </select>

                            <button className="atulizarBtn" type="submit">Salvar alterações</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default ModalFill
