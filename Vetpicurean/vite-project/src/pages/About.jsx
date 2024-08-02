// import { useState } from "react"
import arrow from '../assets/arrow.png'
import paw1 from '../assets/paw1.png'
import about from '../assets/about.png'

const About = () => {

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
          <div className="d-flex align-items-center">
            <div className="col-6">
              <img src={about} alt="" />
            </div>
            <div className="col-6">
              <div className="about">
                <h2>ABOUT US</h2>
                <p className='Hind'>Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur vulputate sodales nec non quam. Nostra mattis metus tortor neque vivamus. Varius pretium ultricies inceptos elementum proin duis eleifend nec. Vulputate molestie ante class; tincidunt imperdiet massa a. Ullamcorper ultricies imperdiet urna convallis lorem accumsan.</p>
                <ul>
                  <li>860 + CUSTOMERS</li>
                  <li>STATE 2</li>
                  <li>STATE 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div> 



      </div>
    </div>
  )
}

export default About