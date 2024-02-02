import { z } from 'zod';

export const formModal = z.object({
    name: z.string().min(3, "O nome é obrigatório e precisa de pelo menos 3 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório.").email("Forneça um e-mail válido."),

    // bio: z.string().min(1, "Campo obrigatório"),
    phone: z.string().min(1, "Campo obrigatório"),
    // course_module: z.string().min(1, "Campo obrigatório"),
})


// export const formRegister = z.object({
//     name: z.string().min(3, "O nome é obrigatório e precisa de pelo menos 3 caracteres."),
//     email: z.string().min(1, "O e-mail é obrigatório.").email("Forneça um e-mail válido."),
//     password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
//         .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maúscula.")
//         .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
//         .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
//         .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial."),
//     confirm: z.string().min(1, "Digite sua senha novamente"),
//     bio: z.string().min(1, "Campo obrigatório"),
//     contact: z.string().min(1, "Campo obrigatório"),
//     course_module: z.string().min(1, "Campo obrigatório"),
// }).refine(({ password, confirm }) => confirm == password, {
//     message: "A senha e a confirmção precisam corresponder.",
//     path: ["confirm"],
// })