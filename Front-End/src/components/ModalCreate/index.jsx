import { useContext } from "react"
import { ExampleContext } from "../../providers/UserContext"
import { TechsContext } from "../../providers/techs"
import styles from './style.module.scss'
import { useForm } from "react-hook-form"
import { api } from "../../services/api"


function ModalCreate() {
    const { setIsOpen, modalRef, buttonRef, setUser, setLista } = useContext(ExampleContext)
    const {createTech}= useContext(TechsContext)

    const { register, handleSubmit } = useForm();

    const subtmit = (formData) => {
        if (formData.status == undefined || formData.status == "") {
            alert("Preencha os dados corretamente")
        } else {
            console.log(formData)
            createTech(formData)
            setIsOpen(false)
        }
    }

    return (
        <>
            <div className={styles.modalOverplay}>
                <div ref={modalRef} className={styles.moadlBox}>
                    <div className={styles.div1}>
                        <p>Cadastrar Tecnologia</p>
                        <button ref={buttonRef} onClick={() => setIsOpen(false)}>X</button>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                        <label className="text label" htmlFor="title">Nome</label>
                        <input className="input" type="text" id="title" {...register('title')} placeholder="Nova Tecnologia" required />

                        <label className="text label" htmlFor="status">Selecionar status</label>
                        <select id="status"  {...register('status')} >
                            <option value="" >Status</option>
                            <option value="Iniciante" >Iniciante</option>
                            <option value="Intermediário" >Intermediário</option>
                            <option value="Avançado" >Avançado</option>
                        </select>

                        <button className="cadasterBtn" type="submit">Cadastrar Tecnologia</button>
                    </form>

                </div>
            </div>

        </>
    )
}
export default ModalCreate
