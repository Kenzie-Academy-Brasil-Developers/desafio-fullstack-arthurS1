import { useContext } from "react"
import { ExampleContext } from "../../../../providers/UserContext"
import styles from './style.module.scss'
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TechsContext } from "../../../../providers/techs";


function Cards({ tech }) {

    const { setIsOpen2 } = useContext(ExampleContext)
    const { delPost } = useContext(TechsContext)

    const clickIdLocalStorage = (productId) => {
        // console.log(productId)
        localStorage.setItem('@ID_POST', productId)
        localStorage.setItem('@NAME', tech.title)
        setIsOpen2(true)
    }

    const clickDel = () => {
        delPost()
        setIsOpen2(false)
    }

    return (

        <>
            <li className={styles.li}>
                <button className={styles.buttonClick} >
                    <h2>{tech.title}</h2>
                    <div>
                        <p>{tech.status}</p>
                        <button className={styles.btnEditt} onClick={() => clickIdLocalStorage(tech.id)}>
                            <FiEdit2 size={13} color="white" />
                        </button>
                        <button className={styles.btnEditt}  onClick={clickDel}>
                            <RiDeleteBin6Line size={13} color="white" />
                        </button>
                    </div>
                </button>
            </li>
        </>
    )
}
export default Cards
