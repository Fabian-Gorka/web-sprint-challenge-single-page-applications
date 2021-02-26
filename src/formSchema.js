import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required.')
        .min(3, 'Name must be at least 3 characters long'),
    size: yup.string()
        .required('Size is required'),
    Pepperoni: yup.boolean(),
    Bacon: yup.boolean(),
    Olives: yup.boolean(),
    Mushrooms: yup.boolean(),
    instructions: yup.string()
})

export default formSchema 