import styles from './style.module.scss'


function SecUser({  userClient }) {


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
