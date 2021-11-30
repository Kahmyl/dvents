import { useState } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import { createUserMutation, GetUsers} from "../../queries/UserQueries";

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
  const [signup, setSignup] = useState('Sign Up')
  
  const [createUser, { data, loading, error }] = useMutation(createUserMutation);


  const handleSubmit = (e) => {
    e.preventDefault()
    createUser({
      variables: {
        username: username,
        email: email,
        password: password
      },
      refetchQueries: [ { query: GetUsers }]
    })

    if (loading) {
      setSignup('Loading...')
    }
    if (error) {
      return error.message
    }

    if(createUser){
      console.log(data)
      console.log(createUser.username)
    }
  }

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
            <Button content={signup} />
          </ButtonContainer>
          <LoginWith><Link href="/User/Login"><a>login</a></Link></LoginWith>
          <HorizontalRule />
        </MainContainer>
        </div>
    </div> 
    );
}

export default Register