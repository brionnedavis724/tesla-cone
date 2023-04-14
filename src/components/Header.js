import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

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
            <CustomMenu />
        </RightMenu>
        <BurgerNav>
            <li><a href="#"></a>Existing Inventory</li>
            <li><a href="#"></a>Used Inventory</li>
            <li><a href="#"></a>Trade-In</li>
            <li><a href="#"></a>Cybertruck</li>
            <li><a href="#"></a>Roadster</li>
            <li><a href="#"></a>Semi</li>
            <li><a href="#"></a>Bot</li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    // border: 2px solid red;
    // make header full witdth of container
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

// const CustomMenu = styled(MenuIcon)`
//     cursor: pointer;
//     `
const CustomMenu = styled.div`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    `