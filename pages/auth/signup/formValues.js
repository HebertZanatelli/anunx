import {
    object,
    string,
    ref
} from 'yup';

/* não esquecer que vc levou muito tempo procurando o "erro do cógido", mas é porque nao tinha importado
o REF, então, quando for importar o yup, impora igual o exemplo abaixo:
import * as yup from 'yup'; */

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
}

const validationSchema = object({
    name:
        string()
            .required('Campo Obrigatório'),
    email:
        string()
            .email('Digite um e-mail válido')
            .required('Campo Obrigatório'),
    password:
        string()
        .min(6, 'Senha muito curta, insira pelo menos 6 caracteres')
            .required('Campo Obrigatório'),
    passwordConf:
        string()
            .required('Campo Obrigatório')
            .oneOf([ref('password'), null], 'As senhas precisam ser iguais')

})

export {
    initialValues,
    validationSchema
}