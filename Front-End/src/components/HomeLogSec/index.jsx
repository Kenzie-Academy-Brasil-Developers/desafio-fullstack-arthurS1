import Logo from '../../assets/Logo.svg'
import Contact from '../../assets/Contacts.svg'
import BoxForm from './BoxForm'
import styles from './style.module.scss'

function HomeLogSec() {

    return (
        <>
            <section className='container '>
                <img src={Contact} className={styles.contact} alt="" />

                <BoxForm />
            </section>
        </>
    )
}
export default HomeLogSec
