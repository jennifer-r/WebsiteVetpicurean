import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'

import products from '../components/product';
import testi from '../components/testi';


import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'
import arrow from '../assets/arrow.png'
import paw1 from '../assets/paw1.png'
import petsupplement from '../assets/petsupplement.png'
import petskincare from '../assets/petskincare.png'

const Product = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    rows: 3
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

  return(
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
        </div>
        <div className="d-flex justify-content-between mt-5">
          <img src={paw2} className='paww' alt=""/>
          <img src={bone1} style={{ height:"80px", transform:"rotate(100deg)" }}alt=""/>
        </div>

        {/* CATEGORIES */}
        <div className='categories-container'>
          <h2>PRODUCTS</h2>
          <img src={paw2} style={{width:"60px", transform:"rotate(30deg)", marginRight: '-60%'}} alt=""/>
          <div className="categories d-flex align-items-end justify-content-between">
            <img src={bone1} style={{ height:"80px", transform:"rotate(30deg)"}} alt=""/>
            <div className="d-flex justify-contet-center" style={{gap: '350px'}}>
              <div className="d-flex flex-column align-items-center">
                <img src={petsupplement} alt="" className='kategori'/>
                <p className='Hind mt-4 petsupplement'>PET SUPPLEMENT</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src={petskincare} alt="" className='kategori'/>
                <p className='Hind mt-4 petsupplement'>PET SKINCARE</p>
              </div>
            </div>
            <img src={bone1} style={{ height:"80px", transform:"rotate(-10deg)" }}alt=""/>
          </div>
          <img src={paw2} style={{width:"60px", transform:"rotate(30deg)"}} alt=""/>
          <div className="product shadow">
            <Slider {...settings}>
              {products.map((item) => (
                <div key={item.id}>
                  <div className="img-bodys">
                    <img src={item.src} alt={item.alt} />
                    <div className='d-flex align-items-center justify-content-center title-product mb-4'>
                      <p className='Raleway mb-0'>{item.title}</p>
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

export default Product