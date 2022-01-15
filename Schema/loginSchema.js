import * as yup from 'yup'

const loginSchema = yup.object({
    identity: yup.string()
            .required('Email or Username is required'),
            
    password: yup.string()
            .required('Password is required')
})


export default loginSchema