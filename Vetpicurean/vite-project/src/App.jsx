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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ButtonPrimary, ButtonSecondary } from "./components/Button";

import paw1 from './assets/paw1.png'

import logo from './assets/vetpic.png'

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegis, setShowRegis] = useState(false)
  const [showBio, setShowBio] = useState(false)

  const [route, setRoute] = useState("home")
  
  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseRegis = () => setShowRegis(false)
  const handleShowRegis = () => setShowRegis(true)
  const handleShowBio = () => setShowBio(true)
  const handleCloseBio = () => setShowBio(false)


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
              <ButtonPrimary onClick={handleShowLogin}>LOGIN</ButtonPrimary>
              <ButtonSecondary onClick={handleShowRegis}>REGISTER</ButtonSecondary>
            </div>
          </Container>
        </Navbar>

        <Modal show={showLogin} onHide={handleCloseLogin} centered>
          <Modal.Header closeButton />
          <Modal.Body className='modals' style={{textAlign: 'center'}}>
            <div className="modal-title">
              <h3 style={{textTransform: 'uppercase', textAlign: 'center'}}>Welcome Back <br /> Login</h3>
              <p></p>
            </div>
            <div className='titles p-5' style={{textAlign: 'left'}}>
              <label>Email</label>
              <input type="text" className="form-control mt-3" placeholder='name@example.com'/>

              <label className='mt-4'>Password</label>
              <input type="text" className="form-control mt-3" placeholder='Password'/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleCloseLogin}>LOGIN</button>
          </Modal.Body>
        </Modal>

        <Modal show={showRegis} onHide={handleCloseRegis} centered>
          <Modal.Header closeButton />
          <Modal.Body className='modals' style={{textAlign: 'center'}}>
            <div className="modal-title">
              <h3 style={{textTransform: 'uppercase', textAlign: 'center', marginBottom:0}}>Register</h3>
              <p style={{color:'gray'}}>Make account for gets more information</p>
            </div>
            <div className='titles p-5' style={{textAlign: 'left'}}>
              <label>Full Name</label>
              <input type="text" className="form-control mt-3" placeholder='Full Name'/>

              <label className='mt-4'>Email</label>
              <input type="text" className="form-control mt-3" placeholder='name@example.com'/>

              <label className='mt-4'>Password</label>
              <input type="text" className="form-control mt-3" placeholder='Password'/>
              
              <label className='mt-4'>Confirm Password</label>
              <input type="text" className="form-control mt-3" placeholder='Confirm Password'/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleShowBio}>Continue</button>
          </Modal.Body>
        </Modal>

        <Modal show={showBio} onHide={handleCloseBio} centered>
          <Modal.Header closeButton />
          <Modal.Body className='modals' style={{textAlign: 'center'}}>
            <div className="modal-title">
              <h3 style={{textTransform: 'uppercase', textAlign: 'center', marginBottom:0}}>Pet Biodata</h3>
              <p style={{color:'gray'}}>Answer a quesions</p>
            </div>
            <div className='titles p-5' style={{textAlign: 'left'}}>
              <label>Full Name</label>
              <input type="text" className="form-control mt-3" placeholder='Full Name'/>

              <label className='mt-4'>Email</label>
              <input type="text" className="form-control mt-3" placeholder='name@example.com'/>

              <label className='mt-4'>Password</label>
              <input type="text" className="form-control mt-3" placeholder='Password'/>
              
              <label className='mt-4'>Confirm Password</label>
              <input type="text" className="form-control mt-3" placeholder='Confirm Password'/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleCloseBio}>Register</button>
          </Modal.Body>
        </Modal>


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
