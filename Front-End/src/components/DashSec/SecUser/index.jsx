import styles from './style.module.scss'


function SecUser({ localUser }) {

    // console.log(localUser)

    return (

        <>
            <section className={styles.sec}>
                <h3 className='text title'>Olá,  {localUser.name}</h3>
                <p className='text dont'>{localUser.course_module}</p>
            </section>
        </>
    )
}
export default SecUser
