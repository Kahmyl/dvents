import { useState, useContext, useEffect } from "react";
import { Formik } from 'formik';
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import { CreateEvents } from "../../queries/EventQueries";
import { findUser } from "../../queries/UserQueries";
import Router from 'next/router'
import UserContext from '../../context/UserContext'
import eventSchema from "../../Schema/eventSchema";
import { ErrorText } from "../../Components/Global";
import { api } from "../../services/api";
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule,
    Error 
} from "../../Components/FormComp/MainComp"

const CreateEvent = () => {
    const [errorAuth, setErrorAuth] = useState('')
    const [isdisabled, setIsDisabled] = useState(false)
    const [authUser, setAuthUser] = useState('')

    const user = useContext(UserContext)
    
    useEffect(() => {
      const fetch = async() => {
        const response = await api.post('/', { query: findUser })
        const data = await response.data.data
        if (data && data.user){
            setAuthUser(data.user._id)
            return data.user._id
        }else {
            return Router.push("/User/Login")
        }
      }

      fetch()
    });

    return ( 
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
            <Formik
              initialValues={{title: '', description: '', imgFile: '', price: '', date: null}}
              validationSchema={eventSchema}
              onSubmit={(values) =>{
                setIsDisabled(true)
                const formData = new FormData()
        
                formData.append("file", values.imgFile)
                formData.append("upload_preset", "ml_default")
          
                fetch("https://api.cloudinary.com/v1_1/hpiddhw8y/image/upload", {
                  method: "POST",
                  body: formData
                })
                .then(res => res.json())
                .then(data => {
                  
                  api.post('/', { 
                    query: CreateEvents, 
                    variables: {
                      title: values.title,
                      description: values.description,
                      price: values.price,
                      user: authUser,
                      image: data.secure_url,
                      date: values.date
                    }
                  })
                  .then(response => {
                    if (response.data.errors){
                      console.log(response.data.errors[0].message)
                      setIsDisabled(false)
                      throw response.data.errors[0].message
                    }else{
                      Router.push('/Events')
                    }
                    return
                  })
                  .catch((err) => {
                    console.log(err)
                    setErrorAuth(err)
                  })
                })
                .catch(err => console.log(err));
              }}
            >
              {({handleChange, setFieldValue, handleSubmit, values, errors, touched, handleBlur}) => (
                <MainContainer onSubmit={handleSubmit}>
                  <WelcomeText>Add Event</WelcomeText>
                  {errorAuth && <Error>{errorAuth}</Error>}
                  <InputContainer>
                  <ErrorText>{touched.title && errors.title}</ErrorText>
                    <Input type="text" placeholder="Title" 
                    onChange={handleChange('title')}
                    value={values.title}
                    onBlur={handleBlur('title')}/>
                  </InputContainer>
                  <InputContainer>
                  <ErrorText>{touched.description && errors.description}</ErrorText>
                    <Input type="textarea" placeholder="Description" 
                    onChange={handleChange('description')}
                    value={values.description}
                    onBlur={handleBlur('description')} />
                  </InputContainer>
                  <InputContainer>
                  <ErrorText>{touched.price && errors.price}</ErrorText>
                    <Input type="text" placeholder="Price" 
                    onChange={handleChange('price')}
                    value={values.price}
                    onBlur={handleBlur('price')} />
                  </InputContainer>
                  <InputContainer>
                  <ErrorText>{touched.date && errors.date}</ErrorText>
                    <Input type="date" placeholder="Date" 
                    onChange={handleChange('date')}
                    value={values.date}
                    onBlur={handleBlur('date')} />
                  </InputContainer>
                  <InputContainer>
                  <ErrorText>{touched.imgFile && errors.imgFile}</ErrorText>
                    <Input type="file" placeholder="Image"
                    onChange={(event) => {
                      setFieldValue("imgFile", event.currentTarget.files[0]);
                    }} />
                  </InputContainer>
                  <p></p>
                  <ButtonContainer>
                    <Button type="submit" content="Submit" disabled={isdisabled}/>
                  </ButtonContainer>
                  <HorizontalRule />
                </MainContainer>
              )}
            </Formik>
            </div>
        </div>
     );
}
 
export default CreateEvent;
