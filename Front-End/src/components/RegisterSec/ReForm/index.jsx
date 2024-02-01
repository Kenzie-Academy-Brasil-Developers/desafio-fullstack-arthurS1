import { useForm } from "react-hook-form";
import { formRegister } from "./formRegister";
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ExampleContext } from "../../../providers/UserContext";
import styles from './style.module.scss'

function FormRegister() {

    const clientPost = async (formData) => {
        try {
            const { data } = await api.post('/clients', formData);
            console.log(data)
            // toastSuccess('Redirecionando para página de login.',2000)
            // setTimeout(() => {
            //     navigate('/')
            // }, 2000);
            
        } catch (error) {
            console.log(error.message)
            // toastErro('E-mail já cadastrado !',3000)
        }
    }

    // /////////1

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegister)
    });


    const { userRegister } = useContext(ExampleContext)


    const subtmit = (formData) => {
        console.log(formData)
        // userRegister(formData)
        clientPost(formData)
    }

    return (

        <>
            <form className={styles.form} onSubmit={handleSubmit(subtmit)} >
                <label className="text label" htmlFor="name">Nome</label>
                <input className="input" type="text" id="name" {...register('name')} placeholder="Digite aqui seu nome" />
                {errors.name ? <p>{errors.name.message}</p> : null}

                <label className="text label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email"  {...register('email')} placeholder="Digite aqui seu e-mail" />
                {errors.email ? <p>{errors.email.message}</p> : null}

                <label className="text label" htmlFor="password">Senha</label>
                <input className="input" type="password" id="password" {...register('password')} placeholder="Digite aqui sua senha" />
                {errors.password ? <p>{errors.password.message}</p> : null}

                <label className="text label" htmlFor="confirm">Confimar Senha</label>
                <input className="input" type="password" id="confirm" {...register('confirm')} placeholder="Digite aqui novamente sua senha" />
                {errors.confirm ? <p>{errors.confirm.message}</p> : null}


                {/* <label className="text label" htmlFor="bio">Bio</label>
                <input className="input" type="text" id="bio" {...register('bio')} placeholder="Fale sobre você" />
                {errors.bio ? <p>{errors.bio.message}</p> : null} */}

                <label className="text label" htmlFor="phone">Contato</label>
                <input className="input" type="text" id="phone" {...register('phone')} placeholder="Opção de phone" />
                {errors.phone ? <p>{errors.phone.message}</p> : null}

                {/* <label className="text label" htmlFor="module">Selecionar módulo</label>
                <select id="module"  {...register('course_module')} >
                    <option value="" >Módulos</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)" >Primeiro Módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)" >Segundo Módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)" >Terceiro Módulo</option>
                    <option value="Quarto módulo (Backend Avançado)" >Quarto Módulo</option>
                </select>
                {errors.course_module ? <p>{errors.course_module.message}</p> : null} */}

                <button className="cadasterBtn" type="submit">Cadastrar</button>
            </form>

        </>
    )
}
export default FormRegister
