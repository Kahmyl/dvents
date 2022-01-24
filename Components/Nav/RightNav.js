import styled from 'styled-components';
import { useMutation } from "@apollo/client";
import { useContext } from 'react';
import Link from 'next/link'
import { logoutUserMutation } from '../../queries/UserQueries';
import UserContext from '../../context/UserContext'
import Router from 'next/router'
import { DropContainer } from '../Dropdown/DropStyle';
import { FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import { NamePlate } from '../Global';
import { api } from '../../services/api';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 15px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    z-index: 4;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 20px 20px;
    }
  }
`;

export const LogOutIcon = styled(FaSignOutAlt)`
padding-left: 3px;
font-size: 15px;
`


const RightNav = ({ open }) => {
  const user = useContext(UserContext);


  const Logout = () => {
    api.post('/', {
      query: logoutUserMutation,
      variables: {
        username: ''
      }
    })
    .then(response => {
      user.username.setUsername('')
      Router.reload();
    })
  }

    return (
      <Ul open={open}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/Events"><a>Events</a></Link></li>
        <li><Link href="/Events/Bookings"><a>Tickets</a></Link></li>
        <li><Link href="/Events/createEvent"><a>New Event</a></Link></li>
        {user.username.username && <li onClick={Logout}><DropContainer>Logout<LogOutIcon/></DropContainer></li>}
        {!user.username.username && <li><Link href="/User/Login"><a>Sign In</a></Link></li>}
        {!user.username.username && <Link href="/User"><NamePlate><a> Sign Up </a></NamePlate></Link>}
      </Ul>
    )
}

export default RightNav
