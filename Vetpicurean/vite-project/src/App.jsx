import { Fragment } from 'react'
import './App.css'
import logo from './assets/vetpic.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      <Fragment>
        <Navbar expand="lg">
          <Container fluid>
            {/* <Navbar.Brand href="#home" > */}
              <img src={logo} alt="" style={{width: "15%"}}/>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='justify-content-center font-link'>
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px', fontWeight: 'bold'}}
                navbarScroll
              >
                <Nav.Link href="#action1">HOME</Nav.Link>
                <Nav.Link href="#action2">ABOUT</Nav.Link>
                <Nav.Link href="#action2">TIPS</Nav.Link>
                <Nav.Link href="#action2">PRODUCTS</Nav.Link>
                <Nav.Link href="#action2">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex">
              <Button className='me-4' style={{borderColor: '#6BF584', color: '#6BF584', backgroundColor: '#FFFFFF', width: '110px', fontWeight: 'bold'}}>LOG IN</Button>
              <Button style={{backgroundColor: '#6BF584', borderColor: '#6BF584', width: '110px', fontWeight: 'bold'}}>REGISTER</Button>
            </div>
          </Container>
        </Navbar>
      </Fragment>
    </>
  )
}

export default App
