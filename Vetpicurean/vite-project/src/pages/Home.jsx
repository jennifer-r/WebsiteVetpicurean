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
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import petSupp from '../assets/petSupp.png'
import petSkin from '../assets/petSkin.png'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

const products = [
  { name: "[VITAMIN] Penambah Berat Badan Imun", image: product1 },
  { name: "[BUNDLE] Chubby Gummy Urigoel dan Chubby Gummy", image: product2, specialOffer: true },
  { name: "Chubby Balme Fungee Obat Jamur Gatal Kemerahan", image: product3 },
]

const testimonials = [
  {
    stars: 5,
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia, interdum conubia sociosqu convallis. Etiam sollicitudin dapibus maximus.",
    author: "WALTER",
    pet: "ANDI'S DOG"
  },
  {
    stars: 5,
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia, interdum conubia sociosqu convallis. Etiam sollicitudin dapibus maximus.",
    author: "WALTER",
    pet: "ANDI'S DOG"
  },
  {
    stars: 5,
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Vestibulum lacus facilisi per ullamcorper finibus curabitur porttitor. Arcu finibus feugiat suscipit erat conubia, interdum conubia sociosqu convallis. Etiam sollicitudin dapibus maximus.",
    author: "WALTER",
    pet: "ANDI'S DOG"
  }
];

