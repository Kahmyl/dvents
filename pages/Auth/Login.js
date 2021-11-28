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
    return ( 
        <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <MainContainer>
          <WelcomeText>Sign In</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ForgotPassword>Forgot Password ?</ForgotPassword>
          <ButtonContainer>
            <Button content="Sign In" />
          </ButtonContainer>
          <LoginWith><Link href="/Auth"><a>Register</a></Link></LoginWith>
          <HorizontalRule />
        </MainContainer>
        </div>
    </div> 
    );
}
 
export default Login;