import React from 'react'
import {Container,Navbar} from 'react-bootstrap'
import Button from './Button'
const NavbaR = (props) => {
    return (
      <div>
        <Navbar
          expand="lg"
          variant="light"
          bg="light"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Container>
            <Navbar.Brand href="#">Salozone </Navbar.Brand>
            <Button text="Login" handleDrawer={props.handleDrawer} />
          </Container>
        </Navbar>
      </div>
    );
}

export default NavbaR
