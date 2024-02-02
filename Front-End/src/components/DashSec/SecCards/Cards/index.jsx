import { useContext } from "react"
import { ExampleContext } from "../../../../providers/UserContext"
import styles from './style.module.scss'
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ContactContext } from "../../../../providers/contacts";


function Cards({ contacts }) {
    // console.log(contacts)

    const { setIsOpen2 } = useContext(ExampleContext)
    const { delPost, seteditingContacts, delContacts } = useContext(ContactContext)

    const clickIdLocalStorage = (productId) => {
        // console.log(productId)
        localStorage.setItem('@ID_CONTACTS', productId)
        // localStorage.setItem('@NAME', contacts.name)
        seteditingContacts(contacts)
        setIsOpen2(true)
    }

    const clickDel = (formData) => {
        console.log("dellll")
        delContacts(formData)
        // delPost()
        setIsOpen2(false)
    }

    return (

        <>
            <li className={styles.li}>
                <button className={styles.buttonClick} >
                    <h2>{contacts.name}</h2>
                    <div>
                        <p>{contacts.phone}</p>
                        <button className={styles.btnEditt} onClick={() => clickIdLocalStorage(contacts.id)}>
                            <FiEdit2 size={13} color="rgb(0 170 255)" />
                        </button>
                        <button className={styles.btnEditt} onClick={() => clickDel(contacts.id)}>
                            <RiDeleteBin6Line size={13} color="white" />
                        </button>
                    </div>
                </button>
            </li>
        </>
    )
}
export default Cards
