import * as yup from "yup"
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';

export const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })

  const {register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const submitForm = (data) => {}