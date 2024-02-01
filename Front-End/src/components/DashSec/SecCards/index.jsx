import { useContext, useEffect, useState } from "react"
import Cards from "./Cards"
import { ExampleContext } from "../../../providers/UserContext"
import ModalCreate from "../../ModalCreate"
import ModalFill from "../../ModalFill"
import { api } from "../../../services/api"
import styles from './style.module.scss'


function SecCards() {
    const { isOpen, setIsOpen, localUser, isOpen2, setLista, setUser, user, lista, cards } = useContext(ExampleContext)


    useEffect(() => {
        cards()
    }, [])

    // console.log(lista)


    return (
        <>
            <section className={styles.sec}>
                <div className={styles.div}>
                    <h2 className="text title">Tecnologias</h2>
                    <button className="openModalCreate" onClick={() => setIsOpen(true)}>+</button>
                </div>

                {isOpen ? <ModalCreate /> : null}

                <ul className={styles.ul}>
                    {lista.length > 0 ? (
                        lista.map((tech, index) => (
                            <Cards key={index} tech={tech} />
                        ))
                    ) : (
                        <p className='text title'>Você não possui nenhuma Tecnologia</p>
                    )}
                </ul>

                {isOpen2 ? <ModalFill /> : null}

            </section>
        </>
    )
}
export default SecCards
