import {
    object,
    string,
    number,
    array
} from 'yup';

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = object({
    title:
        string()
            .required('Campo obrigatório')
            .min(6, 'Escreva um titulo maior')
            .max(100, 'Titulo muito grande, deixe um pouco para descrição.'),
    category:
        string()
            .required('Campo obrigatório'),
    description:
        string()
            .required('Campo Obrigatório')
            .min(50, 'Escreva uma descrição detalhada, com pelo menos 50 caracteres'),
    price:
        number()
            .required('Campo Obrigatório'),
    email:
        string()
            .email('Digite um e-mail válido')
            .required('Campo Obrigatório'),
    name:
        string()
            .required('Campo Obrigatório'),
    phone:
        number()
            .required('Campo Obrigatório'),
    files:
        array()
            .min(2, 'Insira pelo menos 2 fotos')
            .required('Campo Obrigatório')
});

export {
    initialValues,
    validationSchema
}