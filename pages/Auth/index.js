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
    LoginWith
} from "../../Components/FormComp/MainComp"

const Register = () => {
    return ( 
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <MainContainer>
          <WelcomeText>Sign Up</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Username" />
          </InputContainer>
          <InputContainer>
            <Input type="text" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <Button content="Sign Up" />
          </ButtonContainer>
          <LoginWith><Link href="/Auth/Login"><a>login</a></Link></LoginWith>
          <HorizontalRule />
        </MainContainer>
        </div>
    </div> 
    );
}
 
export default Register;