import { useContext } from 'react'
import styles from './style.module.scss'
import { ExampleContext } from '../../../providers/UserContext'


function SecUser({  userClient }) {

    // const {  clientGet } = useContext(ExampleContext)

    // console.log(userClient)
    // console.log(clientGet.name)

    return (

        <>
            <section className={styles.sec}>
                <h3 className='text title'>Olá,  {userClient.name}</h3>
                <p className='text dont'>{userClient.email}</p>
            </section>
        </>
    )
}
export default SecUser
