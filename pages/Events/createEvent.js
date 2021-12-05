import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import Navbar from "../../Components/Nav/Navbar";
import Button from "../../Components/FormComp/ButtonComp";
import Input from "../../Components/FormComp/InputComp";
import { CreateEvents } from "../../queries/EventQueries";
import Router from 'next/router'
import UserContext from '../../context/UserContext'

import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
} from "../../Components/FormComp/MainComp"

const CreateEvent = () => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const user = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description, price)
        createEvent({
          variables: {
            title: title,
            description: description,
            price: price,
            user: user.userId.userId
          }
        })
    }

    const [createEvent] = useMutation(CreateEvents, {
        onCompleted: (data) => {
            Router.push('/Events')
        }
    })



    return ( 
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
            <MainContainer onSubmit={handleSubmit}>
              <WelcomeText>Add Event</WelcomeText>
              <InputContainer>
                <Input type="text" placeholder="Title" value={title} 
                onChange={(e) => setTitle(e.target.value) }/>
              </InputContainer>
              <InputContainer>
                <Input type="text" placeholder="Description" value={description} 
                onChange={(e) => setDescription(e.target.value) } />
              </InputContainer>
              <InputContainer>
                <Input type="number" placeholder="Price" value={price} 
                onChange={(e) => setPrice(e.target.value)} />
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
 
export default CreateEvent;