import { useState, useContext } from "react";
import UserContext from '../../context/UserContext'
import { Formik } from 'formik';
import Link from "next/link";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import Router from 'next/router'
import registerSchema from "../../Schema/registerSchema";
import { ErrorText } from "../../Components/Global";
import { api } from "../../services/api";
import { createUserMutation } from "../../queries/UserQueries";
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith,
    Error
} from "../../Components/FormComp/MainComp"
import Footer from "../../Components/Footer";

 const Register = () => {

  const [errorAuth, setErrorAuth] = useState('')
  const [isdisabled, setIsDisabled] = useState(false)

  const user = useContext(UserContext)

  
    return ( 
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={registerSchema}
          onSubmit={(values) =>{
            setIsDisabled(true)
            api.post('/', {
              query:createUserMutation, 
              variables: {
                username: values.username,
                email: values.email,
                password: values.password
              }    
            })
            .then(response => {
              if (response.data.errors){
                console.log(response.data.errors[0].message)
                setIsDisabled(false)
                throw response.data.errors[0].message
              }else{
                console.log(response.data.data.createUser.username)
                user.username.setUsername(response.data.data.createUser.username)
                Router.push('/')
              }
              return
            })
            .catch((err) => {
              console.log(err)
              setErrorAuth(err)
            })
          }}
          >
            {({handleChange, handleSubmit, values, errors, touched, handleBlur}) => (
              <MainContainer onSubmit={handleSubmit}>
                <WelcomeText>Sign Up</WelcomeText>
                <Error>{errorAuth}</Error>
                <InputContainer>
                  <ErrorText>{touched.username && errors.username}</ErrorText>
                  <Input 
                    type="text" 
                    placeholder="Username" 
                    onChange={handleChange('username')}
                    value={values.username}
                    onBlur={handleBlur('username')} />
                </InputContainer>
                <InputContainer>
                  <ErrorText>{touched.email && errors.email}</ErrorText>
                  <Input 
                    type="text" 
                    placeholder="Email" 
                    onChange={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')} />
                </InputContainer>
                <InputContainer>
                  <ErrorText>{touched.password && errors.password}</ErrorText>
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange('password')}
                    value={values.password}
                    onBlur={handleBlur('password')}/>
                </InputContainer><br/>
                <ButtonContainer>
                  <Button type="submit" content="Sign Up" disabled={isdisabled} />
                </ButtonContainer>
                <LoginWith><Link href="/User/Login"><a>Login</a></Link></LoginWith>
                <HorizontalRule />
              </MainContainer>
            )}
          </Formik>
        </div>
      <div>
        <Footer/>
      </div>
    </div> 
    );
}

export default Register