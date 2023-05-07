import {
    object,
    string,
} from 'yup';

/* não esquecer que vc levou muito tempo procurando o "erro do cógido", mas é porque nao tinha importado
o REF, então, quando for importar o yup, impora igual o exemplo abaixo:
import * as yup from 'yup'; */

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = object({
    email:
        string()
            .email('Digite um e-mail válido')
            .required('Campo Obrigatório'),
    password:
        string()
        .min(6, 'Senha muito curta, insira pelo menos 6 caracteres')
            .required('Campo Obrigatório'),
})

export {
    initialValues,
    validationSchema
}