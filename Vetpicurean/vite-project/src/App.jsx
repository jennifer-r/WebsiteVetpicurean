import { Fragment, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Tips from './pages/Tips'
import Product from './pages/Product'
import Contact from './pages/Contact'
// TAMBAHAN
import DetailProduct from './pages/DetailProduct'
import DetailTips from './pages/DetailTips'
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonPrimary, ButtonSecondary } from "./components/Button";

import logo from './assets/vetpic.png'

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegis, setShowRegis] = useState(false)
  const [showBio, setShowBio] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const [route, setRoute] = useState("home")
  
  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseRegis = () => setShowRegis(false)
  const handleShowRegis = () => setShowRegis(true)
  const handleShowBio = () => {
    setShowRegis(false);
    setShowBio(true)
  }
  const handleCloseBio = () => setShowBio(false)

  const handleNavbarClick = (page) => {
    setRoute("Hmm")
    setRoute(page)
    setActiveSection(page)
  }

  return (
    <>
      <Fragment>
        {/* NAVBAR */}
        <Navbar expand="lg">
          <Container fluid style={{padding: '10px 100px'}}>
            <img src={logo} alt="" style={{ width: "15%" }} />
            <Navbar.Collapse id="navbarScroll" className='justify-content-center Hind'>
              <Nav
                className="my-2 my-lg-0 align-items-center"
                style={{ maxHeight: '100px', fontWeight: '500' }}
                navbarScroll
              >
                <div className="align-items-center">
                  <span className='me-4' 
                    style={{color: activeSection == 'home' ? '#59EC74' : 'black'}}
                    onClick={() => { setRoute("home"); setActiveSection('home') }}
                  >HOME</span>
                  <span className='me-4' 
                    style={{color: activeSection == 'about' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('about')}
                  >ABOUT</span>
                  <span className='me-4'
                    style={{color: activeSection == 'tips' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('tips')}
                  >TIPS</span>
                  <span className='me-4'
                    style={{color: activeSection == 'product' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('product')}
                  >PRODUCT</span>
                  <span className='me-4'
                    style={{color: activeSection == 'contact' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('contact')}
                  >CONTACT</span>
                  <span className='me-4'
                    style={{color: activeSection == 'detailProduct' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('detailProduct')}
                  >DetProd</span>
                  <span className='me-4'
                    style={{color: activeSection == 'detailTips' ? '#59EC74' : 'black'}}
                    onClick={() => handleNavbarClick('detailTips')}
                  >DetTips</span>
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

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleShowBio} >Continue</button>
          </Modal.Body>
        </Modal>

        <Modal show={showBio} onHide={handleCloseBio} size='lg' centered>
          <Modal.Header closeButton />
          <Modal.Body className='modals' style={{textAlign: 'center'}}>
            <div className="modal-title">
              <h3 style={{textTransform: 'uppercase', textAlign: 'center', marginBottom:0}}>Pet Biodata</h3>
              <p style={{color:'gray'}}>Answer a questions</p>
            </div>
            <div className='titles p-5' style={{textAlign: 'left'}}>
              <label>Pet Type</label>
              <div className="d-flex gap-4 mt-3 justify-content-between">
                <ButtonPrimary>DOG</ButtonPrimary>
                <ButtonPrimary>CAT</ButtonPrimary>
                <ButtonPrimary>RABBIT</ButtonPrimary>
                <ButtonPrimary>OTHER</ButtonPrimary>
              </div>

              <label className='mt-4'>Gender</label>
              <div className="d-flex mt-3">
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>Male
                  <label className="form-check-label me-5"></label>
                </div>
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Female
                  <label className="form-check-label"></label>
                </div>
              </div>


              <label className='mt-4'>Number of pet</label>
              <div className="d-flex mt-3">
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"/> kurang dari 3 pets
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check Raleway me-5 ms-5" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>3 - 7 pets
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>&gt; 7 pets
                  <label className="form-check-label"></label>
                </div>
              </div>

              <label className='mt-4'>Age</label>
              <DropdownButton id="dropdown-basic" title="Choose One" className='mt-3 choose Raleway'>
                <Dropdown.Item href="#/action-1">13 - 17 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-2">18 - 24 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-3">25 - 34 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-4">35 - 44 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-5">45 - 54 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-6">55 - 64 tahun</Dropdown.Item>
                <Dropdown.Item href="#/action-7"> &gt; 65 tahun</Dropdown.Item>
              </DropdownButton>
              
              
              <label className='mt-4'>Expense (Monthly)</label>
              <input type="text" className="form-control mt-3" placeholder='Expense (Monthly)'/>
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
          {/* TAMBAH */}
          {
            route == "detailProduct" && <DetailProduct />
          }
          {
            route == "detailTips" && <DetailTips />
          }
        </div>


      </Fragment>
    </>
  )
}

export default App
