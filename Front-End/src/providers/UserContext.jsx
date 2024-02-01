import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useOutclick } from "../hooks/useOutclick";
import { useKeydown } from "../hooks/useKeydown";
import { toast } from "react-toastify";

export const ExampleContext = createContext({})

export const ExampleProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const [lista, setLista] = useState([])

    const cards = async () => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const { data } = await api.get('/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log(data)
            setLista(data.techs)
        } catch (error) {
            console.log(error)
        }
    }

    function toastSuccess( message, time) {
        toast.success(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#343B41',
                color: '#F8F9FA'
            }
        });
    }
    function toastErro( message, time) {
        toast.error(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#343B41',
                color: '#F8F9FA'
            }
        });
    }


    const userRegister = async (formData) => {
        try {
            const { data } = await api.post('/users', formData);
            console.log(data)
            toastSuccess('Redirecionando para página de login.',2000)
            setTimeout(() => {
                navigate('/')
            }, 2000);

        } catch (error) {
            console.log(error.message)
            toastErro('E-mail já cadastrado !',3000)
        }
    }

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData);
            console.log(data)
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@USER', JSON.stringify(data.user))
            setUser(data.user)
            toastSuccess('Redirecionando para Dashboard!',2000)
            setTimeout(() => {
                navigate('/dash')
            }, 2000);

        } catch (error) {
            console.log(error)
            toastErro('Senha ou e-mail incorretos !',3000)
        }
    }

    const userLogout = () => {
        localStorage.removeItem('@TOKEN')
        localStorage.removeItem('@USER')
        setUser(null)
        navigate('/')
    }

    const localUser = JSON.parse(localStorage.getItem('@USER'))

    useEffect(() => {
        const loadUser = async () => {
            const localToken = localStorage.getItem("@TOKEN")

            if (localToken) {
                toastSuccess("Usuário já logado .", 2000)
                navigate("/dash")
            }else{
                navigate("/")
            }
        }
        loadUser()
    }, [])

    const modalRef = useOutclick(() => {
        setIsOpen(false);
        setIsOpen2(false);
    })

    const buttonRef = useKeydown('Escape', (element) => {
        element.click()
    })

    const [isOpen2, setIsOpen2] = useState(false)






    return (
        <ExampleContext.Provider value={{ toastSuccess ,toastErro ,cards, setLista, user, userLogin, userRegister, userLogout, isOpen, setIsOpen, modalRef, buttonRef, localUser, isOpen2, setIsOpen2, setUser, lista }}>
            {children}
        </ExampleContext.Provider>
    )
}

