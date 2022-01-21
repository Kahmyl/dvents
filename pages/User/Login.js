import { useState, useContext } from "react";
import UserContext from '../../context/UserContext'
import Link from "next/link";
import { Formik } from 'formik';
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import Router from 'next/router'
import loginSchema from "../../Schema/loginSchema";
import { ErrorText } from "../../Components/Global";
import { api } from "../../services/api";
import { loginUserMutation } from "../../queries/UserQueries";
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
        api.post('/', {
          query:loginUserMutation, 
          variables: {
            identity: values.identity,
            password: values.password
          }    
        })
        .then(response => {
          if (response.data.errors){
            console.log(response.data.errors[0].message)
            setIsDisabled(false)
            throw response.data.errors[0].message
          }else{
            console.log(response.data.data.loginUser.username)
            user.username.setUsername(response.data.data.loginUser.username)
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