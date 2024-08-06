// import { useState } from "react"
import Card from 'react-bootstrap/Card';
import '../App.css'
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import petSupp from '../assets/petSupp.png'
import petSkin from '../assets/petSkin.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'

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

const Product = () => {

  return(
    <div className="overflow-hidden">
    <div className="container">
      {/* CATEGORIES */}
      <div className='categories-container'>
          <h2>PRODUCTS</h2>
          <div className="categories d-flex justify-content-between" style={{ marginTop:"50px" }}>
            <img src={bone1} style={{ height:"80px", transform:"rotate(30deg)", marginTop:"100px" }} alt=""/>
            <img src={petSupp} alt="" style={{ marginLeft:"100px" }}/>
            <img src={petSkin} alt="" style={{ marginRight:"100px" }}/>
            <img src={bone1} style={{ height:"80px", transform:"rotate(-10deg)" }}alt=""/>
          </div>
          <div className="products">
              <div className="d-flex py-5 justify-content-center" style={{ backgroundColor: '#B1E697', borderTopLeftRadius:"50px", borderTopRightRadius:"50px" }}>
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
              </div>
              <div className="d-flex py-5 justify-content-center" style={{ backgroundColor: '#B1E697' }}>

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
              </div>
              
              <div className="d-flex py-5 justify-content-center" style={{ backgroundColor: '#B1E697', borderBottomLeftRadius:"50px", borderBottomRightRadius:"50px" }}>

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

export default Product