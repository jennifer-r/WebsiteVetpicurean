// import { useState } from "react"
import Card from 'react-bootstrap/Card';
import '../App.css'


import arrow from '../assets/arrow.png'
import paw1 from '../assets/paw1.png'
import jumbo from '../assets/jumbo.png'
import supplement from '../assets/supplement.png'
import bgSupplement from '../assets/bgsuplement.png'
import care from '../assets/care.png'
import bgCare from '../assets/bgcare.png'
import jumpic from '../assets/jumpic.png'
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import asset from '../assets/asset.png'

import bear from '../assets/bear.png'
import rating from '../assets/rating.png'
import pp from '../assets/pp.png'

const Home = () => {

  return(
    <div className="container">
      <div className="jumbotron text-center mt-4">
        <h1 className='Raleway'>BEST SUPPLEMENT CHOICES</h1>
        <div className="d-flex title Raleway">
          <img src={arrow} alt="" className='arrow'/>
          <div className='subtitle'>FOR YOUR ANIMAL</div>
          <img src={paw1} alt="" className='paw1'/>
        </div>
        <p className='Raleway '>We provide a complete collection of high-quality supplements and vitamins designed specifically to meet your pet's health needs</p>

        <div className="">
          <div className="d-flex">
            <div className="col-4">   
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
            <div className="col-8">
              {/* <div className="bg" style={{alignContent: 'center'}}> */}
                <img src={jumbo} className='bg' alt="" style={{width: '43%', justifyContent: 'center'}}/>
              {/* </div> */}
              {/* <div className="pic" style={{zIndex: 2, top: '80px', position: 'reative', marginLeft: '100px'}}> */}
                <img src={jumpic} alt="" style={{width: '47%', zIndex: 2, top: '80px', position: 'relative', marginLeft: '25%'}}/>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <img src={paw2} alt="" className='paw2'/>

      <div className="why align-items-center">
        <div className="d-flex align-items-center" style={{zIndex:2}}>
          <img src={bone1} alt="" className='bone1'/>
          <img src={asset} alt="" className='asset'/>
        </div>
        <Card style={{height: '300px', backgroundColor: '#B1E697', borderColor: '#B1E697', zIndex: 1}}>
          <Card.Body style={{alignContent: 'center'}}>
            <div className="d-flex">
              <div className="col-5 borders text-center">
                <h1 className='Hind' style={{fontSize: '100px'}}>860 +</h1>
                <h2 className='Raleway mb-0' style={{color: 'white', fontWeight: 'bold', fontSize: '50px'}}>CUSTOMERS</h2>
              </div>
              <div className="col-7 desc" style={{paddingLeft: '6rem'}}>
                <h1 className='Hind' style={{fontSize: '50px'}}>WHY CHOOSE US ?</h1>
                <h4>Quality Guaranteed</h4>
                <h4 style={{marginLeft: '10rem'}}>Secure Payment</h4>
                <h4 style={{marginLeft: '20rem'}}>Fast Delivery</h4>
              </div>
            </div>
          </Card.Body>
        </Card> 
      </div>

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
    </div>

  
  
  )
}

export default Home