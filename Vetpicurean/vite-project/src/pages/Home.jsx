import { Card }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'

import products from '../components/product';
import testi from '../components/testi'


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
// import product from '../assets/product.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'

const Home = () => {
  const navigate = useNavigate()

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const settingss = {
    dots: true,            
    infinite: true,        
    speed: 500,            
    slidesToShow: 3,       
    slidesToScroll: 3,     
    autoplay: true,        
    autoplaySpeed: 10000,  
    arrows: false          
  };

  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  const handleShopNowClick = () => {
    window.location.href = 'https://shopee.co.id/vetpicureanofficial?entryPoint=ShopBySearch&searchKeyword=vetpicurean&is_from_login=true';
  };

  const handleMoreDetailClick = () => {
    navigate('/tips')
  }

  return (
    <div className="overflow-hidden">

      <div className="container">
        <div className="jumbotron jumbo text-center mt-4">
          <h1 className='Raleway'>GIVE YOUR ANIMAL THE BEST</h1>
          <div className="d-flex title Raleway">
            <img src={arrow} alt="" className='arrow' />
            <div className='subtitle'>SUPPLEMENT IN THE WORLD</div>
            <img src={paw1} alt="" className='paw1' />
          </div>
          <p className='Rimouski '>
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
          <Card className='shadow section-choose'>
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
                <p className='link mb-0'  onClick={() => handleMoreDetailClick()}>More Details</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-ceter position-relative">
              <img src={product} alt="" style={{ width: '50%', position: 'absolute', top: '-280px', left: '20px' }} />
              <div className="caption" style={{marginLeft: '30%'}}>
                <h3 className='article'>BASIC NUTRITION <br /> CHUBBY GUMMY</h3>
                <p className='link mb-0' onClick={() => handleShopNowClick()}>Shop Now</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="d-flex justify-content-center" style={{marginTop: '7rem', gap: '30%'}}>
          <img src={paw2} style={{width:"60px", transform:"rotate(-20deg)"}} alt=""/>
          <img src={paw2} style={{width:"60px", transform:"rotate(30deg)" }} alt=""/>
        </div>

        {/* CATEGORIES */}
        <div className='categories-container'>
          <div className="categories d-flex justify-content-between">
            <img src={bone1} style={{ height:"80px", transform:"rotate(30deg)"}} alt=""/>
            <h2>PRODUCTS</h2>
            <img src={bone1} style={{ height:"80px", transform:"rotate(-10deg)" }}alt=""/>
          </div>
          <div className="product shadow">
            <Slider {...settings}>
              {products.map((item) => (
                <div key={item.id} onClick={() => handleProductClick(item.id)}>
                  <div className="img-bodys">
                    <img src={item.src} alt={item.alt} />
                    <div className='d-flex align-items-center justify-content-center title-product mb-4'>
                      <p className='Rimouski mb-0' style={{letterSpacing: '1px'}}>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>    

        <div className="d-flex decor">
          <img src={paw2} alt="" className='paww'/>
          <img src={bone1} alt="" className='bone'/>
        </div>

        {/* TESTIMONIAL */}
        <div className="testimonials-section">
          <h2 className='mb-5'>TESTIMONIALS</h2>
            <Slider {...settingss}>
              {testi.map((item) => (
                <div key={item.id} className="d-flex flex-column justify-contetnt-between testimonial Raleway">
                  <p>{item.text}</p>
                  <div className="author">
                    <p><strong>{item.author}</strong> - {item.pet}</p>
                  </div>
                </div>
              ))}
            </Slider>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="d-flex">
            <div className="col-4 pe-5">
              <img src={logo} alt=""  style={{ width: "50%" }} />
              <div className="more-info">
                <div className="d-flex align-items-center mt-3">
                  <img src={tel} alt="" className='info'/>
                  <p className='Rimouski'>087785098424</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={email} alt="" className='info'/>
                  <p className='Rimouski'>hello@vetpicurean.com</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={loc} alt="" className='info'/>
                  <p className='Rimouski'>Diamond Regency E7, Kelurahan Keputih, Kecamatan Sukolilo, Surabaya</p>
                </div>
              </div>
            </div>
            <div className="col-4 ps-5">
              <h3 className='mb-0 Raleway mt-4'>Quick Links</h3>
              <p className='Rimouski mt-4'>About</p>
              <p className='Rimouski mt-4'>Tips</p>
              <p className='Rimouski mt-4'>Product</p>
              <p className='Rimouski mt-4'>Testimonial</p>
            </div>
            <div className="col-4 ps-5">
              <h3 className='mb-0 Raleway mt-4'>Subscribe</h3>
              <div className="d-flex mt-4">
                <input type="text" className="form-control position-relative Hind" placeholder='E-mail'/>
                <button className='btn-paw position-absolute' style={{borderRadius: '50%'}}>
                  <img src={paw2} alt="" className='sub-paw'/>
                </button>
              </div> 
              <p className='mt-4 Rimouski'>Subscribe to more information</p>          
            </div>
          </div>

          <hr />

          <p className='mt-4 text-center Rimouski'>@2024 vetpicurean | All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Home