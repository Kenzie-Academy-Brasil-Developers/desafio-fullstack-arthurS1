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


    function toastSuccess(message, time) {
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
    function toastErro(message, time) {
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



    const userLogout = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }


    useEffect(() => {
        const loadUser = async () => {
            const localToken = localStorage.getItem("@TOKEN")

            if (localToken) {
                toastSuccess("Usuário já logado .", 2000)
                navigate("/dash")
            } else {
                navigate("/")
                toastErro("Usuário não logado .", 2000)
            }
        }
        loadUser()
        getUser()
    }, [])

    const modalRef = useOutclick(() => {
        setIsOpen(false);
        setIsOpen2(false);
    })

    const buttonRef = useKeydown('Escape', (element) => {
        element.click()
    })

    const [isOpen2, setIsOpen2] = useState(false)


    const clientPost = async (formData) => {
        try {
            const { data } = await api.post('/clients', formData);
            toastSuccess('Redirecionando para página de login.', 2000)
            setTimeout(() => {
                navigate('/')
            }, 2000);

        } catch (error) {
            console.log(error.message)
            toastErro('E-mail já cadastrado !', 3000)
        }
    }

    const clientLogin = async (formData) => {
        try {
            const { data } = await api.post('/login', formData);
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@EMAIL', JSON.stringify(formData.email))
          
            toastSuccess('Redirecionando para Dashboard!', 2000)
            setTimeout(() => {
                navigate('/dash')
            }, 2000);

        } catch (error) {
            console.log(error.message)
            toastErro('Senha ou e-mail incorretos !', 3000)
        }
    }

    const [userClient, setUserClient] = useState({});

    useEffect(() => {
        (async () => {
            await getUser()
        })()

    }, []);
    const getUser = async () => {
        try {
            const token = localStorage.getItem('@TOKEN')
            const { data } = await api.get('/clients', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setUserClient(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <ExampleContext.Provider value={{ clientLogin, getUser, userClient, clientPost, toastSuccess, toastErro, setLista, user, userLogout, isOpen, setIsOpen, modalRef, buttonRef, isOpen2, setIsOpen2, setUser, lista }}>
            {children}
        </ExampleContext.Provider>
    )
}

