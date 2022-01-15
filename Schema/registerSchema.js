import * as yup from 'yup'

const registerSchema = yup.object({
  username: yup.string()
           .required('Username is required'),

  email: yup.string()
            .email('Email must be valid')
            .required('Email is required'),
            
  password: yup.string()
               .min(6, 'Password should be a min of 6 Chars')
               .required('Password is required')
})

export default registerSchema