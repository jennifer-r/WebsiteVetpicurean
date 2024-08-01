import { Fragment } from 'react'
import './App.css'
import logo from './assets/vetpic.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    <>
      <Fragment>
        <Navbar expand="lg" className='p-4'>
          <Container fluid>
            <Navbar.Brand href="#" >
              halo
              <img src={logo} alt="" style={{width: "15%"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    </>
  )
}

export default App
