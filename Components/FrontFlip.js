import styled from "styled-components"


const FrontFlip = ({ url, children }) => {
    return(
        <Div url={url}>{children}</Div>
    )
}

export default FrontFlip

export const Div = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background-image: url(${props => (props.url ? props.url : ``)});
background-color: #cccccc;
color: black;
`