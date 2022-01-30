import styled from 'styled-components'

const Desc = () => {
    return ( 
        <FlexContainer>
            <Left>
                <h1>DVENT EVENTS</h1>
                <p>Create an account now to post your events here and book a ticket to your favourite events</p>
                <button class="btn">
                  <span class="buy">Create and account</span>
                </button>
            </Left>
            <Right><img src='https://res.cloudinary.com/hpiddhw8y/image/upload/v1642936002/Cyber-Image-4_hh5qql.jpg'/></Right>
        </FlexContainer>
     );
}
 
export default Desc;


const FlexContainer = styled.div`
box-shadow: 0 15px 30px 1px grey;
background: rgba(255, 255, 255, 0.90);
text-align: center;
border-radius: 5px;
overflow: hidden;
margin: 5em auto;
height: 350px;
width: 100%;
img{
    width: 100%;
    height: 100%;
}
`

const Right = styled.div`
    transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 45%;
	display: inline-block;
`

const Left = styled.div`
    position: relative;
	text-align: center;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;
    h1{
        display: inline-block;
	    position: relative;
	    font-size: 30px;
	    color: #344055;
	    margin: 0;
    }
    p{
        text-align: center;
	    font-size: 18px;
	    color: #7d7d7d;
    }
    .control{
        position: absolute;
        bottom: 20%;
        left: 22.8%;
        
    }
    .btn {
    
        transform: translateY(0px);
        transition: 0.3s linear;
        background:  #809fff;
        border-radius: 5px;
      position: relative;
      overflow: hidden;
        cursor: pointer;
        outline: none;
        border: none;
        color: #eee;
        padding: 0;
        margin: 0;
        
    }
    
    .btn:hover{transform: translateY(-6px);
        background: #1a66ff;}
    
    .btn span {
        font-family: 'Farsan', cursive;
        transition: transform 0.3s;
        display: inline-block;
      padding: 10px 20px;
        font-size: 1.2em;
        margin:0;
        
    }
`