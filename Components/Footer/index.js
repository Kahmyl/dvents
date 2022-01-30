import styled from "styled-components";
import { FaFacebook, FaGithub, FaGooglePlus, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return ( 
        <Foot>
            <FootContent>
                <h3>Dvent</h3>
                <p>An event finder app that allows you to view all, search and also book a space for your favourite events. It also allows Authenticated users to add their events</p>
                <Ul>
                    <li><Link href={"#"}><a><FaFacebook className="logo"/></a></Link></li>
                    <li><Link href={"#"}><a><FaTwitter className="logo"/></a></Link></li>
                    <li><Link href={"#"}><a><FaInstagram className="logo"/></a></Link></li>
                    <li><Link href={"#"}><a><FaGooglePlus className="logo"/></a></Link></li>
                    <li><Link href={"#"}><a><FaGithub className="logo"/></a></Link></li>
                </Ul>
            </FootContent>
            <FootBottom>
                <p> copyright &copy;2022 <Link href="/"><a>Dvent</a></Link></p>
            </FootBottom>
        </Foot>
     );
}
 
export default Footer;

const Foot = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;
    padding-top: 40px;
    color: #fff;
    margin-top: 35px;
`

const FootContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    h3{
        font-size: 2.1rem;
        font-weight: 500;
        text-transform: capitalize;
        line-height: 3rem;
    }
    p{
        max-width: 500px;
        margin: 10px auto;
        line-height: 28px;
        font-size: 14px;
        color: #cacdd2;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
    li{
        margin: 0 10px;
    }
    a{
        text-decoration: none;
        color: #fff;
        border: 1.1px solid white;
        padding: 5px;
        border-radius: 45%;
        .logo{
            font-size: 1.1rem;
            width: 20px;
            transition: color .4s ease;
        }
        &:hover .logo{
            color: aqua;
        }
    }
`

const FootBottom = styled.div`
    background: #000;
    width: 100vw;
    padding: 20px;
    padding-bottom: 40px;
    text-align: center;
    p{
        font-size: 14px;
        word-spacing: 2px;
        text-transform: capitalize;
    }
`




