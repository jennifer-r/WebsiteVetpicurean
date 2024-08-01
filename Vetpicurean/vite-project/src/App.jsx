import { Fragment } from 'react'
import React from "react"
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import logo from './assets/vetpic.png'
import arrow from './assets/arrow.png'
import paw1 from './assets/paw1.png'
import jumbo from './assets/jumbo.png'
import supplement from './assets/supplement.png'
import bgSupplement from './assets/bgsuplement.png'
import care from './assets/care.png'
import bgCare from './assets/bgcare.png'
import jumpic from './assets/jumpic.png'

import bear from './assets/bear.png'
import rating from './assets/rating.png'
import pp from './assets/pp.png'


function App() {

  return (
    <>
      <Fragment>

        {/* NAVBAR */}
        <Navbar expand="lg">
          <Container fluid>
            {/* <Navbar.Brand href="#home" > */}
              <img src={logo} alt="" style={{width: "15%"}}/>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='justify-content-center Hind'>
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px', fontWeight: '500'}}
                navbarScroll
              >
                <Nav.Link href="#action1" className='me-4'>HOME</Nav.Link>
                <Nav.Link href="#action2" className='me-4'>ABOUT</Nav.Link>
                <Nav.Link href="#action2" className='me-4'>TIPS</Nav.Link>
                <Nav.Link href="#action2" className='me-4'>PRODUCTS</Nav.Link>
                <Nav.Link href="#action2" className='me-4'>CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex Raleway">
              <Button className='me-4' style={{borderColor: '#6BF584', color: '#6BF584', backgroundColor: '#FFFFFF', width: '110px', fontWeight: 'bold'}}>LOG IN</Button>
              <Button style={{backgroundColor: '#6BF584', borderColor: '#6BF584', width: '110px', fontWeight: 'bold'}}>REGISTER</Button>
            </div>
          </Container>
        </Navbar>

        {/* JUMBOTRON */}
        <div className="container-fluid">
          <div className="jumbotron text-center mt-4">
            <h1 className='Raleway'>BEST SUPPLEMENT CHOICES</h1>
            <div className="d-flex title Raleway">
              <img src={arrow} alt="" className='arrow'/>
              <div className='subtitle'>FOR YOUR ANIMAL</div>
              <img src={paw1} alt="" className='paw1'/>
            </div>
            <p className='Raleway '>We provide a complete collection of high-quality supplements and vitamins designed specifically to meet your pet's health needs</p>

            <div className="d-flex align-items-center">
              <div className="col-4">   
                <div className="d-flex flex-column">
                  <div className="">
                    <div className="supplement align-content-center" style={{height: '160px', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '45%'}}>
                      <img src={supplement} alt="" style={{width: '30%'}}/>
                      {/* <img src={supplement} alt="" style={{ width: '24%', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '105%'}}/> */}
                    </div>
                    <h5 className='Raleway'>SUPPLEMENT</h5>
                  </div>
                  
                  <div className="">
                    <div className="care align-content-center" style={{height: '160px', backgroundImage: `url(${bgCare})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '45%'}}>
                      <img src={care} alt="" style={{width: '30%'}}/>
                      {/* <img src={supplement} alt="" style={{ width: '24%', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '105%'}}/> */}
                    </div>
                    <h5 className='Raleway'>HYGIENE CARE</h5>
                  </div>
                </div>  

                {/* <div className="supplement" style={{height: '100px', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '28%', backgroundPosition: 'center'}}>
                  <img src={supplement} alt=""/>
                  <!-- <img src={supplement} alt="" style={{ width: '24%', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '105%'}}/> -->
                </div>
                <div className="care">
                  <img src={care} alt="" style={{ width: '30%', backgroundImage: `url(${bgCare})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}/>
                </div> */}

              </div>
              <div className="col-8">
                <div className="bg">
                  <img src={jumbo} alt=""/>
                </div>
                <div className="pic" style={{zIndex: 2, top: '130px', left: 0, position: 'relative'}}>
                  <img src={jumpic} alt="" style={{width: '47%'}}/>
                </div>
              </div>
            </div>



          </div>
        </div>
        
        



























        

        {/* TESTIMONIALS */}
        <div className="card text-bg-white" style={{ marginTop: "200px", height: "500px" }}>
          <img src={bear} className="card-img" alt="..." style={{ width: "80px", opacity: "0.3",backgroundRepeat: "repeat-x" }}/>
          {/* <div style={{ backgroundImage: `url(${bear})` }}>hello</div> */}
          <div className="card-img-overlay">

            {/* BELUM GANTI FONT!!! */}
            <h3 className="card-title text-center mb-5" style={{ font: "Hind Siliguri" }}>TESTIMONIALS</h3> 
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card rounded-4 h-100 p-4 ms-2" style={{ diplay: "flex", flexDirection: "column", backgroundColor: "#EDFFF0" }}>
                  <div className="card-body">
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width:"80px" }}/>
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia, interdum conubia sociosqu convallis. Etiam sollicitudin dapibus maximus,”</p>
                    <div className='row mt-auto' style={{ marginTop: "auto" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width:"50px" }}/>
                      </div>
                      <div className='col-md-10'>
                        <p className="card-text mt-0 mb-0">Walter</p>
                        <p className="card-text mt-0"><small className="text-body-secondary">Andi's Dog</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card rounded-4 h-100 p-4" style={{ backgroundColor: "#EDFFF0" }}>
                  <div className="card-body">
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width:"80px" }}/>
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia,”</p>
                    <div className='row' style={{ position: "absolute", bottom: "40px" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width:"50px" }}/>
                      </div>
                      <div className='col-md-10' style={{ position: "relative", left: "30px" }}>
                        <p className="card-text mt-0 mb-0">Walter</p>
                        <p className="card-text mt-0"><small className="text-body-secondary">Andi's Dog</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card rounded-4 h-100 p-4 me-2" style={{ backgroundColor: "#EDFFF0" }}>
                  <div className="card-body">
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width:"80px" }}/>
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia,”</p>
                    <div className='row' style={{ position: "absolute", bottom: "40px" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width:"50px" }}/>
                      </div>
                      <div className='col-md-10' style={{ position: "relative", left: "30px" }}>
                        <p className="card-text mt-0 mb-0">Walter</p>
                        <p className="card-text mt-0"><small className="text-body-secondary">Andi's Dog</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* END TESTIMONIALS */}
      </Fragment>
    </>
  )
}

export default App
