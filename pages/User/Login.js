import { useState, useContext } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import {LoginUserMutation} from "../../queries/UserQueries";
import UserContext from "../../context/UserContext"
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith, 
    ForgotPassword
} from "../../Components/FormComp/MainComp"


const Login = () => {
  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')

  // const context = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({
      variables: {
        identity:identity,
        password: password
      }
    })
  }

  
  const [loginUser] = useMutation(LoginUserMutation, {
    onCompleted: (data) => {
      if(data.loginUser.token){
        // context.token.setToken(data.loginUser.token)
        // context.email.setEmail(data.loginUser.email)
        // context.username.setUsername(data.loginUser.username)
        // context.userId.setUserId(data.loginUser.userId)

        const apiData = {token:data.loginUser.token, email:data.loginUser.email, userId:data.loginUser.userId, username:data.loginUser.username}
        
        fetch("/api/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiData)
        })
        
      }
    }
  });


  return ( 
      <div>
      <div>
          <Navbar />
      </div>
      <div>
      <MainContainer onSubmit={handleSubmit}>
        <WelcomeText>Sign In</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Username or Email" value={identity} 
          onChange={(e) => setIdentity(e.target.value) } />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </InputContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        <ButtonContainer>
          <Button content="Sign In" />
        </ButtonContainer>
        <LoginWith><Link href="/User"><a>Register</a></Link></LoginWith>
        <HorizontalRule />
      </MainContainer>
      </div>
  </div> 
  );
}
 
export default Login;