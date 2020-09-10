import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../calculator.svg'

const Header = () => {
  return(
    //navigation bar component
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
                Net Income Calculator
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header