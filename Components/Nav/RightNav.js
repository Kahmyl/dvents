import styled from 'styled-components';
import Link from 'next/link'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 1px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href=""><a>About Us</a></Link></li>
      <li><Link href=""><a>Contact Us</a></Link></li>
      <li><Link href=""><a>Sign In</a></Link></li>
      <li><Link href="/Auth"><a>Sign Up</a></Link></li>
    </Ul>
  )
}

export default RightNav