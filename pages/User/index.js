import { useState } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import { createUserMutation} from "../../queries/UserQueries";

import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith
} from "../../Components/FormComp/MainComp"

 const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser({
      variables: {
        username: username,
        email: email,
        password: password
      }
    })
  }
  
  const [createUser] = useMutation(createUserMutation, {
    onCompleted: (data) => {
      console.log(data)
    }
  });



  
    return ( 
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <MainContainer onSubmit={handleSubmit}>
          <WelcomeText>Sign Up</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value) }/>
          </InputContainer>
          <InputContainer>
            <Input type="text" placeholder="Email" value={email} 
            onChange={(e) => setEmail(e.target.value) } />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)} />
          </InputContainer>
          <ButtonContainer>
            <Button content="Sign up" />
          </ButtonContainer>
          <LoginWith><Link href="/User/Login"><a>login</a></Link></LoginWith>
          <HorizontalRule />
        </MainContainer>
        </div>
    </div> 
    );
}

export default Register