import styled from 'styled-components'
import {motion} from 'framer-motion'

export const DropContainer = styled.div`

display: flex;
cursor: pointer;
justify-content: space-between;
font-weight: 700;
color: #212529;
text-align: center;
align-items: center;
background-color: transparent;
border: 1px solid transparent;
padding: 0.395rem 0.75rem;
font-size: 0.9rem;
line-height: 1.6;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
color: #fff;
background-color: #3490dc;
border-color: #3490dc;
&:hover{
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
}
&:focus{
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
    box-shadow: 0 0 0 0.2rem rgba(82, 161, 225, 0.5);
`


export const DropList = styled(motion.ui)`
width: 250px;
border-radius: 5px;
padding: 0 10px 10px;
z-index: 99;
right: 0;
top: 0;
overflow: auto;
position: absolute;
`

