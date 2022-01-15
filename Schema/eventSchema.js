import * as yup from 'yup'

const eventSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    price: yup.number().typeError('Price must be a number').required('Price is required'),
    date: yup.date().typeError('Date is required').required('Date is required'),
    imgFile: yup.mixed().required('File is required'),
})

export default eventSchema;