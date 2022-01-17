import { useState, useContext } from "react";
import UserContext from '../../context/UserContext'
import Link from "next/link";
import { Formik } from 'formik';
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import {LoginUserMutation} from "../../queries/UserQueries";
import Router from 'next/router'
import loginSchema from "../../Schema/loginSchema";
import { ErrorText } from "../../Components/Global";
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith, 
    ForgotPassword,
    Error
} from "../../Components/FormComp/MainComp"


const Login = () => {
  const [errorAuth, setErrorAuth] = useState('')
  const [isdisabled, setIsDisabled] = useState(false)

  const user = useContext(UserContext)

  const [loginUser] = useMutation(LoginUserMutation, {
    onError: (error) => {
      setErrorAuth(error.message)
      setIsDisabled(false)
    },
    onCompleted: (data) => {
      if(data.loginUser.username){
          user.username.setUsername(data.loginUser.username)
          Router.push('/')
      }
    }
  });


  return ( 
      <div>
      <div>
          <Navbar />
      </div>
      <div>
      <Formik
      initialValues={{identity: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={(values) =>{
        setIsDisabled(true)
        loginUser({
          variables: {
            identity:values.identity,
            password: values.password
          }
        })
      }}
      >
        {({handleChange, handleSubmit, values, errors, touched, handleBlur}) => (
          <MainContainer onSubmit={handleSubmit}>
            <WelcomeText>Sign In</WelcomeText>
            <Error>{errorAuth}</Error>
            <InputContainer>
              <ErrorText>{touched.identity && errors.identity}</ErrorText>
              <Input 
                type="text" 
                placeholder="Username or Email" 
                onChange={handleChange('identity')}
                value={values.identity}
                onBlur={handleBlur('identity')} />
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
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <ButtonContainer>
              <Button type="submit" content="Sign In" disabled={isdisabled} />
            </ButtonContainer>
            <LoginWith><Link href="/User"><a>Create an accout</a></Link></LoginWith>
            <HorizontalRule />
          </MainContainer>
        )}
      </Formik>
      </div>
  </div> 
  );
}
 
export default Login;