const Testimonial = ({ stars, text, author, pet }) => (
  <div className="testimonial Raleway">
    <div className="stars">{'★'.repeat(stars)}</div>
    <p>{text}</p>
    <div className="author">
      <p>{author}</p>
      <p>{pet}</p>
    </div>
  </div>
);

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
                  <h5 className='Raleway'>SUPPLEMENT</h5>
                </div>

                <div className="care align-content-center" style={{ height: '160px', backgroundImage: `url(${bgCare})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '45%' }}>
                  <img src={care} alt="" style={{ width: '30%' }} />
                  <h5 className='Raleway'>HYGIENE CARE</h5>
                </div>

                <img src={paw2} alt="" className='paw2' />

              </div>
              <div className="col-8">
                <img src={jumbo} alt="" style={{ width: '100%', justifyContent: 'center' }} />
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="why align-items-center container">
          <Card className='shadow' style={{ backgroundColor: '#B1E697', borderColor: '#B1E697', padding: "3rem 0px", zIndex: 1 }}>
            <Card.Body style={{ alignContent: 'center' }}>
              <div className="d-flex">
                <div className="col-5 borders text-center position-relative">
                  <img src={bone1} alt="" className="bone1 position-absolute" style={{ top: "-120px", right: "0" }} />
                  <h1 className='Hind' style={{ fontSize: '100px' }}>860 +</h1>
                  <h2 className='mb-0' style={{ color: 'white', fontWeight: 'bold' }}>CUSTOMERS</h2>
                </div>
                <div className="col-7 desc  position-relative" style={{ paddingLeft: '6rem' }}>
                  <img src={asset} alt="" className='asset position-absolute' style={{ top: "-250px", right: "-200px" }} />
                  <h2>WHY CHOOSE US ?</h2>
                  <h4 style={{ fontWeight: 'bold' }}>Quality Guaranteed</h4>
                  <h4 style={{ marginLeft: '10rem', fontWeight: 'bold' }}>Secure Payment</h4>
                  <h4 style={{ marginLeft: '20rem', fontWeight: 'bold' }}>Fast Delivery</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <img src={paw1} alt="" className='paw'/>


        {/* SECTION */}
        <div className="d-flex align-items-center" style={{marginTop: '15%'}}>
          <div className="col-6">
            <div className="d-flex align-items-ceter position-relative">
              <img src={cat} alt="" style={{ width: '55%', position: 'absolute', top: '-200px' }} />
              <div className="caption">
                <h3 className='article'>LEARN HOW TO <br /> CARE PET'S</h3>
                <p className='link mb-0'>More Details</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-ceter position-relative">
              <img src={product} alt="" style={{ width: '30%', position: 'absolute', top: '-85px', left: '60px' }} />
              <div className="caption" style={{marginLeft: '30%'}}>
                <h3 className='article'>BASIC NUTRITION <br /> CHUBBY GUMMY</h3>
                <p className='link mb-0'>Shop Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="d-flex column"> */}
        <img src={paw2} style={{ marginTop:"150px", marginLeft:"100px", width:"60px", transform:"rotate(-20deg)" }} alt=""/>

        {/* <div> */}
          <img src={paw2} style={{ marginTop:"50px", marginLeft:"830px", width:"60px", transform:"rotate(30deg)" }} alt=""/>
        {/* </div> */}
        {/* </div> */}

        {/* <img src={bone1} alt="" className='bone'/>
        <img src={bone1} alt="" className='bone'/> */}

        {/* CATEGORIES */}
        <div className='categories-container'>
          <h2>CATEGORIES</h2>
          <div className="categories d-flex justify-content-between" style={{ marginTop:"50px" }}>
            <img src={bone1} style={{ height:"80px", transform:"rotate(30deg)", marginTop:"100px" }} alt=""/>
            <img src={petSupp} alt="" style={{ marginLeft:"100px" }}/>
            <img src={petSkin} alt="" style={{ marginRight:"100px" }}/>
            <img src={bone1} style={{ height:"80px", transform:"rotate(-10deg)" }}alt=""/>
          </div>
          <div className="products">
                <div className="d-flex py-5 justify-content-center rounded-5" style={{ backgroundColor: '#B1E697' }}>
                <img src={arrowLeft} alt="" style={{ height:"30px", marginTop:"190px", marginRight:"30px" }}/>
                <div className="col-3">
                  <div className="card h-100 border" style={{ borderRadius:"20px" }}>
                    <img src={product1} className="card-img-top" style={{ borderRadius:"20px" }}alt="..."/>
                    <div className="card-body" style={{ backgroundColor:"#397344", color:"white", borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px" }}>
                      <h5 className="card-title">[VITAMIN] Penambah Berat Badan Imun</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3 ms-5 me-5">
                  <div className="card h-100" style={{ borderRadius:"20px" }}>
                    <img src={product2} className="card-img-top" style={{ borderRadius:"20px" }} alt="..."/>
                    <div className="card-body" style={{ backgroundColor:"#397344", color:"white", borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px" }}>
                      <h5 className="card-title">[BUNDLE] Chubby Gummy Urigoel dan Chubby Gummy</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card h-100" style={{ borderRadius:"20px" }}>
                    <img src={product3} className="card-img-top" style={{ borderTopRightRadius:"20px", borderTopLeftRadius:"20px" }} alt="..."/>
                    <div className="card-body" style={{ backgroundColor:"#397344", color:"white", borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px" }}>
                      <h5 className="card-title">Chubby Balme Fungee Obat Jamur Gatal Kemerahan</h5>
                    </div>
                  </div>
                </div>
                <img src={arrowRight} alt="" style={{ height:"30px", marginTop:"190px", marginLeft:"30px" }}/>
              </div>

            </div>
        </div>
        {/* END CATEGORIES */}

        <div className="d-flex decor">
          <img src={paw2} alt="" className='paww'/>
          <img src={bone1} alt="" className='bone'/>
        </div>

        {/* TESTIMONIAL */}
        <div className="testimonials-section">
          <h2 className='mb-5'>TESTIMONIALS</h2>
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="d-flex">
            <div className="col-4 pe-5">
              <img src={logo} alt=""  style={{ width: "50%" }} />
              <div className="more-info">
                <div className="d-flex align-items-center mt-3">
                  <img src={tel} alt="" className='info'/>
                  <p className='Hind'>081330077377 (dr.Yenni)</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={email} alt="" className='info'/>
                  <p className='Hind'>hello@vetpicurean.com</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={loc} alt="" className='info'/>
                  <p className='Hind'>Diamond Regency E7, Kelurahan Keputih, Kecamatan Sukolilo, Surabaya</p>
                </div>
              </div>
            </div>
            <div className="col-4 ps-5">
              <h3 className='mb-0 Raleway mt-4'>Quick Links</h3>
              <p className='Hind mt-4'>About</p>
              <p className='Hind mt-4'>Tips</p>
              <p className='Hind mt-4'>Product</p>
              <p className='Hind mt-4'>Testimonial</p>
            </div>
            <div className="col-4 ps-5">
              <h3 className='mb-0 Raleway mt-4'>Subscribe</h3>
              <div className="d-flex mt-4">
                <input type="text" className="form-control position-relative Hind" placeholder='E-mail'/>
                <button className='btn-paw position-absolute' style={{borderRadius: '50%'}}>
                  <img src={paw2} alt="" className='sub-paw'/>
                </button>
              </div> 
              <p className='mt-4'>Subscribe to more information</p>          
            </div>
          </div>

          <hr />

          <p className='mt-4 text-center'>@2024 vetpicurean | All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Home