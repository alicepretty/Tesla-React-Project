import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
  <Wrap>
   
   <ItemText>
    <h1>MODEL S</h1>
    <p>Order Online for Touchless Derivery</p>
   </ItemText>
   <ButtonGroup>
    <LeftButton>
      custom order
    </LeftButton>
    <RightButton>
       existing inventory
    </RightButton>
   </ButtonGroup>
  
  </Wrap>
  )
}

export default Section


const Wrap = styled.div`
width : 100vw;
height : 100vh;
background-size : cover;
background-position:center;
background-repeat:no-repeat;
background-image : url('/images/model-x.jpg')

`
const ItemText = styled.div`
 
padding-top: 15vh;
text-align:center

`
const ButtonGroup = styled.div`
	background-color: black;
    color: white;
`;
const LeftButton = styled.div`
height: 40px;
width:256px;
display:flex;
// justify-content: center;
`
const RightButton = styled.div``