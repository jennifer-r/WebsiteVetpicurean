import { Fragment, useState } from 'react'
import { Dropdown, Container, Nav, Navbar, Modal } from 'react-bootstrap'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Tips from './pages/Tips'
import Product from './pages/Product'
import Contact from './pages/Contact'
// TAMBAHAN
import DetailProduct from './pages/DetailProduct'
import DetailTips from './pages/DetailTips'

import { ButtonPrimary, ButtonSecondary } from "./components/Button";

import logo from './assets/vetpic.png'

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegis, setShowRegis] = useState(false)
  const [showBio, setShowBio] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedPets, setSelectedPets] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)


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
    setRoute(page)
    setActiveSection(page)
  }

  const handleTogglePetSelection = (pet) => {
    setSelectedPets((prevSelectedPets) => 
      prevSelectedPets.includes(pet)
        ? prevSelectedPets.filter((item) => item !== pet)
        : [...prevSelectedPets, pet]
    );
  };

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
              {['DOG', 'CAT', 'RABBIT', 'OTHER'].map((pet) => (
              <ButtonPrimary
                key={pet}
                onClick={() => handleTogglePetSelection(pet)}
                style={{
                  backgroundColor: selectedPets.includes(pet) ? '#6BF584' : '#FFFFFF',
                  color: selectedPets.includes(pet) ? '#FFFFFF' : '#6BF584',
                  borderColor: '#6BF584',
                  width: '100px', // Width untuk setiap button
                  textAlign: 'center'
                }}
              >
                {pet}
              </ButtonPrimary>
              ))}
                {/* <ButtonPrimary 
                  isActive={activePetType == 'DOG'} 
                  onClick={() => setActivePetType('DOG')}
                >DOG</ButtonPrimary>
                <ButtonPrimary
                  isActive={activePetType == 'CAT'} 
                  onClick={() => setActivePetType('CAT')}
                >CAT</ButtonPrimary>
                <ButtonPrimary
                  isActive={activePetType == 'RABBIT'} 
                  onClick={() => setActivePetType('RABBIT')}
                >RABBIT</ButtonPrimary>
                <ButtonPrimary
                  isActive={activePetType == 'OTHER'} 
                  onClick={() => setActivePetType('OTHER')}
                >OTHER</ButtonPrimary> */}
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
              <Dropdown className="mt-3 w-100">
                <Dropdown.Toggle
                  className="choose Raleway"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    borderColor: '#CED4DA',
                    color: '#495057',
                    padding: '8px',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {selectedOption || 'Choose One'}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: '100%' }}>
                  {['13 - 17 tahun', '18 - 24 tahun', '25 - 34 tahun', '35 - 44 tahun', '45 - 54 tahun', '> 65 tahun'].map((age) => (
                    <Dropdown.Item
                      key={age}
                      onClick={() => setSelectedOption(age)}
                    >
                      {age}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* <DropdownInput 
                title="Choose One" 
                className='mt-3 Raleway'
                items={[
                  "13 - 17 tahun",
                  "18 - 24 tahun",
                  "25 - 34 tahun",
                  "35 - 44 tahun",
                  "45 - 54 tahun",
                  "> 65 years"
                ]}  
              /> 
              */}
              
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
