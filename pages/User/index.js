import { useState, useContext } from "react";
import UserContext from '../../context/UserContext'
import { Formik } from 'formik';
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import { createUserMutation} from "../../queries/UserQueries";
import Router from 'next/router'
import registerSchema from "../../Schema/registerSchema";
import { ErrorText } from "../../Components/Global";
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith,
    Error
} from "../../Components/FormComp/MainComp"

 const Register = () => {

  const [errorAuth, setErrorAuth] = useState('')
  const [isdisabled, setIsDisabled] = useState(false)

  const user = useContext(UserContext)

  const [createUser] = useMutation(createUserMutation, {
    onError: (error) => {
      setIsDisabled(false)
      setErrorAuth(error.message)
    },
    onCompleted: (data) => {
      if(data.createUser.username){
          user.username.setUsername(data.createUser.username)
          Router.push('/')
      }
    }
  });



  
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
            createUser({
              variables: {
                username: values.username,
                email: values.email,
                password: values.password
              }
            })
          }}
          >
            {({handleChange, handleSubmit, isSubmitting, values, errors, touched, handleBlur}) => (
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
                </InputContainer>
                <ButtonContainer>
                  <Button type="submit" content="Sign Up" disabled={isdisabled} />
                </ButtonContainer>
                <LoginWith><Link href="/User/Login"><a>Login</a></Link></LoginWith>
                <HorizontalRule />
              </MainContainer>
            )}
          </Formik>
        </div>
    </div> 
    );
}

export default Register