import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'

const StyleLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #241f21;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    text-align: center;
`
const Logo = styled.img`
    width: 165px;
    margin-bottom:.75rem;
`
const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom:.75rem;
    span{
        font-weight: 700;
    }
`
const SubHeading = styled.p`
font-size: 1.5rem;
color: #fff;
opacity: 0.7;
margin-bottom:1.5rem;
`
const AddPlayGround = styled.button`
padding: .25rem 1.5rem;
font-size: 1rem;
border-radius: 30px;
display: flex;
align-items: center;
gap:0.25rem;

span{
    font-size: 1.5rem;
    font-weight: 700;
}

&:hover{
    cursor: pointer;
}
`

function LeftComponent() {
  return (
    <StyleLeftComponent>
        <ContentContainer>
            {/* <img src="/logo.png" alt="" />  this way used when files/imgs are in public file */}
            <Logo src={logo} alt="" /> 
            <MainHeading><span>Code</span> Deck</MainHeading> 
            <SubHeading>Code. Compile. Debug.</SubHeading>
            <AddPlayGround> <span>+</span> Create New Playground</AddPlayGround>
        </ContentContainer>
    </StyleLeftComponent>
  )
}

export default LeftComponent