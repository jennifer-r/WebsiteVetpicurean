import '../App.css'

import arrow from '../assets/arrow.png'
import paw1 from '../assets/paw1.png'
import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'
import logo from '../assets/vetpic.png'
import tel from '../assets/telephone.png'
import loc from '../assets/loc.png'
import email from '../assets/email.png'
import { useState, useEffect } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    request: ''
  })

  const [userId, setUserId] = useState('')

  useEffect(()=>{
    const fetchUserId = async () => {
      const storedUserId = localStorage.getItem('userId');
      if(storedUserId){
        setUserId(storedUserId)
      }
    }
    fetchUserId()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, userId})
      });
      if(response.ok) {
        alert('Message sent successfully!');
        setFormData({name: '', email: '', subject: '', request: ''})
      }else {
        alert('Failed to send message')
      }
    }catch(err){
      console.error('Error : ', err);
      alert('Error sending message')
    }
  }

  return(
    <div className="overflow-hidden">
      <div className="container">
        <div className="jumbotron jumbo text-center mt-4">
          <h1 className='Raleway'>GIVE YOUR ANIMAL THE BEST</h1>
          <div className="d-flex title Raleway">
            <img src={arrow} alt="" className='arrow'/>
            <div className='subtitle'>SUPPLEMENT IN THE WORLD</div>
            <img src={paw1} alt="" className='paw1'/>
          </div>
          <p className='Rimouski '>We provide a complete collection of high-quality supplements and vitamins designed specifically to meet your pet's health needs</p>
        </div>

        <h2 className='text-center contact'>CONTACT US</h2>
        <div className="d-flex justify-content-between align-items-center ps-5 pe-5">
          <img src={paw2} alt="" className='paw'style={{width: '5rem'}}/>
          <img src={bone1} alt="" className='bone'/>
        </div>
        <div className="row align-self-center justify-content-center">
          <div className="col-6 ps-5">
            <img src={bone1} alt="" className="bone1" style={{marginLeft: '80%'}}/>
            <div className="more-info">
              <div className="d-flex align-items-center mt-4">
                <img src={tel} alt="" className='info-contact'/>
                  <p className='Hind mb-0'>081330077377 (dr.Yenni)</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={email} alt="" className='info-contact'/>
                <p className='Hind mb-0'>hello@vetpicurean.com</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={loc} alt="" className='info-contact'/>
                <p className='Hind mb-0'>Diamond Regency E7, Kelurahan Keputih, Kecamatan Sukolilo, Surabaya</p>
              </div>
            </div>
            <div className="d-flex flex-column" style={{marginTop: '10%'}}>
              <img src={paw2} alt="" className='paww ms-5' style={{marginBottom: '20%'}}/>
              <img src={bone1} alt="" className='bone' style={{marginLeft: '70%'}}/>
            </div>

          </div>
          <div className="col-6 ms-5 contacts">
            <form onSubmit={handleSubmit}>
            <div className="titles">
              <div className="d-flex align-items-center">
                <label htmlFor="exampleInputName1">Your Name</label>
                <img src={paw2} alt="" className='paww ms-3' style={{width: '30px', height: '30px'}}/>
              </div>
              <input type="text" className="form-control mt-3" id="exampleInputName1" aria-describedby="nameHelp" name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div className="titles">
              <div className="d-flex align-items-center">
                <label htmlFor="exampleInputEmail1" className='mt-4'>Your Email</label>
                <img src={paw2} alt="" className='paww ms-3' style={{width: '30px', height: '30px'}}/>
              </div>
              <input type="text" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="nameHelp" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <div className="titles">
              <div className="d-flex align-items-center">
                <label htmlFor="exampleInputSubject1" className='mt-4'>Your Subject</label>
                <img src={paw2} alt="" className='paww ms-3' style={{width: '30px', height: '30px'}}/>
              </div>
              <input type="text" className="form-control mt-3" id="exampleInputSubject1" aria-describedby="nameHelp" name='subject' value={formData.subject} onChange={handleChange}/>
            </div>
            <div className="titles">
              <div className="d-flex align-items-center">
                <label htmlFor="exampleInputRequest1" className='mt-4'>Your Request</label>
                <img src={paw2} alt="" className='paww ms-3' style={{width: '30px', height: '30px'}}/>
              </div>
              <textarea className="form-control mt-3" id="floatingTextarea" name='request' value={formData.request} onChange={handleChange} style={{height: '200px'}}></textarea>
            </div>

            <button className='send mt-4'>SEND MESSANGE</button>
            </form>
          </div>
        </div>
        <div className="" style={{position: 'relative', overflow: 'hidden'}}>
          <img src={paw2} alt="" className='paw2' style={{width: '12%', height: '20%', marginBottom: '-20px', marginLeft: 0}}/>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="d-flex">
            <div className="col-4 pe-5">
              <img src={logo} alt=""  style={{ width: "50%" }} />
              <div className="more-info">
                <div className="d-flex align-items-center mt-3">
                  <img src={tel} alt="" className='info'/>
                    <p className='Hind'>087785098424</p>
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

export default Contact