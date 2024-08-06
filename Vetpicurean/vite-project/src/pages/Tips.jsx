import Card from 'react-bootstrap/Card';
import '../App.css'


import arrow from '../assets/arrow.png'
import paw1 from '../assets/paw1.png'
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import asset from '../assets/asset.png'
import cat from '../assets/cat.png'
import product from '../assets/product.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'
import tipspic from '../assets/pictips.png'

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

const Tips = () => {

  return(
    <div className="overflow-hidden">
      <div className="container">
        <div className="jumbotron text-center mt-4">
          <h1 className='Raleway'>BEST SUPPLEMENT CHOICES</h1>
          <div className="d-flex title Raleway">
            <img src={arrow} alt="" className='arrow'/>
            <div className='subtitle'>FOR YOUR ANIMAL</div>
            <img src={paw1} alt="" className='paw1'/>
          </div>
          <p className='Raleway '>We provide a complete collection of high-quality supplements and vitamins designed specifically to meet your pet's health needs</p>
        </div>

        <div className="tips d-flex flex-column align-items-center">
          <div className="cards mb-5">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={tipspic} alt="" className="img-fluid rounded-start ms-5"/>
              </div>
              <div className="col-md-9">
                <div className="card-body pt-5 pb-5 pe-5">
                  <h3 style={{textTransform: 'uppercase'}}>Top Tips for Choosing the Right Supplements for Your Pet</h3>
                  <p className="mt-4">Ensuring your pet receives the right nutrients is crucial for their overall health and happiness. With so many options available, it can be overwhelming to decide which supplements are best for your furry friend. Here are some tips to help you choose the right supplements, and we'll highlight some great options from Vetpicurean's Chubby Gummy range that you might find helpful.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cards mb-5">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={tipspic} alt="" className="img-fluid rounded-start ms-5"/>
              </div>
              <div className="col-md-9">
                <div className="card-body pt-5 pb-5 pe-5">
                  <h3 style={{textTransform: 'uppercase'}}>Top Tips for Choosing the Right Supplements for Your Pet</h3>
                  <p className="mt-4">Ensuring your pet receives the right nutrients is crucial for their overall health and happiness. With so many options available, it can be overwhelming to decide which supplements are best for your furry friend. Here are some tips to help you choose the right supplements, and we'll highlight some great options from Vetpicurean's Chubby Gummy range that you might find helpful.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cards mb-5">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={tipspic} alt="" className="img-fluid rounded-start ms-5"/>
              </div>
              <div className="col-md-9">
                <div className="card-body pt-5 pb-5 pe-5">
                  <h3 style={{textTransform: 'uppercase'}}>Top Tips for Choosing the Right Supplements for Your Pet</h3>
                  <p className="mt-4">Ensuring your pet receives the right nutrients is crucial for their overall health and happiness. With so many options available, it can be overwhelming to decide which supplements are best for your furry friend. Here are some tips to help you choose the right supplements, and we'll highlight some great options from Vetpicurean's Chubby Gummy range that you might find helpful.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="why align-items-center container">
          <Card style={{ backgroundColor: '#B1E697', borderColor: '#B1E697', padding: "3rem 0px", zIndex: 1 }}>
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

export default Tips