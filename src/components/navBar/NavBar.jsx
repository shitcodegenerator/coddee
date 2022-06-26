import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import styled from 'styled-components'
import SideBar from "../sideBar/SideBar"
import ThemeToggler from '@/components/themeToggler/ThemeToggler'

const NavStyle = styled.div(({ theme }) => `
padding: 12px;
margin: 16px;
border: 1px solid #e3e3e3;
border-radius: 12px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 12px;
a {
  text-decoration: none;
  color: ${theme.colors.primary}
}
`)

const NavBar = () => {
  return (
    <Fragment>
      <NavStyle>
        <ThemeToggler />
        <Link to="/">Home</Link>
        <Link to="/task">TASK</Link>
        <br />
      </NavStyle>
      <SideBar></SideBar>
      <Outlet />
    </Fragment>
  )
}

export default NavBar