import { useForm } from "react-hook-form"
import { useContext } from "react";
import { ExampleContext } from "../../../../providers/UserContext";
import styles from './style.module.scss'
import { api } from "../../../../services/api";

function FormGo() {

    const ClientLogin = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            console.log(data)
            // localStorage.setItem('@TOKEN', data.token)
            // localStorage.setItem('@USER', JSON.stringify(data.user))
            // setUser(data.user)
            
            // toastSuccess('Redirecionando para Dashboard!', 2000)
            // setTimeout(() => {
            //     navigate('/dash')
            // }, 2000);

        } catch (error) {
            console.log(error)
            // toastErro('Senha ou e-mail incorretos !', 3000)
        }
    }
    // ////////////

    const { register, handleSubmit } = useForm();

    const { userLogin } = useContext(ExampleContext)

    const subtmit = (formData) => {
        console.log(formData)
        // userLogin(formData)
        ClientLogin(formData)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                <label className="text label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email" {...register('email')} placeholder="Digite seu e-mail" required />

                <label className="text label" htmlFor="password">Senha</label>
                <input className="input" type="password" id="password" {...register('password')} placeholder="Digite sua senha" required />

                <button className="log" type="submit">Entrar</button>
            </form>
        </>
    )
}
export default FormGo
