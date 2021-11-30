import { useState } from "react";
import Link from "next/link";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(identity, password)
    // createUser({
    //   variables: {
    //     username: username,
    //     email: email,
    //     password: password
    //   }
    // })
  }
    return ( 
        <div>
        <div>
            <Navbar/>
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