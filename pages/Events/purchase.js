import { useState, useEffect } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import {LoginUserMutation} from "../../queries/UserQueries";
import { useRouter } from 'next/router'
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
} from "../../Components/FormComp/MainComp"

const Purchase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Id, setId] = useState('')
    const router = useRouter()

    useEffect(() => {
        
        const { id } = router.query
        setId(id)
    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Id, name, email)
      }

    return ( 
        <div>
            <div>
                <Navbar />
            </div>
            <div>
            <MainContainer onSubmit={handleSubmit}>
              <WelcomeText>Details</WelcomeText>
                <input type="hidden" value={Id} hidden/>
              <InputContainer>
                <Input type="text" placeholder="Name" value={name} 
                onChange={(e) => setName(e.target.value) } />
              </InputContainer>
              <InputContainer>
                <Input type="text" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              </InputContainer>
              <ButtonContainer>
                <Button content="Submit" />
              </ButtonContainer>
              <HorizontalRule />
            </MainContainer>
            </div>
        </div> 
     );
}
 
export default Purchase;