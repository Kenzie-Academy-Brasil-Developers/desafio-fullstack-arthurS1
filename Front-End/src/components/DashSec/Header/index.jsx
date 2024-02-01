import { useContext } from "react"
import { Link } from "react-router-dom"
import { ExampleContext } from "../../../providers/UserContext"
import Logo from '../../../assets/Logo.svg'
import styles from './style.module.scss'


function Header() {
    const { userLogout } = useContext(ExampleContext)

    return (

        <>
            <header className={styles.div}>
                <img src={Logo} alt="" />
                
                <Link to='/'>
                    <button className="backBtn dash" onClick={userLogout}>Sair</button>
                </Link>
            </header>
        </>
    )
}
export default Header
