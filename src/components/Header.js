import React from 'react'
import styled from "styled-components"
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
        <div>
            Tax credit up to $7,500 available for eligible vehicles. Learn More.
        </div>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu></CustomMenu>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    border: 2px solid red;
    // make header full witdth of container
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    div {
        // background-color: white;
    }
    `

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

// const CustomMenu = styled(MenuIcon)``
const CustomMenu = styled.div``
