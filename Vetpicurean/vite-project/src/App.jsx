import { Fragment, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Tips from './pages/Tips'
import Product from './pages/Product'
import Contact from './pages/Contact'
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ButtonPrimary, ButtonSecondary } from "./components/Button";

import logo from './assets/vetpic.png'

function App() {

  const [route, setRoute] = useState("home")

  const handleNavbarClick = (page) => {
    setRoute("Hmm")
    setRoute(page)
  }

  return (
    <>
      <Fragment>
        {/* NAVBAR */}
        <Navbar expand="lg">
          <Container fluid>
            <img src={logo} alt="" style={{ width: "15%" }} />
            <Navbar.Collapse id="navbarScroll" className='justify-content-center Hind'>
              <Nav
                className="my-2 my-lg-0 align-items-center"
                style={{ maxHeight: '100px', fontWeight: '500' }}
                navbarScroll
              >
                <div className="align-items-center">
                  <span className='me-4' onClick={() => { setRoute("home") }}>HOME</span>
                  <span className='me-4' onClick={() => handleNavbarClick('about')}>ABOUT</span>
                  <span className='me-4' onClick={() => handleNavbarClick('tips')}>TIPS</span>
                  <span className='me-4' onClick={() => handleNavbarClick('product')}>PRODUCT</span>
                  <span className='me-4' onClick={() => handleNavbarClick('contact')}>CONTACT</span>
                </div>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex gap-3 Raleway">
              <ButtonPrimary onClick={() => console.log("Clicked login")}>LOGIN</ButtonPrimary>
              <ButtonSecondary onClick={() => console.log("Secondary Clicked")}>REGISTER</ButtonSecondary>
            </div>
          </Container>
        </Navbar>

        <div className="content">
          {
            route == "home" && <Home />
          }
          {
            route == "about" && <About />
          }
          {
            route == "tips" && <Tips />
          }
          {
            route == "product" && <Product />
          }
          {
            route == "contact" && <Contact />
          }
        </div>


      </Fragment>
    </>
  )
}

export default App
