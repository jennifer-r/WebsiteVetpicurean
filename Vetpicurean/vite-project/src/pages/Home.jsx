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
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import asset from '../assets/asset.png'
import cat from '../assets/cat.png'
import product from '../assets/product.png'

import bear from '../assets/bear.png'
import rating from '../assets/rating.png'
import pp from '../assets/pp.png'

const Home = () => {

  return (
    <div className="overflow-hidden">

      <div className="container">
        <div className="jumbotron jumbo text-center mt-4">
          <h1 className='Raleway'>BEST SUPPLEMENT CHOICES</h1>
          <div className="d-flex title Raleway">
            <img src={arrow} alt="" className='arrow' />
            <div className='subtitle'>FOR YOUR ANIMAL</div>
            <img src={paw1} alt="" className='paw1' />
          </div>
          <p className='Raleway '>
            We provide a complete collection of high-quality supplements and vitamins designed specifically to meet your pet&apos;s  health needs
          </p>

          <div className="">
            <div className="d-flex">
              <div className="col-4 d-flex flex-column justify-content-around">
                <div className="supplement align-content-center" style={{ height: '160px', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%' }}>
                  <img src={supplement} alt="" style={{ width: '80%' }} />
                  {/* <img src={supplement} alt="" style={{ width: '24%', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '105%'}}/> */}
                  <h5 className='Raleway'>SUPPLEMENT</h5>
                </div>

                <div className="care align-content-center" style={{ height: '160px', backgroundImage: `url(${bgCare})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '45%' }}>
                  <img src={care} alt="" style={{ width: '30%' }} />
                  {/* <img src={supplement} alt="" style={{ width: '24%', backgroundImage: `url(${bgSupplement})`, backgroundRepeat: 'no-repeat', backgroundSize: '105%'}}/> */}
                  <h5 className='Raleway'>HYGIENE CARE</h5>
                </div>
              </div>
              <div className="col-8">
                <img src={jumbo} alt="" style={{ width: '100%', justifyContent: 'center' }} />
              </div>
            </div>
          </div>
        </div>
        <img src={paw2} alt="" className='paw2' />

        {/* WHY CHOOSE US */}
        <div className="why align-items-center container">
          <Card style={{ backgroundColor: '#B1E697', borderColor: '#B1E697', padding: "3rem 0px", zIndex: 1 }}>
            <Card.Body style={{ alignContent: 'center' }}>
              <div className="d-flex">
                <div className="col-5 borders text-center position-relative">
                  <img src={bone1} alt="" className="bone1 position-absolute" style={{ top: "-150px", right: "0" }} />
                  <h1 className='Hind' style={{ fontSize: '100px' }}>860 +</h1>
                  <h2 className='mb-0' style={{ color: 'white', fontWeight: 'bold' }}>CUSTOMERS</h2>
                </div>
                <div className="col-7 desc  position-relative" style={{ paddingLeft: '6rem' }}>
                  <img src={asset} alt="" className='asset position-absolute' style={{ top: "-150px", right: "-100px" }} />
                  <h2>WHY CHOOSE US ?</h2>
                  <h4 style={{ fontWeight: 'bold' }}>Quality Guaranteed</h4>
                  <h4 style={{ marginLeft: '10rem', fontWeight: 'bold' }}>Secure Payment</h4>
                  <h4 style={{ marginLeft: '20rem', fontWeight: 'bold' }}>Fast Delivery</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <img src={paw1} alt="" className='paw' style={{ right: 0 }} />

        {/* SECTION */}
        <div className="">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-ceter">
                <img src={cat} alt="" style={{ width: '50%' }} />
                <div className="caption">
                  <h3 className='article'>LEARN HOW TO CARE PET'S</h3>
                  <p className='link'>More Details</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <img src={product} alt="" style={{ width: '30%' }} />
                <div className="caption">
                  <h3 className='article'>BASIC NUTRITION CHUBBY GUMMY</h3>
                  <p className='link'>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* TESTIMONIAL */}
        <div className="card text-bg-white" style={{ marginTop: "200px", height: "500px" }}>
          <img src={bear} className="card-img" alt="..." style={{ width: "80px", opacity: "0.3", backgroundRepeat: "repeat-x" }} />
          {/* <div style={{ backgroundImage: `url(${bear})` }}>hello</div> */}
          <div className="card-img-overlay">

            {/* BELUM GANTI FONT!!! */}
            <h3 className="card-title text-center mb-5" style={{ font: "Hind Siliguri" }}>TESTIMONIALS</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card rounded-4 h-100 p-4 ms-2" style={{ diplay: "flex", flexDirection: "column", backgroundColor: "#EDFFF0" }}>
                  <div className="card-body">
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width: "80px" }} />
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia, interdum conubia sociosqu convallis. Etiam sollicitudin dapibus maximus,”</p>
                    <div className='row mt-auto' style={{ marginTop: "auto" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width: "50px" }} />
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
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width: "80px" }} />
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia,”</p>
                    <div className='row' style={{ position: "absolute", bottom: "40px" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width: "50px" }} />
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
                    <img src={rating} className="card-img-top mt-0" alt="..." style={{ width: "80px" }} />
                    <p className="card-text mt-3">“Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia,”</p>
                    <div className='row' style={{ position: "absolute", bottom: "40px" }}>
                      <div className='col-md-2'>
                        <img src={pp} className="card-img-top" alt="..." style={{ width: "50px" }} />
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
    </div>
  )
}

export default Home