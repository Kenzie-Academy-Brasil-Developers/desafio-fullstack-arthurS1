import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react";
import { ExampleContext } from "../../../../providers/UserContext";
import styles from './style.module.scss'
import { api } from "../../../../services/api";

function FormGo() {



    const { register, handleSubmit } = useForm();

    const { userLogin, clientLogin } = useContext(ExampleContext)

    const subtmit = (formData) => {
        console.log(formData)
        // console.log(formData.email)
        // userLogin(formData)
        clientLogin(formData)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(subtmit)}>
                <label className="text label" htmlFor="email">E-mail</label>
                <input className="input" type="email" id="email" {...register('email')} placeholder="Digite seu e-mail" required />

                <label className="text label" htmlFor="password">Senha</label>
                <input className="input" type="password" id="password" {...register('password')} placeholder="Digite sua senha" required />

                <button className="log" type="submit">Entrar</button>
            </form>
        </>
    )
}
export default FormGo
