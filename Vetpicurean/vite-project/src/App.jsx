import { Fragment, useState } from 'react'
import { Dropdown, Container, Nav, Navbar, Modal } from 'react-bootstrap'
import { Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios'
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
  const [selectedPets, setSelectedPets] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [fullName, setFullName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [numberOfPets, setNumberOfPets] = useState('')
  const [expense, setExpense] = useState('')

  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseRegis = () => setShowRegis(false)
  const handleShowRegis = () => setShowRegis(true)
  const handleShowBio = () => {
    setShowRegis(false);
    setShowBio(true)
  }
  const handleCloseBio = () => setShowBio(false)

  const handleTogglePetSelection = (pet) => {
    setSelectedPets((prevSelectedPets) => 
      prevSelectedPets.includes(pet)
        ? prevSelectedPets.filter((item) => item !== pet)
        : [...prevSelectedPets, pet]
    );
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      
      if (response.status === 200) {
        const { token, fullName } = response.data;
        localStorage.setItem('token', token);
        setFullName(fullName)
        alert('Login successful');
        setIsAuthenticated(true);
        handleCloseLogin()
      }
    } catch (err) {
        console.error('Login failed', err);
        if (err.response && err.response.status === 400) {
          alert(err.response.data.message);
        } else {
          alert('Login failed');
        }
    }
  }

  const handleRegister = async () => {
    if (!fullName || !email|| !password || !confirmPassword) {
      alert('Please fill out all fields');
      return;
    }

    if(password !== confirmPassword){
      alert('Passwords do not match')
      return;
    }

    try{
      const response = await axios.post('http://localhost:5000/api/register', {
        fullName,
        email,
        password,
        confirmPassword
      });
      
      if (response.status === 201) {
        alert('Registration successful');
        const { userId } = response.data;
        localStorage.setItem('userId', userId)
        handleCloseRegis()
        handleShowBio()
      }
    }catch (err) {
      console.error('Registration failed: ', err);
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        alert('Registration failed');
      }
    }
  }

  const handleSaveBio = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!userId || selectedPets.length === 0 || !gender || !numberOfPets || !selectedOption || !expense) {
      alert('Please fill out all fields');
      return;
    }

    console.log('Data being sent:', {
      userId,
      petType: selectedPets,
      gender,
      numberOfPets,
      age: selectedOption,
      expense
    });

    try{
      const response = await axios.post('http://localhost:5000/api/petbio', {
        userId,
        petType: selectedPets,
        gender,
        numberOfPets,
        age: selectedOption,
        expense
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.status === 201) {
        alert('Pet biodata saved successful')
        handleCloseBio()
        handleShowLogin()
      }
    }catch (err) {
      console.error('Failed to save pet biodata: ', err);
      if (err.response) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert('Failed to save pet biodata');
      }    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setFullName('')
    alert('Yout have logged out successfully')
  }

  return (
    <>
      <Fragment>
        {/* NAVBAR */}
        <Navbar expand="lg">
          <Container fluid style={{padding: '10px 100px'}}>
            <img src={logo} alt="" style={{ width: "15%" }} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-row align-items-center" style={{ maxHeight: '100px', fontWeight: '500' }}>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
                <NavLink to="/tips" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>TIPS</NavLink>
                <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PRODUCT</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
                <NavLink to="/detailProduct" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>DetProd</NavLink>
                <NavLink to="/detailTips" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>DetTips</NavLink>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex gap-3 Raleway">
              {isAuthenticated ? (
                <>
                  <span className='navbar-text'>Hello, {fullName} !</span>
                  <ButtonSecondary onClick={handleLogout}>LOGOUT</ButtonSecondary>
                </>
              ) : (
                <>
                  <ButtonPrimary onClick={handleShowLogin}>LOGIN</ButtonPrimary>
                  <ButtonSecondary onClick={handleShowRegis}>REGISTER</ButtonSecondary>
                </>
              )}
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
              <input type="text" className="form-control mt-3" placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label className='mt-4'>Password</label>
              <input type="text" className="form-control mt-3" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleLogin}>LOGIN</button>
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
              <input type="text" className="form-control mt-3" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}/>

              <label className='mt-4'>Email</label>
              <input type="text" className="form-control mt-3" placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label className='mt-4'>Password</label>
              <input type="text" className="form-control mt-3" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              
              <label className='mt-4'>Confirm Password</label>
              <input type="text" className="form-control mt-3" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleRegister} >Continue</button>
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
              </div>

              <label className='mt-4'>Gender</label>
              <div className="d-flex mt-3">
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="maleRadio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)}/>Male
                  <label className="form-check-label me-5"></label>
                </div>
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="femaleRadio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)}/>Female
                  <label className="form-check-label"></label>
                </div>
              </div>


              <label className='mt-4'>Number of pet</label>
              <div className="d-flex mt-3">
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="lesThan3Pets" name="numberOfPets" value="< 3"  checked={numberOfPets === '< 3'} onChange={(e) => setNumberOfPets(e.target.value)}/> less than 3 pets
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check Raleway me-5 ms-5" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="threeToSevenPets" name="numberOfPets" value="3 - 7"  checked={numberOfPets === '3 - 7'} onChange={(e) => setNumberOfPets(e.target.value)}/>3 - 7 pets
                  <label className="form-check-label"></label>
                </div>
                <div className="form-check Raleway" style={{color: 'gray'}}>
                  <input type="radio" className="form-check-input" id="moreThanSevenPets" name="numberOfPets" value="> 7" checked={numberOfPets === '> 7'} onChange={(e) => setNumberOfPets(e.target.value)}/>&gt; 7 pets
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
              
              <label className='mt-4'>Expense (Monthly)</label>
              <input type="text" className="form-control mt-3" placeholder='Expense (Monthly)' value={expense} onChange={(e) => setExpense(e.target.value)}/>
            </div>

            <button className='send mt-4 mb-4' style={{width:'80%', justifyContent: 'center'}} onClick={handleSaveBio}>Register</button>
          </Modal.Body>
        </Modal>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detailProduk" element={<DetailProduct />} />
          <Route path="/detailTips" element={<DetailTips />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </>
  )
}

export default App
